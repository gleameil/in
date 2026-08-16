import { ImageCatalog } from '../../../shared/shared.constants';

/**
 * The sidebar payload for a card.
 *
 * January cards carry an `interpretation` — a prose divination. February cards will
 * carry a `poem` instead. Modelled as a discriminated union from the start so the two
 * months cannot be confused for one another: a `string` that means "interpretation" in
 * January and "poem" in February is exactly the ambiguity this avoids.
 *
 * The `poem` arm is declared but unused in January. Nothing in this file builds February
 * content; the shape simply exists so February does not have to reopen these types.
 */
export type CardReading =
  | { kind: 'interpretation'; text: string }
  | { kind: 'poem'; title?: string; lines: string[] };

export interface OracleCard {
  /** Also the key into `ORACLE_IMAGES`, and the source image's filename stem. */
  name: string;
  title: string;
  reading: CardReading;
  nouns: string[];
  adjectives: string[];
  verbs: string[];
}

/** A rotated axis label ("<- past ->") drawn in one of the non-dealing squares. */
export interface SquareDirection {
  text: string;
  /** Degrees. The four labels point inward around the spread. */
  rotation: number;
}

/**
 * One cell of the 3x3 spread. Declared in reading order (top-left to bottom-right);
 * the grid itself is CSS.
 *
 * `meanings` and `instructions` are also the source of the "This represents" readout.
 * The original scraped that text back out of the DOM with `parentNode.innerText` and a
 * regex that stripped the parenthesised instruction words and any face-down card's
 * "magic card" caption. Deriving it from this model instead produces the identical
 * string without the scraping — see `locationTextFor`.
 */
export interface OracleSquare {
  id: string;
  /** Drop targets receive cards; the other four squares are labels and the deck. */
  isDropTarget: boolean;
  meanings: string[];
  /**
   * Read across the drop targets in order, these spell
   * "DRAG / A CARD / HERE / OR / HERE". Parenthesised entries are omitted from the
   * "This represents" readout; bare ones (square 4's HERE / NOW) are kept.
   */
  instructions: string[];
  direction?: SquareDirection;
  /** Square 7 carries the Deal button. */
  hasDealButton?: boolean;
}

export const MAGIC_CARD_TEXT = '✨ magic card ✨';

export const DECK_TEXT = 'the deck\nmystery\npure possibility';

/**
 * The original's fourth line was "Refresh to shuffle & start over" — true of a standalone
 * page, false inside `/in/`, where there is no page to refresh. Closing the box is now the
 * reset (see `oracle()`), so the line names that instead. The only instruction text changed
 * in the port.
 */
export const INSTRUCTION_TEXT =
  'Drag a card to place it.\n' +
  'Click a card to reveal it.\n' +
  'Deal to see the next 5 cards.\n' +
  'Put the cards away to shuffle & start over.';

/**
 * Shown when the draw pile runs out. The original raised a `window.alert` reading
 * "You have reached the end of the deck! Refresh to start over" — an OS dialogue in the
 * middle of a piece of net art, telling the player to do something that no longer resets
 * anything. Same moment, same meaning, rendered into the sidebar instead.
 */
export const DECK_EXHAUSTED_TEXT =
  'You have reached the end of the deck.\nPut the cards away to shuffle & start over.';

export const ORACLE_SQUARES: OracleSquare[] = [
  {
    id: '1',
    isDropTarget: true,
    meanings: ['old desires', 'old ideas', 'old dreams', 'old selves'],
    instructions: ['(DRAG)'],
  },
  {
    id: 'deck',
    isDropTarget: false,
    meanings: [],
    instructions: [],
    direction: { text: '← inner →', rotation: 0 },
  },
  {
    id: '2',
    isDropTarget: true,
    meanings: ['new ideas', 'new beliefs', 'possible selves', 'new directions'],
    instructions: ['(A CARD)'],
  },
  {
    id: '3',
    isDropTarget: false,
    meanings: [],
    instructions: [],
    direction: { text: '← past →', rotation: -90 },
  },
  {
    id: '4',
    isDropTarget: true,
    meanings: [],
    instructions: ['HERE', 'NOW'],
  },
  {
    id: '5',
    isDropTarget: false,
    meanings: [],
    instructions: [],
    direction: { text: '← future →', rotation: 90 },
  },
  {
    id: '6',
    isDropTarget: true,
    meanings: ['backstory', 'old work', 'childhood', 'heritage'],
    instructions: ['(OR)'],
  },
  {
    id: '7',
    isDropTarget: false,
    meanings: [],
    instructions: [],
    direction: { text: '← outer →', rotation: 180 },
    hasDealButton: true,
  },
  {
    id: '8',
    isDropTarget: true,
    meanings: ['new home', 'new work', 'opportunities', 'outcomes'],
    instructions: ['(HERE)'],
  },
];

/** One deal fills every drop target. Five, at time of writing. */
export const CARDS_PER_DEAL = ORACLE_SQUARES.filter(square => square.isDropTarget).length;

/** Matches the CSS flip transition, after which the back caption is cleared. */
export const FLIP_CAPTION_DELAY_MS = 200;

/**
 * Card art. Keys are `OracleCard.name`. Written out one by one rather than generated
 * from the card list because Parcel resolves `new URL(..., import.meta.url)` statically —
 * a templated path would not be seen by the bundler.
 *
 * Alt text is the card's title. The art is abstract and the interpretations are readings
 * rather than descriptions, so a true visual description would have to be written by hand.
 */
