import { JANUARY_COLORS } from '../../../shared/color';
import {
  createButtonWithText,
  createDivWithElements,
  createHomewardButton,
  createImage,
  createSpan,
  removeByClassName,
  setBackground,
} from '../../../shared/shared.helpers';
import { BOOKS_IMAGES } from '../books.constants';
import {
  CARDS_PER_DEAL,
  DECK_EXHAUSTED_TEXT,
  DECK_TEXT,
  FLIP_CAPTION_DELAY_MS,
  INSTRUCTION_TEXT,
  JANUARY_ORACLE,
  MAGIC_CARD_TEXT,
  ORACLE_IMAGES,
  ORACLE_SQUARES,
  OracleCard,
  OracleSquare,
} from './constants';
import './oracle.css';

/**
 * The January oracle deck, ported from the standalone vanilla-JS page.
 *
 * Everything this module creates carries the class `oracle`, so `leaveOracle` can take the
 * whole thing away in one call. All listeners live on elements inside that subtree — there
 * are no window or document listeners, no intervals and no audio — so removing the DOM
 * removes the listeners with it. The one thing that outlives the DOM is the flip timeout,
 * which is tracked and cleared explicitly.
 */

/** The three word columns, in the order the original laid them out. */
const WORD_COLUMNS = [
  { key: 'nouns', heading: 'Nouns' },
  { key: 'verbs', heading: 'Verbs' },
  { key: 'adjectives', heading: 'Adjectives' },
] as const;

type WordColumn = typeof WORD_COLUMNS[number]['key'];

/**
 * Per-opening state. Reset by `oracle()` and torn down by `leaveOracle()` so that opening
 * the deck a second time in one session starts clean.
 */
let drawPile: OracleCard[] = [];
let cardBeingDragged: HTMLElement | null = null;
let squaresByElement: Map<HTMLElement, OracleSquare> = new Map();
let deckElement: HTMLElement | null = null;
let pendingFlipTimeouts: number[] = [];

export function oracleBox(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.oracleBox, ['cover'], 'oracle-box');
}

function panelElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function setText(id: string, text: string) {
  const element = panelElement(id);
  if (element) element.innerText = text;
}

/**
 * The "This represents" readout for a square.
 *
 * The original scraped this out of the DOM — `card.parentNode.innerText`, then stripped the
 * face-down card's caption and any parenthesised instruction with a regex. Deriving it from
 * the square model gives the same string without reading text back out of the page, and
 * without the caption of a card sitting in the square being able to leak into it.
 */
function locationTextFor(square: OracleSquare): string {
  if (square.id === 'deck') return DECK_TEXT;
  const spokenInstructions = square.instructions.filter(
    instruction => !/^\([A-Z ]+\)$/.test(instruction),
  );
  return [...square.meanings, ...spokenInstructions].join('\n');
}

function showLocationText(card: HTMLElement) {
  const square = card.parentElement ? squaresByElement.get(card.parentElement) : undefined;
  if (square) setText('oracle-card-location', locationTextFor(square));
}

function showWords(column: WordColumn, words: string[]) {
  const wordSpot = panelElement(`oracle-${column}`);
  if (!wordSpot) return;
  words.forEach(word => wordSpot.append(createSpan(word, ['oracle-word', 'oracle'])));
}

function clearWords() {
  removeByClassName('oracle-word');
}

function showAssociatedText(card: OracleCard, cardElement: HTMLElement) {
  showLocationText(cardElement);
  // January cards all read as interpretations. February cards will carry a poem here
  // instead; the switch is where that arm gets its rendering.
  if (card.reading.kind === 'interpretation') {
    setText('oracle-description', card.reading.text);
  }
  setText('oracle-card-title', card.title);
  clearWords();
  showWords('nouns', card.nouns);
  showWords('verbs', card.verbs);
  showWords('adjectives', card.adjectives);
}

/** Builds one card, face down, in the deck. */
function showCard(card: OracleCard) {
  const image = createImage(ORACLE_IMAGES[card.name], ['oracle'], `oracle-card-image-${card.name}`);
  const front = createDivWithElements([image], ['oracle-front', 'oracle']);

  const backText = createSpan(MAGIC_CARD_TEXT, ['oracle-back-text', 'oracle']);
  const backTextContainer = createDivWithElements([backText], ['oracle-back-text-container', 'oracle']);
  const back = createDivWithElements(
    [
      createDivWithElements([], ['oracle-back-design-circle', 'oracle']),
      createDivWithElements([], ['oracle-back-design-diamond', 'oracle']),
      backTextContainer,
    ],
    ['oracle-back', 'oracle'],
  );

  const cardInner = createDivWithElements([front, back], ['oracle-card-inner', 'oracle']);
  const cardElement = createDivWithElements([cardInner], ['oracle-card', 'oracle']);

  cardElement.draggable = true;
  cardElement.addEventListener('dragstart', () => {
    cardBeingDragged = cardElement;
  });
  cardElement.addEventListener('click', () => showAssociatedText(card, cardElement));
  cardElement.addEventListener(
    'click',
    () => {
      cardInner.classList.add('oracle-flip');
      // Clear the caption behind the card once it is edge-on, so it is never seen mirrored.
      // The original re-queried the caption by id here, which threw if the deck had been
      // torn down inside the flip; holding the reference and tracking the timeout does not.
      const timeout = window.setTimeout(() => {
        backText.innerText = '';
      }, FLIP_CAPTION_DELAY_MS);
      pendingFlipTimeouts.push(timeout);
    },
    { once: true },
  );

  if (deckElement) deckElement.append(cardElement);
}

function acceptDrop(draggedCard: HTMLElement | null, event: DragEvent) {
  event.preventDefault();
  if (!draggedCard || !draggedCard.parentElement) return;
  const target = event.target as HTMLElement | null;
  if (!target) return;

  // Preserved from the original: the drop target is resolved by looking at the dropped-on
  // element and then at its parent, and no further. A square already holding a card is
  // therefore not a valid destination — the drop lands on the card's <img>, which is four
  // levels deep, so neither check matches and nothing moves. That is what stops two cards
  // being stacked in one square. It reads like an accident rather than a design, but it is
  // load-bearing, so it is preserved rather than "fixed".
  const candidates = [target, target.parentElement];
  const destination = candidates.find(
    element =>
      element !== null &&
      element.classList.contains('oracle-droptarget') &&
      element.id !== draggedCard.parentElement!.id,
  );
  if (destination) {
    draggedCard.parentElement.removeChild(draggedCard);
    destination.append(draggedCard);
  }
  showLocationText(draggedCard);
}

function removeCards() {
  removeByClassName('oracle-card');
  clearWords();
  setText('oracle-description', INSTRUCTION_TEXT);
  setText('oracle-card-location', DECK_TEXT);
  setText('oracle-card-title', '');
}

/**
 * Deals one card per drop target.
 *
 * The draw is uniform without replacement — a random index into the remaining pile, spliced
 * out — and the pile is not reshuffled or restored between deals, so the deck depletes over
 * the session and the last deal is short. Preserved exactly, including the odd terminating
 * guard: `index === drawPile.length` can only ever be true when the pile is empty, because
 * `Math.floor(Math.random() * n)` never returns `n`. It reads as an off-by-one that happens
 * to work, and it is the only thing stopping the loop at the end of the deck.
 *
 * The one thing the port must decide is when the pile refills. The original relied on a page
 * reload; there is no reload here, so `oracle()` refills on each opening — closing the box and
 * opening it again is the new "refresh".
 */
function deal() {
  removeCards();
  for (let i = 0; i < CARDS_PER_DEAL; i++) {
    const index = Math.floor(Math.random() * drawPile.length);
    if (index === drawPile.length) {
      setText('oracle-description', DECK_EXHAUSTED_TEXT);
      break;
    }
    showCard(drawPile[index]);
    drawPile.splice(index, 1);
  }
}