export const ORACLE_IMAGES: ImageCatalog = {
  acidrain: {
    path: new URL('../../../assets/images/books/oracleJanuary/acidrain.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: Acid Rain',
  },
  away: {
    path: new URL('../../../assets/images/books/oracleJanuary/away.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Messenger',
  },
  bigrockcandymountain: {
    path: new URL('../../../assets/images/books/oracleJanuary/bigrockcandymountain.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Earthly Paradise',
  },
  birdface: {
    path: new URL('../../../assets/images/books/oracleJanuary/birdface.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Crow',
  },
  chainedstar: {
    path: new URL('../../../assets/images/books/oracleJanuary/chainedstar.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Chained Star',
  },
  cityscape: {
    path: new URL('../../../assets/images/books/oracleJanuary/cityscape.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The City',
  },
  colors: {
    path: new URL('../../../assets/images/books/oracleJanuary/colors.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: Chaos Trapped',
  },
  conversation: {
    path: new URL('../../../assets/images/books/oracleJanuary/conversation.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Conversation',
  },
  creator: {
    path: new URL('../../../assets/images/books/oracleJanuary/creator.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Creator',
  },
  dancing: {
    path: new URL('../../../assets/images/books/oracleJanuary/dancing.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Dance',
  },
  delighttree: {
    path: new URL('../../../assets/images/books/oracleJanuary/delighttree.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Delight Tree',
  },
  diva: {
    path: new URL('../../../assets/images/books/oracleJanuary/diva.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Diva',
  },
  earthandair: {
    path: new URL('../../../assets/images/books/oracleJanuary/earthandair.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: Earth and Air',
  },
  edges: {
    path: new URL('../../../assets/images/books/oracleJanuary/edges.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: Edges',
  },
  forest: {
    path: new URL('../../../assets/images/books/oracleJanuary/forest.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Forest',
  },
  girl: {
    path: new URL('../../../assets/images/books/oracleJanuary/girl.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Rebel',
  },
  glasses: {
    path: new URL('../../../assets/images/books/oracleJanuary/glasses.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Question',
  },
  grass: {
    path: new URL('../../../assets/images/books/oracleJanuary/grass.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Grass',
  },
  gravitydefyingvillage: {
    path: new URL('../../../assets/images/books/oracleJanuary/gravitydefyingvillage.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Village',
  },
  grin: {
    path: new URL('../../../assets/images/books/oracleJanuary/grin.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Ambassador',
  },
  gymnast: {
    path: new URL('../../../assets/images/books/oracleJanuary/gymnast.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Gymnast',
  },
  gymnasticalfantastical: {
    path: new URL('../../../assets/images/books/oracleJanuary/gymnasticalfantastical.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Junk',
  },
  horseman: {
    path: new URL('../../../assets/images/books/oracleJanuary/horseman.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Horseman',
  },
  howifeel: {
    path: new URL('../../../assets/images/books/oracleJanuary/howifeel.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Skyful Day',
  },
  hunter: {
    path: new URL('../../../assets/images/books/oracleJanuary/hunter.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Hunter',
  },
  inthedark: {
    path: new URL('../../../assets/images/books/oracleJanuary/inthedark.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: In the Dark',
  },
  joy: {
    path: new URL('../../../assets/images/books/oracleJanuary/joy.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Symphony',
  },
  lemurs: {
    path: new URL('../../../assets/images/books/oracleJanuary/lemurs.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Lemurs',
  },
  lily: {
    path: new URL('../../../assets/images/books/oracleJanuary/lily.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Lily',
  },
  mandala: {
    path: new URL('../../../assets/images/books/oracleJanuary/mandala.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Mandala',
  },
  map: {
    path: new URL('../../../assets/images/books/oracleJanuary/map.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Map',
  },
  moose: {
    path: new URL('../../../assets/images/books/oracleJanuary/moose.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Bull Moose',
  },
  numeric: {
    path: new URL('../../../assets/images/books/oracleJanuary/numeric.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Arachnoscape',
  },
  outdoorcafe: {
    path: new URL('../../../assets/images/books/oracleJanuary/outdoorcafe.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Café',
  },
  outraged: {
    path: new URL('../../../assets/images/books/oracleJanuary/outraged.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Outrage',
  },
  pensive: {
    path: new URL('../../../assets/images/books/oracleJanuary/pensive.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The News',
  },
  scarredsun: {
    path: new URL('../../../assets/images/books/oracleJanuary/scarredsun.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Scarred Sun',
  },
  colorportrait: {
    path: new URL('../../../assets/images/books/oracleJanuary/colorportrait.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Advisor',
  },
  time: {
    path: new URL('../../../assets/images/books/oracleJanuary/time.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: Time Flies',
  },
  trout: {
    path: new URL('../../../assets/images/books/oracleJanuary/trout.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Trout',
  },
  wig: {
    path: new URL('../../../assets/images/books/oracleJanuary/wig.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Wig',
  },
  woman: {
    path: new URL('../../../assets/images/books/oracleJanuary/woman.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: In the Garden',
  },
  wondersofreality: {
    path: new URL('../../../assets/images/books/oracleJanuary/wondersofreality.jpg?as=webp', import.meta.url),
    alt: 'Oracle card: The Scientist',
  },};

/**
 * The January deck: 43 cards.
 *
 * Treated as immutable. `oracle()` copies it into a per-opening draw pile; dealing never
 * mutates this array. (The original spliced cards straight out of the source array, which
 * a page reload undid. See `oracle.ts`.)
 */
export const JANUARY_ORACLE: OracleCard[] = [
  {
    name: 'acidrain',
    title: 'Acid Rain',
    reading: {
      kind: 'interpretation',
      text:
        'This smoggy abstract cityscape is half in a storm and half aglow in the sun. An image of the ' +
        'contradictions and precariousness of today\'s world. More immediately, may also signify ' +
        'simply a city, especially a troubled one. It is unclear whether the rain\'s penetration into ' +
        'the outlines of the "buildings" indicates that they are already ruined or whether it is a ' +
        'forecast of ruin to come. May something better rise from the ashes.',
    },
    nouns: ['structure', 'city', 'scaffold', 'ruin', 'downpour'],
    adjectives: ['porous', 'geometric', 'dirty', 'unstable', 'modern'],
    verbs: ['juxtapose', 'obstruct', 'tower', 'quake', 'storm'],
  },
  {
    name: 'away',
    title: 'The Messenger',
    reading: {
      kind: 'interpretation',
      text:
        'The querent or someone they encounter will bear a message more significant than they are. We ' +
        'all sometimes play bit parts in others\' lives, and the vague and uneasy individual portrayed ' +
        'here is eager to disappear into the background from which they emerged, perhaps because the ' +
        'news they bring is not of the best. Be sure to follow where this person points, or if you ' +
        'are the one doing the pointing, ensure that your message is communicated.',
    },
    nouns: ['messenger', 'stranger', 'direction', 'shock', 'encounter'],
    adjectives: ['incomplete', 'fleeting', 'shy', 'uneasy', 'vague'],
    verbs: ['gesture', 'point', 'defer', 'pass along', 'wait'],
  },
  {
    name: 'bigrockcandymountain',
    title: 'The Earthly Paradise',
    reading: {
      kind: 'interpretation',
      text:
        'A paradise of candy and rivers that run with soda (or whisky) and the particular comforts ' +
        'you long for and are deprived of in life, a simple and narrow view of the desirable but also ' +
        'a warm and true one, a vision of joy faded and half-humorous. Justly rebellious desires.',
    },
    nouns: ['whimsy', 'candy', 'magic', 'paradise', 'comfort'],
    adjectives: ['simple', 'happy', 'hazy', 'pink', 'sweet'],
    verbs: ['wish', 'dream', 'imagine', 'play', 'seek'],
  },
  {
    name: 'birdface',
    title: 'The Crow',
    reading: {
      kind: 'interpretation',
      text:
        'This handsome crow is inexplicably magenta. As with Gandalf, whether their serious side or ' +
        'their playful side comes to the fore in this situation depends on the mood of the querent ' +
        'and the surrounding images. This signifies a wise advisor, perhaps more or other than human, ' +
        'powerful, with some seeming impossibility represented by the unlikely color.',
    },
    nouns: ['ambassador', 'bird', 'enigma', 'crow', 'portrait'],
    adjectives: ['magenta', 'wise', 'surreal', 'serious', 'silly'],
    verbs: ['play', 'advise', 'greet', 'gaze', 'caw'],
  },
  {
    name: 'chainedstar',
    title: 'The Chained Star',
    reading: {
      kind: 'interpretation',
      text:
        'The chained star is an image of wronged innocence: imprisoned sweetness that shines on, ' +
        'undefeated though wounded, retaining its joy and goodness. The circumstances hampering the ' +
        'star are beyond the star\'s control, but faith is often rewarded. Woe betide if you wrought ' +
        'the chains and not the light depected here, for a reversal is almost bound to happen. The ' +
        'simplicity of this image does not render it easily exhausted; the star could be any fairy ' +
        'tale princess, or a whole oppressed people, but as long as injustice remains such images ' +
        'will remain as well.',
    },
    nouns: ['pathos', 'sweetness', 'wound', 'star', 'chain'],
    adjectives: ['helpless', 'radiant', 'tragic', 'innocent', 'unjust'],
    verbs: ['shine', 'rescue', 'struggle', 'twinkle', 'hope'],
  },
  {
    name: 'cityscape',
    title: 'The City',
    reading: {
      kind: 'interpretation',
      text:
        'The lights in this city and the twilight skies complement one another; nature and humanity ' +
        'agree. Surely cars will pour down the street pictured here at any moment, but they will ' +
        'render the landscape no less beautiful. Signifies, abstractly, harmony and the best of ' +
        'humanity and, concretely, a city the querent loves.',
    },
    nouns: ['evening', 'lull', 'city', 'streetlight', 'concord'],
    adjectives: ['still', 'busy', 'beautiful', 'warm', 'safe'],
    verbs: ['bustle', 'pause', 'illumine', 'comfort', 'continue'],
  },
  {
    name: 'colors',
    title: 'Chaos Trapped',
    reading: {
      kind: 'interpretation',
      text:
        'A great deal of energy and a certain joy, but constrained and separated from true joy and ' +
        'freedom. Agitation, noise, anxiety, enthusiasm. Often little higher purpose or freedom, ' +
        'little true happiness. Energy that can be harnessed. A mood or a milieu.',
    },
    nouns: ['colors', 'shapes', 'chaos', 'riot', 'energy'],
    adjectives: ['claustrophobic', 'indoor', 'bright', 'prosaic', 'abstract'],
    verbs: ['throng', 'jostle', 'blare', 'connect', 'bustle'],
  },
  {
    name: 'conversation',
    title: 'The Conversation',
    reading: {
      kind: 'interpretation',
      text:
        'Concord in discord, these friends are engaged in some kind of intellectual debate. They ' +
        'represent opposites, one shining in the light, the other a shadow. They may represent the ' +
        'Jungian duality of ego and shadow, or they may indicate some other binary (not good and ' +
        'evil). It is unclear whether they are two people or two parts of one, but in either case, ' +
        'the conversation, the meeting of opposites, of complements, is a productive one. It might be ' +
        'acrimonious, or seem so, but it is most likely more deeply a friendship or union.',
    },
    nouns: ['colloquy', 'friends', 'companion', 'concord', 'discord'],
    adjectives: ['complementary', 'equal', 'different', 'amiable', 'curious'],
    verbs: ['debate', 'balance', 'inquire', 'compromise', 'learn'],
  },
  {
    name: 'creator',
    title: 'The Creator',
    reading: {
      kind: 'interpretation',
      text:
        'This being, simply rendered with their simple bluish bubbles is at the beginning of a long ' +
        'process of creation; it may be they literally create worlds, being a kind of demiurge, or it ' +
        'may be they are simply an artist beginning their latest work. The appearance of simplicity ' +
        'is not false, exactly, but it is the kind of simplicity from which complex immensities are ' +
        'sewn.',
    },
    nouns: ['artist', 'art', 'deity', 'beginning', 'worlds'],
    adjectives: ['simple', 'visionary', 'ultramundane', 'creative', 'new'],
    verbs: ['arrange', 'create', 'dream', 'build', 'gaze'],
  },
  {
    name: 'dancing',
    title: 'The Dance',
    reading: {
      kind: 'interpretation',
      text:
        'In this dance of life, we meet many potential partners. Most of them we dance with briefly ' +
        'and then send on their way, or vice versa. This is an encounter between two who might be ' +
        'more intimately acquainted, or might not. The partner on the left, in focus, has the ' +
        'obligation to make up their mind, and that decision is going to happen soon. A crux, a ' +
        'decision point, is fast approaching even if it is not upon the querent, but it is a decision ' +
        'point particularly relating to associations, romantic or friendly, not achievements or ' +
        'challenges.',
    },
    nouns: ['relationship', 'waltz', 'party', 'romance', 'music'],
    adjectives: ['adversarial', 'playful', 'loving', 'acrimonious', 'conflicted'],
    verbs: ['meet', 'dance', 'enjoy', 'decide', 'part'],
  },
  {
    name: 'delighttree',
    title: 'The Delight Tree',
    reading: {
      kind: 'interpretation',
      text:
        'Release, fulfillment, expected or unexpected, joy that is simple, wild, and unconstrained, ' +
        'or the cause thereof. A happy ending that promises stories to come. Dancing, motion, sudden ' +
        'freedom after imprisonment. Possibly something unsophisticated and over-simple. Cosmic ' +
        'laughter. Fine spring days. Overcoming entrapment.',
    },
    nouns: ['joy', 'mess', 'luck', 'party', 'energy'],
    adjectives: ['exuberant', 'free', 'childlike', 'happy', 'radiant'],
    verbs: ['play', 'delight', 'celebrate', 'overflow', 'move'],
  },
  {
    name: 'diva',
    title: 'The Diva',
    reading: {
      kind: 'interpretation',
      text:
        'This bold individual is at once entirely honest and entirely about show (their inside is ' +
        'their outside). Something more than a chance encounter and something less than a companion, ' +
        'they are, perhaps, an enemy, perhaps a friend. They have both charm and the strength to ' +
        'destroy. I imagine they hold some heavy thing, a car or a piano, over the head of their ' +
        'fellow-performer with superhuman strength.',
    },
    nouns: ['power', 'nerve', 'blonde', 'show', 'muscle'],
    adjectives: ['brazen', 'outward', 'in-your-face', 'wild', 'funny'],
    verbs: ['joke', 'snarl', 'lift', 'attract', 'drop'],
  },
  {
    name: 'earthandair',
    title: 'Earth and Air',
    reading: {
      kind: 'interpretation',
      text:
        'Two nature spirits meet and mingle, one of earth and one of air, here signifying especially ' +
        'the concrete and the abstract respectively, the tangible and the imagined, the experienced ' +
        'and the thought. This can signify an inner split in the querent or a contest of forces in ' +
        'their life or among those of their acquaintance. Whether this meeting is amicable or hostile ' +
        'depends on the surrounding circumstances, the surrounding images, and/or the will of the ' +
        'querent.',
    },
    nouns: ['duality', 'nature', 'goddesses', 'force', 'conflict'],
    adjectives: ['immense', 'complementary', 'double', 'splendid', 'ancient'],
    verbs: ['meet', 'negotiate', 'mingle', 'appear', 'represent'],
  },
  {
    name: 'edges',
    title: 'Edges',
    reading: {
      kind: 'interpretation',
      text:
        'An ordinary sight seen anew, with less comprehension but more appreciation than before. ' +
        'Perceiving the strangeness and cracks in the trivial. Close but unscientific observation. A ' +
        'mood of strangeness, possibly sinister for all its seeming daylight clarity, possibly sweet ' +
        'and slipping and all-but sublime. Mooreeffoc.',
    },
    nouns: ['foliage', 'perspective', 'shadow', 'edge', 'sidewalk'],
    adjectives: ['green', 'uneasy', 'wavy', 'sunny', 'liminal'],
    verbs: ['reflect', 'shine', 'disorient', 'observe', 'defamiliarize'],
  },
  {
    name: 'forest',
    title: 'The Forest',
    reading: {
      kind: 'interpretation',
      text:
        'Cool and dark, shifting, this forest represents what is not human, particularly earthly ' +
        'nature as apart from humanity, old as ages and yet vulnerable to human activities. It holds ' +
        'mysteries and occasionally dangers. It is to be trifled with at our peril, for though it is ' +
        'not we, it gave birth to us and sustains us. Metaphorically, things hidden from view and not ' +
        'meant for prying eyes.',
    },
    nouns: ['forest', 'nature', 'enigma', 'mist', 'veil'],
    adjectives: ['still', 'cool', 'foreign', 'shifting', 'ancient'],
    verbs: ['survive', 'veil', 'explore', 'shimmer', 'rustle'],
  },
  {
    name: 'girl',
    title: 'The Rebel',
    reading: {
      kind: 'interpretation',
      text:
        'Sitting in the rubble of their prison, the rebel casts a challenging look at the viewer. A ' +
        'sign of transformation, creation through destruction, agency, the changing of an era. An ' +
        'individual who will leave things different from how they were, and better, but at what cost? ' +
        'This person, the querent or not, is a nexus of a maelstrom of event and activity, a chosen ' +
        'one.',
    },
    nouns: ['insurrection', 'rage', 'hero', 'purpose', 'plan'],
    adjectives: ['determined', 'feral', 'certain', 'trapped', 'transformative'],
    verbs: ['glare', 'act', 'decide', 'escape', 'revolt'],
  },
  {
    name: 'glasses',
    title: 'The Question',
    reading: {
      kind: 'interpretation',
      text:
        'This is a gaze of questioning and doubt. The doubt may be justified; this may be a question ' +
        'from a wise guide as to whether the querent is on the right track; on the other hand, the ' +
        'doubt may need to be overcome; in either case, it may well come from within as well, but ' +
        'whether the concerned gaze is from self or other, it should be weighed in coming decisions. ' +
        'A moment',
    },
    nouns: ['glasses', 'question', 'closeup', 'anxiety', 'eye'],
    adjectives: ['dubious', 'intense', 'exhausted', 'stern', 'uncertain'],
    verbs: ['examine', 'study', 'doubt', 'vacillate', 'gaze'],
  },
  {
    name: 'grass',
    title: 'The Grass',
    reading: {
      kind: 'interpretation',
      text:
        'These shifting, vibrant lines of red, black, and yellow against a muted background of pink ' +
        'and sage green inspire and represent energy not yet directed toward anything concrete, a ' +
        'stirring of the heart that can be directed as its owner chooses or that will reveal its ' +
        'intended direction in the future. Vigorous and happy, too basic to be human or inhuman. ' +
        'Emotion. Primordial soup.',
    },
    nouns: ['riot', 'energy', 'grass', 'pattern', 'impression'],
    adjectives: ['warm', 'basic', 'heavy', 'strong', 'wild'],
    verbs: ['shout', 'shift', 'engender', 'align', 'express'],
  },
  {
    name: 'gravitydefyingvillage',
    title: 'The Village',
    reading: {
      kind: 'interpretation',
      text:
        'Paradox, concretely understood. Surprising reversals: an earth that curves around its sun as ' +
        'the sky arcs round the earth. This is a town After. After what? After the Dissolution, when ' +
        'the laws of physics became recognized as guidelines, not rules.  After the happy or ' +
        'transformative ending of the real story. A cozy happiness grounded in what seems impossible, ' +
        'or an unrealizable dream of happiness.',
    },
    nouns: ['carnival', 'town', 'oxymoron', 'roller coaster', 'color'],
    adjectives: ['impossible', 'saturated', 'geometric', 'glaring', 'silly'],
    verbs: ['curve', 'ensorcel', 'disorient', 'dizzy', 'intrigue'],
  },
  {
    name: 'grin',
    title: 'The Ambassador',
    reading: {
      kind: 'interpretation',
      text:
        'This individual has literally or metaphorically traveled from their original surrounds, ' +
        'judging by the schematic nature of the background. Someone active and welcoming, an ' +
        'ambassador from their part of the world to another. Traveling. Meeting friendly strangers. ' +
        'The new. Introductions. Connections.',
    },
    nouns: ['friend', 'energy', 'hope', 'traveler', 'man'],
    adjectives: ['warm', 'lively', 'funny', 'hip', 'jovial'],
    verbs: ['grin', 'greet', 'welcome', 'joke', 'meet'],
  },
  {
    name: 'gymnast',
    title: 'The Gymnast',
    reading: {
      kind: 'interpretation',
      text:
        'Living within the moment and the act, a task that requires perfect focus and all of one\'s ' +
        'resources, leaving no room for thought, vanity, or emotion in any usual sense even if the ' +
        'actor is performing. Life narrowed to a point, the temporary reduction of complex ' +
        'circumstances to a single essence. The title of the point, of the essence, is unclear. ' +
        'Metaphorically taken, it could be the climax of a story. It may also relate to another of ' +
        'the performing arts, music or drama.',
    },
    nouns: ['acrobat', 'feat', 'crux', 'muscle', 'poise'],
    adjectives: ['improbable', 'precarious', 'virtuosic', 'intent', 'simple'],
    verbs: ['reach', 'focus', 'perform', 'do', 'move'],
  },
  {
    name: 'gymnasticalfantastical',
    title: 'The Junk',
    reading: {
      kind: 'interpretation',
      text:
        'A human creation or act involving the least possible amount of effort. Taking advantage of ' +
        'randomness, experiments with immediacy. Carelessness and ugliness without shame. ' +
        'In-your-face slovenliness. Not even trying. And the fact that sometimes all of this produces ' +
        'a better result than the best intentions in the world. Sometimes it doesn\'t, though.',
    },
    nouns: ['trash', 'experiment', 'energy', 'mess', 'chaos'],
    adjectives: ['makeshift', 'cheap', 'spontaneous', 'helter-skelter', 'random'],
    verbs: ['upcycle', 'make', 'play', 'throw together', 'create'],
  },
  {
    name: 'horseman',
    title: 'The Horseman',
    reading: {
      kind: 'interpretation',
      text:
        'This is an individual or a statue representing a height of pride (perhaps their own pride, ' +
        'perhaps their civilization\'s). On the back of their horse, they gaze superciliously down at ' +
        'the onlooker, poised to trample. Someone or something considered immeasurably superior; the ' +
        'fact that pride goeth before a fall.',
    },
    nouns: ['rider', 'statue', 'perspective', 'height', 'force'],
    adjectives: ['haughty', 'pompous', 'proud', 'lofty', 'grand'],
    verbs: ['intimidate', 'condescend', 'trample', 'sneer', 'tower'],
  },
  {
    name: 'howifeel',
    title: 'The Skyful Day',
    reading: {
      kind: 'interpretation',
      text:
        'Positively, a mood of airy happiness, a period of luck, a brief moment of weather. ' +
        'Negatively, ignoring or mindlessly rejecting negativity; unjustified optimism; missing the ' +
        'detail and emotion of life, in which case the querent would do well to dig deeper to ' +
        'discover the richer joys and sorrows of a less blinkered existence.',
    },
    nouns: ['mind', 'sky', 'energy', 'sun', 'humor'],
    adjectives: ['buoyant', 'streamlined', 'simple', 'positive', 'bored'],
    verbs: ['bounce', 'scatter', 'dissipate', 'enjoy', 'ignore'],
  },
  {
    name: 'hunter',
    title: 'The Hunter',
    reading: {
      kind: 'interpretation',
      text:
        'This hunter or warrior quietly adjusts their spear, in the preparation for the dangerous ' +
        'event. A figure of action. A time to be ready and focused, avoiding fear and bravado; the ' +
        'calm beforethe storm. A human being matched against an equal foe, natural or human. An ' +
        'adversarial attitude toward life.',
    },
    nouns: ['purpose', 'desire', 'weapon', 'discipline', 'pride'],
    adjectives: ['ready', 'methodical', 'determined', 'quiet', 'intense'],
    verbs: ['fight', 'hunt', 'seek', 'achieve', 'prepare'],
  },
  {
    name: 'inthedark',
    title: 'In the Dark',
    reading: {
      kind: 'interpretation',
      text:
        'Imprisonment and desperation. Many things can entrap the mind and heart, and deprive it of ' +
        'even the vision to understand its situation, let alone find a way out. Are you the one so ' +
        'entrapped, or do you have the chance to rescue someone else who is, or did you cause someone ' +
        'else\'s entrapment?',
    },
    nouns: ['prisoner', 'darkness', 'ghost', 'sketch', 'isolation'],
    adjectives: ['frantic', 'indefinite', 'fragmented', 'alone', 'faceless'],
    verbs: ['seek', 'despair', 'rescue', 'plead', 'thwart'],
  },
  {
    name: 'joy',
    title: 'The Symphony',
    reading: {
      kind: 'interpretation',
      text:
        'Expansive joy. Likely, the outcome of a story, but possibly an instant within it, or the ' +
        'personality of some individual, or a mental space any may inhabit, or a physical place of ' +
        'luck and joy. It is an airy emotion, little concerned with specifics, and a fiery emotion, ' +
        'more of motion than comfort or rest.',
    },
    nouns: ['joy', 'music', 'emotion', 'luck', 'ecstasy'],
    adjectives: ['exuberant', 'vibrant', 'aglow', 'spacious', 'brilliant'],
    verbs: ['dance', 'leap', 'expand', 'celebrate', 'continue'],
  },
  {
    name: 'lemurs',
    title: 'The Lemurs',
    reading: {
      kind: 'interpretation',
      text:
        'These lemurs are not only a small piece of the mystery of the animal world, but also ' +
        '(intentionally or through ignorance alone) cheeky individuals who have little interest in ' +
        'the opinions of the humans nearby, though a greater interest in their food. They probably do ' +
        'not mean to moon the onlooker. Probably. Clowning, intentionally or otherwise, mocking or ' +
        'being mocked. The dynamics surrounding being the butt or making others a butt (or rudely ' +
        'displaying one\'s posterior)',
    },
    nouns: ['butt', 'lemur', 'clown', 'eyes', 'gesture'],
    adjectives: ['rude', 'cute', 'foreign', 'obnoxious', 'expressive'],
    verbs: ['ignore', 'play', 'confront', 'shrug', 'gaze'],
  },
  {
    name: 'lily',
    title: 'The Lily',
    reading: {
      kind: 'interpretation',
      text:
        'The lily leans against a wild and deep sky so ablaze with stars that it seems white dotted ' +
        'with dark and not the other way round. Vivid visions without motion or sound or solidity, ' +
        'that nonetheless impress the mind as real. Something hoped for. Something imagined. A good ' +
        'dream.',
    },
    nouns: ['night', 'lily', 'sky', 'star', 'peace'],
    adjectives: ['serene', 'innocent', 'deep', 'indigo', 'vivid'],
    verbs: ['bloom', 'exist', 'gaze', 'dream', 'hope'],
  },
  {
    name: 'mandala',
    title: 'The Mandala',
    reading: {
      kind: 'interpretation',
      text:
        'An allegorical representation of existence, claiming to be exhaustive, abstract and ' +
        'explicit. The completion of a given endeavor, or the completion of everything, actual or ' +
        'perceived. Fullness. Likely an illusion of fullness, if it claims to be within the easy ' +
        'grasp of the human mind. If it does not, it is ungraspable not by virtue of obscurity or ' +
        'vagueness, for it is as William Blake says: the sublime is not obscure but perfectly ' +
        'delineated and clear; its enormity, not its vagueness, makes it difficult to fully ' +
        'apprehend.',
    },
    nouns: ['pomp', 'world', 'whole', 'allegory', 'cycle'],
    adjectives: ['exhaustive', 'vibrant', 'clear', 'explicit', 'joyful'],
    verbs: ['complete', 'encompass', 'celebrate', 'admire', 'satisfy'],
  },
  {
    name: 'map',
    title: 'The Map',
    reading: {
      kind: 'interpretation',
      text:
        'This image purports to provide a map of some higher existence, but it makes no claims to ' +
        'contain the beauty of the whole within it; indeed, beauty is a thing it eschews in order to ' +
        'communicate meaning. In other words, this is a sign that does not pretend to contain the ' +
        'signified; indeed, it is a sign from which the signified can be deduced only with arcane ' +
        'knowledge or great skill, if at all; mysterious and uncommunicative otherworldly message.',
    },
    nouns: ['map', 'sky', 'enigma', 'sign', 'world'],
    adjectives: ['depthless', 'interstitial', 'ugly', 'colorful', 'strange'],
    verbs: ['portend', 'signify', 'mystify', 'point', 'distort'],
  },
  {
    name: 'moose',
    title: 'The Bull Moose',
    reading: {
      kind: 'interpretation',
      text:
        'A large nature unknown to us, lit gold and purple by the sunset. A vigorous Other, dangerous ' +
        'if provoked; individual and personal yet containing the enormity and mystery of Nature ' +
        'Itself beyond them. Nature, yes, but wearing a more challenging face; dangerous and the ' +
        'object of hunters. The quest for wilderness, extreme, and danger (a quest often for an ' +
        'illusion of a distant past, since the hunter is now more dangerous to the bull moose than ' +
        'the other way round).',
    },
    nouns: ['nature', 'sunset', 'vigor', 'danger', 'courage'],
    adjectives: ['wild', 'old', 'foreign', 'rugged', 'grand'],
    verbs: ['hunt', 'forage', 'glow', 'explore', 'seek'],
  },
  {
    name: 'numeric',
    title: 'The Arachnoscape',
    reading: {
      kind: 'interpretation',
      text:
        'A landscape spun with spiderwebs represents a different face of nature, the face that is ' +
        'full of pattern and reason and meaning, but also danger. A daylit world, cruel with the ' +
        'cruelty of indifference and not malice. Essentially joyful. The illusion of malice from ' +
        'impersonal forces, amoral natural law, an alien order.',
    },
    nouns: ['spiderweb', 'pattern', 'joy', 'blood', 'price'],
    adjectives: ['geometric', 'exuberant', 'sunny', 'dangerous', 'bright'],
    verbs: ['calculate', 'count', 'spin', 'enmesh', 'expand'],
  },
  {
    name: 'outdoorcafe',
    title: 'The Café',
    reading: {
      kind: 'interpretation',
      text:
        'The carefree and fortunate everyday, a sense of freedom and leisure without the unearthly or ' +
        'disconcerting. Occurs in spring, under blossoming trees; a scene with promise, which could ' +
        'occur anywhere from the beginning of the tale to its end. Children play.',
    },
    nouns: ['peace', 'community', 'petal', 'cafe', 'spring'],
    adjectives: ['flowering', 'comfortable', 'lovely', 'everyday', 'outside'],
    verbs: ['dine', 'meet', 'chat', 'enjoy', 'relax'],
  },
  {
    name: 'outraged',
    title: 'The Outrage',
    reading: {
      kind: 'interpretation',
      text:
        'The small annoyances of life, whether the querent is the swimmer yelling in outrage or the ' +
        'person who offended them. An encounter with a stranger who hogged your parking spot or vice ' +
        'versa; more generally, everything irritating but insignificant or apparently insignificant ' +
        'in itself.',
    },
    nouns: ['heat', 'swimmer', 'quarrel', 'stranger', 'travesty'],
    adjectives: ['outraged', 'loud', 'prosaic', 'trivial', 'irked'],
    verbs: ['protest', 'yell', 'offend', 'quarrel', 'thwart'],
  },
  {
    name: 'pensive',
    title: 'The News',
    reading: {
      kind: 'interpretation',
      text:
        'The receipt of some startling news; a reaction, or refusal to react; a refusal to ' +
        'acknowledge. Seeing into the distance and ignoring the present. Catching a sound or sight ' +
        'others do not share. Vulnerability, paralysis, weakness before enormity. An individual, ' +
        'bearer or receiver of such news, querent or interlocutor therewith. Being caught off-guard, ' +
        'an instant before action or decision.',
    },
    nouns: ['seer', 'terror', 'enigma', 'disregard', 'confusion'],
    adjectives: ['startled', 'pensive', 'unsure', 'fragile', 'passive'],
    verbs: ['gaze', 'react', 'freeze', 'perceive', 'gasp'],
  },
  {
    name: 'scarredsun',
    title: 'The Scarred Sun',
    reading: {
      kind: 'interpretation',
      text:
        'What belongs to other worlds not less but more real than the subsidiary world we live in, ' +
        'awe-inspiring strangeness and immensity, danger, heat, but also crispness, clarity, and joy. ' +
        'The sun is greater and older and closer than the sun we know. It is a weatherbeaten sun, a ' +
        'bloody sun, hard to personify as a benevolent protector. The earth, though diminished by it, ' +
        'is an intrictate and many-colored marvel, itself stretching indefinitely. The sky between, ' +
        'chill white, pale teal, and its vast birds, knit together the variousness of the earth and ' +
        'attenuate the heat of that terrible sun.',
    },
    nouns: ['enigma', 'vision', 'prodigy', 'portent', 'otherworld'],
    adjectives: ['alien', 'distant', 'sublime', 'wild', 'terrible'],
    verbs: ['overawe', 'inspire', 'seek', 'long', 'explore'],
  },
  {
    name: 'colorportrait',
    title: 'The Advisor',
    reading: {
      kind: 'interpretation',
      text:
        'Wearing red and black, the color and variety in this individual lies in the wildly rendered ' +
        'skin, counterpoised againsts the serenity of the small Mona Lisa smile. Calm, still, and ' +
        'dignified, this guide or adviser neither invites nor repels attention. An individual of ' +
        'reserve and neutrality; patience and wisdom and mystery. Yet the mere humanity is evident in ' +
        'light, shade, vulnerability, and variability.',
    },
    nouns: ['dignity', 'color', 'enigma', 'portrait', 'humanity'],
    adjectives: ['still', 'wise', 'distant', 'regal', 'vulnerable'],
    verbs: ['wait', 'gaze', 'smile', 'hide', 'experience'],
  },
  {
    name: 'time',
    title: 'Time Flies',
    reading: {
      kind: 'interpretation',
      text:
        'Time flies, it is said, but here it is truer and more literally true than before. The ' +
        'movement of the abstract shapes and ideas here portrayed, time chief among them, continues, ' +
        'hectic and chaotic and yet with a beauty (perhaps) easier to find than in the life where we ' +
        'usually lament the passage of time and our own over-scheduled lives. Still, this is an image ' +
        'of grids, reason, and forward motion, the chaos created by those things, and not the deeper ' +
        'and richer chaos of the quiet nature.',
    },
    nouns: ['clock', 'grid', 'chaos', 'mathematics', 'dance'],
    adjectives: ['rapid', 'complex', 'Western', 'slick', 'elegant'],
    verbs: ['whoosh', 'program', 'hurry', 'calculate', 'synchronize'],
  },
  {
    name: 'trout',
    title: 'The Trout',
    reading: {
      kind: 'interpretation',
      text:
        'Eye-to-eye with a distant relative in the animal kingdom, rendered in no simple realism but ' +
        'with brilliant colors to accentuate the clownish strangeness to our eyes. This fish out of ' +
        'water is most likely dead, and can be regarded as either a specimen of human cruelty or a ' +
        'smaller and less dangerous but more terrible specimen of the strangeness of the natural ' +
        'world. Metaphorically, either the querent encounters some strange and horrible vestige of ' +
        'prehuman reality — or is, like the fish, the victim and curiosity of someone else.',
    },
    nouns: ['specimen', 'eye', 'enigma', 'clown', 'victim'],
    adjectives: ['absurd', 'ghastly', 'foreign', 'dead', 'vibrant'],
    verbs: ['stare', 'mock', 'accuse', 'fluoresce', 'suffocate'],
  },
  {
    name: 'wig',
    title: 'The Wig',
    reading: {
      kind: 'interpretation',
      text:
        'This performer in a platinum blonde wig so pale it seems lavender is abstracted, in another ' +
        'world, contemplative, gazing down at their purple gown. An inward look in an outward moment. ' +
        'Nightlife. The interplay between inner self and outward show. The interplay between the ' +
        'cheap, trashy imitation of elegance and its subtle and moving reality.',
    },
    nouns: ['gown', 'grace', 'trash', 'sentiment', 'image'],
    adjectives: ['sensual', 'tawdry', 'purple', 'posh', 'vulnerable'],
    verbs: ['perform', 'sway', 'pout', 'pause', 'pose'],
  },
  {
    name: 'woman',
    title: 'In the Garden',
    reading: {
      kind: 'interpretation',
      text:
        'This troubled and isolated individual experiences themselves as remaining safe while others ' +
        'are in danger, perhaps. Mental torment. Growth, inwardness. Closed eyes. Perceiving or ' +
        'imagining distant events or realities: the torments of vision. The garden is the illusory ' +
        'prison of privilege, rendering the querent unable to act, but it may also represent the ' +
        'dark, cool, quiet, labyrinthine growth of their mind, or the wild elsewhere they imagine.',
    },
    nouns: ['seer', 'garden', 'trance', 'pain', 'woman'],
    adjectives: ['pensive', 'cool', 'verdant', 'alone', 'anxious'],
    verbs: ['wait', 'endure', 'contemplate', 'sit', 'grow'],
  },
  {
    name: 'wondersofreality',
    title: 'The Scientist',
    reading: {
      kind: 'interpretation',
      text:
        'This scientist examines all they see with an eye that turns everything to black-and-white ' +
        'diagrams, an art useful and practical and awe-inspiringly strange all at once, but also, ' +
        'alas, destructive to the unknowable souls of things. Analysis. Reason.',
    },
    nouns: ['microscope', 'detail', 'fact', 'science', 'clutter'],
    adjectives: ['random', 'excessive', 'schematic', 'clever', 'encyclopedic'],
    verbs: ['study', 'analyze', 'clutter', 'illustrate', 'demontrate'],
  },];