function buildSquare(square: OracleSquare): HTMLElement {
  const contents: HTMLElement[] = [];

  if (square.direction) {
    const direction = createSpan(square.direction.text, ['oracle-direction', 'oracle']);
    direction.style.transform = `rotate(${square.direction.rotation}deg)`;
    contents.push(direction);
  }
  square.meanings.forEach(meaning => contents.push(createSpan(meaning, ['oracle'])));
  square.instructions.forEach(instruction =>
    contents.push(createSpan(instruction, ['oracle-instructions', 'oracle'])),
  );
  if (square.hasDealButton) {
    const dealButton = createButtonWithText('Deal', ['oracle'], 'oracle-deal');
    dealButton.addEventListener('click', deal);
    contents.push(dealButton);
  }

  const classNames = square.isDropTarget ? ['oracle-square', 'oracle-droptarget', 'oracle'] : ['oracle-square', 'oracle'];
  const element = createDivWithElements(contents, classNames, `oracle-square-${square.id}`);

  if (square.isDropTarget) {
    element.addEventListener('dragover', event => event.preventDefault());
    element.addEventListener('drop', event => acceptDrop(cardBeingDragged, event as DragEvent));
  }
  return element;
}

function buildSpread(): HTMLElement {
  squaresByElement = new Map();
  const squares = ORACLE_SQUARES.map(square => {
    const element = buildSquare(square);
    squaresByElement.set(element, square);
    if (square.id === 'deck') deckElement = element;
    return element;
  });
  return createDivWithElements(squares, ['oracle'], 'oracle-spread');
}

function buildDivinersPanel(): HTMLElement {
  const heading = document.createElement('h2');
  heading.innerText = 'For diviners';
  const title = document.createElement('h3');
  title.id = 'oracle-card-title';
  // Divs, not spans: both hold multi-line text. `innerText` turns the newlines into <br>,
  // which is how the deck text and the instructions keep their line breaks.
  const description = createDivWithElements([], ['oracle'], 'oracle-description');
  description.innerText = INSTRUCTION_TEXT;
  const representsHeading = document.createElement('h3');
  representsHeading.innerText = 'This represents';
  const location = createDivWithElements([], ['oracle'], 'oracle-card-location');
  location.innerText = DECK_TEXT;
  return createDivWithElements(
    [heading, title, description, representsHeading, location],
    ['oracle-panel', 'oracle'],
    'oracle-diviners',
  );
}

function buildStorytellersPanel(): HTMLElement {
  const heading = document.createElement('h2');
  heading.innerText = 'For storytellers';
  const columns = WORD_COLUMNS.map(column => {
    const columnHeading = document.createElement('h3');
    columnHeading.innerText = column.heading;
    return createDivWithElements([columnHeading], ['oracle-words', 'oracle'], `oracle-${column.key}`);
  });
  return createDivWithElements(
    [heading, ...columns],
    ['oracle-panel', 'oracle'],
    'oracle-storytellers',
  );
}

/**
 * Teardown. Removes every element the deck created, cancels the outstanding flip timeout and
 * drops all references, so a second opening starts from nothing. Safe to call twice.
 */
export function leaveOracle() {
  pendingFlipTimeouts.forEach(timeout => window.clearTimeout(timeout));
  pendingFlipTimeouts = [];
  removeByClassName('oracle');
  squaresByElement = new Map();
  deckElement = null;
  cardBeingDragged = null;
  drawPile = [];
}

export function oracle(goBack: () => void) {
  // Defensive: never two decks at once, whatever happened on the way in.
  leaveOracle();
  setBackground(JANUARY_COLORS.white);

  // A fresh shuffle per opening. See `deal()`.
  drawPile = [...JANUARY_ORACLE];

  const all = document.getElementsByTagName('html')[0];
  const table = createDivWithElements(
    [buildDivinersPanel(), buildSpread(), buildStorytellersPanel()],
    ['oracle'],
    'oracle-table',
  );
  all.append(table);
  all.append(
    createHomewardButton('Put the cards away', ['oracle'], () => {
      leaveOracle();
      goBack();
    }),
  );

  deal();
}
