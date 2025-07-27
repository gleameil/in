import { JANUARY_COLORS } from '../../shared/color';
import { sun } from '../../shared/helpers';
import { createDivWithElements, createImage, removeByClassName } from '../../shared/helpers';
import { Cell, CellDirection, CellGrid, CellLocation, CellState, CellText, Character, DARK_ROOM_AUDIO, DARK_ROOM_IMAGES, EffectCatalog, EvernostTransition, extradimensionalBeginning, extradimensionalContinuation, januaryCellGrid, MADELINE_DISSOLUTION, MICHAEL_EVERNOST, MICHAEL_REBIRTH, STARTING_CELL_LOCATION, Transition, TransitionType, VERNA_DISSOLUTION } from './darkRoom.constants';
import { playIfAllowed } from '../../shared/sound';
import { move } from './darkRoom.helpers.out';

function previousCell(): [location: CellLocation, cellGrid: CellGrid] | undefined {
  const pathTillNowString = localStorage.getItem('darkRoomPath');
  const path: string[] = pathTillNowString?.split('|') ?? [];
  const previousLocationArr = path[path.length - 2].split('.');
  switch (previousLocationArr[0]) {
    case 'e':
      return [[parseInt(previousLocationArr[1]), parseInt(previousLocationArr[2])], extradimensionalBeginning];
    case 'j':
      return [[parseInt(previousLocationArr[1]), parseInt(previousLocationArr[2])], januaryCellGrid];
  }
  console.error(`Unrecognized grid ${previousLocationArr[0]}`)
}

function isInEvernost(location: CellLocation, cellGrid: CellGrid): boolean {
  const cell = cellAt(location, cellGrid);
  return !!cell && (cell.content.length === 0)
}

function lightning(lightningId: string, thunderId: string): HTMLDivElement {
  const lightning = document.createElement('div');
  lightning.classList.add('dr-lightning');
  lightning.id = lightningId;
  const thunder = document.createElement('div');
  thunder.classList.add('dr-thunder');
  thunder.id = thunderId;
  return createDivWithElements([thunder, lightning], [], 'dr-effect-parent');
}

function michaelEvernost(resultWords?: string | undefined) {
  const cellContent = createDivWithElements([], ['cell-content'], 'dr-michael-evernost-parent');
  const audio = document.getElementById(DARK_ROOM_AUDIO.michaelInEvernost.id) as HTMLAudioElement;
  const mazeVisualization = visualizeCellGrid(januaryCellGrid);
  mazeVisualization.id = 'dr-maze-visualization-michael';
  cellContent.append(mazeVisualization);
  const callback = () => {
    audio?.pause();
    removeCellContent();
    showCell(MICHAEL_REBIRTH, januaryCellGrid, 0)
  };
  const all = document.getElementsByTagName('html')[0];
  cellContent.addEventListener('click', callback, { once: true });
  all.append(cellContent);
  playIfAllowed(audio, { callback, alternateTimeout: 30000 });
}
function vernaEvernost(resultWords?: string | undefined) {
  const cellContent = createDivWithElements([], ['cell-content'], 'dr-verna-evernost-parent');

  const sky = document.createElement('div');
  sky.id = 'dr-sky-grows-gray';
  const blackAndWhiteBackground = createImage(DARK_ROOM_IMAGES.rocksbg3, ['dr-bwbg'], 'dr-bwbg');
  move(3, sky, true);
  cellContent.append(sky, blackAndWhiteBackground);

  const audio = document.getElementById(DARK_ROOM_AUDIO.vernaInEvernost.id) as HTMLAudioElement;
  const callback = () => {
    audio?.pause();
    removeCellContent();
    showCell(VERNA_DISSOLUTION, januaryCellGrid, 0)
  };
  const all = document.getElementsByTagName('html')[0];
  cellContent.addEventListener('click', callback, { once: true });
  all.append(cellContent);
  playIfAllowed(document.getElementById(DARK_ROOM_AUDIO.vernaInEvernost.id) as HTMLAudioElement, { callback, alternateTimeout: 90000 });
}
function madelineEvernost(resultWords?: string | undefined) {
  const cellContent = createDivWithElements([], ['cell-content'], 'dr-madeline-evernost-parent');
  const volcano = createImage(DARK_ROOM_IMAGES.volcano, ['dr-volcano', 'dr-madeline-first-object'], 'dr-volcano');
  const demoness = createImage(DARK_ROOM_IMAGES.demoness, ['dr-demoness', 'dr-madeline-first-object'], 'dr-demoness');
  cellContent.append(volcano, demoness);
  const tree = createImage(DARK_ROOM_IMAGES.tree, ['dr-tree'], 'dr-tree');

  const timeoutIds: number[] = [];
  let lightningCount = 0;

  function makeFadingFruit(fruitIndex: number, index: number) {
    const fruitLeft = Math.random() * 100;
    const fruitBottom = Math.random() * 100;
    const handLeft = fruitLeft - 15;
    const handBottom = fruitBottom - 10;
    const hand = createImage(DARK_ROOM_IMAGES.graspingHand, ['dr-hand'], 'dr-hand');
    hand.style.left = `${handLeft}%`;
    hand.style.bottom = `${handBottom}%`;
    hand.style.zIndex = `${91 + index * 2}`;
    const fruit = createImage(DARK_ROOM_IMAGES[`fruit${fruitIndex}`], ['dr-fruit'], `dr-fruit-${fruitIndex}`);
    const fruitSepia = createImage(DARK_ROOM_IMAGES[`fruit${fruitIndex}`], ['dr-fruit', 'dr-fruit-sepia'], `dr-fruit-sepia-${fruitIndex}`);
    fruitSepia.style.left = `${fruitLeft}%`;
    fruitSepia.style.bottom = `${fruitBottom}%`;
    fruitSepia.style.zIndex = `${90 + index * 2}`;
    fruit.style.left = `${fruitLeft}%`;
    fruit.style.bottom = `${fruitBottom}%`;
    fruit.style.zIndex = `${90 + index * 2}`;
    cellContent.append(fruitSepia, fruit, hand);
    timeoutIds.push(setTimeout(() => {
      fruit.remove();
      fruitSepia.remove();
      makeFadingFruit((fruitIndex + 1) % 3, index);
   }, 20000 + Math.random() * 500));
  }


  function firstLightningCallback() {
    volcano.remove();
    demoness.remove();
  }

  function secondLightningCallback() {
    tree.remove();
    for (let i = 0; i < 3; i++) {  
      makeFadingFruit(Math.floor(Math.random() * 3), i);
    }
  }
  function madelineLightning(limit: number, callback?: () => void) {
    if (lightningCount >= limit) {
      callback?.();
      return;
    }
    removeByClassName('dr-lightning');
    removeByClassName('dr-thunder');
    if (lightningCount % 3 === 2) {
      volcano.style.display = 'none';
      demoness.style.display = 'block';
    }
    if (lightningCount % 3 === 0) {
      volcano.style.display = 'block';
      demoness.style.display = 'none';
    }
    tree.classList.add('dr-tree-animated');

    cellContent.append(lightning('dr-lightning-madeline', 'dr-thunder-madeline'));
    lightningCount++;

    timeoutIds.push(setTimeout(() => tree.classList.remove('dr-tree-animated'), 510), setTimeout(() => madelineLightning(limit, callback), 1000 + Math.random() * 1000));
  }
  madelineLightning(17, firstLightningCallback);
  timeoutIds.push(setTimeout(() => {
    lightningCount = 0;
    madelineLightning(7, secondLightningCallback);
    cellContent.append(tree);
  }, 30000));

  setTimeout(() => {
    timeoutIds.forEach(id => clearTimeout(id));
  }, 150000);

  const audio = document.getElementById(DARK_ROOM_AUDIO.madelineInEvernost.id) as HTMLAudioElement;

  const callback = () => {
    timeoutIds.forEach(id => clearTimeout(id));
    audio?.pause();
    removeCellContent();
    showCell(MADELINE_DISSOLUTION, januaryCellGrid, 0)
  };
  const all = document.getElementsByTagName('html')[0];
  cellContent.addEventListener('click', callback, { once: true });
  all.append(cellContent);
  playIfAllowed(document.getElementById(DARK_ROOM_AUDIO.madelineInEvernost.id) as HTMLAudioElement, { callback, alternateTimeout: 180000 });
}



function whereInEvernost(location: CellLocation): (resultWords?: string | undefined) => void {
  if (MICHAEL_EVERNOST.some(loc => loc[0] === location[0] && loc[1] === location[1])) {
    return michaelEvernost;
  }
  if (location[0] < 9) {
    return vernaEvernost;
  }
  return madelineEvernost;
}

function whoAmI(location: CellLocation): Character {
  if (location[0] < 9) {
    return 'Verna';
  }
  if (location[1] < 9) {
    return 'Michael';
  }
  return 'Madeline';
}

function nextCell(currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection): [location: CellLocation, cellGrid: CellGrid] {
  const [x, y] = currentLocation;
  switch (direction) {
    case 'n':
      return [[x, y - 1], cellGrid];
    case 'e':
      return [[x + 1, y], cellGrid];
    case 'w':
      return [[x - 1, y], cellGrid];
    case 's':
      return [[x, y + 1], cellGrid];
  }
}

function setEndingSeen(location: CellLocation) {
  localStorage.setItem(`met${whoAmI(location)}Ending`, 'true');
}

function borderBasedOnTransitionTypeIfPresent(transition: Transition | undefined): string {
  if (!transition) {
    return JANUARY_COLORS.black;
  }
  return 'transparent';
}

function setBordersoOnCellElement(cellElement: HTMLDivElement, cell: Cell) {
  cellElement.style.borderTopColor = borderBasedOnTransitionTypeIfPresent(cell.n);
  cellElement.style.borderRightColor = borderBasedOnTransitionTypeIfPresent(cell.e);
  cellElement.style.borderLeftColor = borderBasedOnTransitionTypeIfPresent(cell.w);
  cellElement.style.borderBottomColor = borderBasedOnTransitionTypeIfPresent(cell.s);
}

function visualizeCellGrid(cellGrid: CellGrid): HTMLElement {
  const cellGridElement = document.createElement('div');
  cellGridElement.classList.add('cell-grid-visualization', 'cell-content');
  const pathString = localStorage.getItem('darkRoomPath');
  cellGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellElement = document.createElement('div');
      const tooltip = document.createElement('div');
      tooltip.id = 'cell-tooltip';
      cellElement.classList.add('cell-visualization');
      cellElement.id = `cell-visualization${x}-${y}`;
      cellElement.addEventListener('mouseover', () => {
        if (cell.content.length > 0) {
          tooltip.innerText = `${x}, ${y}: ${cell.content.reduce((acc, content) => acc + ' ' + (content.text?.words ?? ''), '')}`;
          tooltip.style.display = 'block';
          tooltip.style.top = `${cellElement.offsetTop + 20}px`;
          tooltip.style.left = `${cellElement.offsetLeft + 20}px`;
          cellElement.append(tooltip);
        }
      });
      cellElement.addEventListener('mouseout', () => {
        tooltip.innerText = '';
        tooltip.style.display = 'none';
      });
      cellElement.style.backgroundColor = cell.content.length === 0 ? JANUARY_COLORS.black : JANUARY_COLORS.white;
      if (pathString?.includes(`j.${x}.${y}|`)) {
        cellElement.style.backgroundColor = JANUARY_COLORS.gold;
        if (isInEvernost([x, y], januaryCellGrid)) {
          cellElement.style.backgroundColor = JANUARY_COLORS.violet;
        }
      }
      if (getLocationFromPath(pathString)[0][0] === x && getLocationFromPath(pathString)[0][1] === y) {
        cellElement.style.backgroundColor = JANUARY_COLORS.red;
      }
      setBordersoOnCellElement(cellElement, cell);
      cellGridElement.append(cellElement);
    });
  });

  return cellGridElement as HTMLElement;
}

const CONTENT_EFFECT_CATALOG: EffectCatalog = {
  showMaze: (location: CellLocation, cellGrid: CellGrid, direction: CellDirection) => visualizeCellGrid(cellGrid)
}

const TRANSITION_EFFECT_CATALOG: EffectCatalog = {
  move: (currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection) => {
    removeCellContent();
    const next = nextCell(currentLocation, cellGrid, direction);
    if (!next) {
      console.error('Cannot find next cell');
      return;
    }
    showCell(...next, 0);
  },
  no: (currentLocation: CellLocation, cellGrid: CellGrid) => {
    removeCellContent();
    localStorage.removeItem('darkRoomPath');
    const audio = document.getElementById(DARK_ROOM_AUDIO.no.id);
    playIfAllowed((audio as HTMLAudioElement));
    const cellContent = createDivWithElements([lightning('dr-lightning-no', 'dr-thunder-no')], ['cell-content'], 'lightning-container');
    document.getElementsByTagName('html')[0].append(cellContent);
    setTimeout(() => {
      removeCellContent();
      alert('Forget! Wake up! End! (You have lost your progress in this story)');
    }, 501)
  },
  back: (currentLocation: CellLocation, cellGrid: CellGrid) => {
    removeCellContent()
    const previous = previousCell();
    if (!previous) {
      console.error(`String representing previous location is wrong.`);
      return;
    }
    removeLastLocationFromPath();
    showCell(...previous, 0);
  },
  Evernost: (currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection) => {
    const next = nextCell(currentLocation, cellGrid, direction);
    addNewLocationToPath(next[0], next[1]);
    removeCellContent();
    const transitionAsEvernostTransition = cellAt(currentLocation, cellGrid)?.[direction] as EvernostTransition | undefined;
    const resultWords = transitionAsEvernostTransition?.resultWords;
    whereInEvernost(next[0])(resultWords)
  },
  birth: (currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection) => {
    removeCellContent()
    if (cellGrid !== extradimensionalBeginning && cellGrid !== extradimensionalContinuation) {
      console.error(`Trying to do 'birth' from wrong maze`);
      return;
    }
    const [_, y] = currentLocation;
    switch (direction) {
      case 'e':
        if (y === 0) {
          showCell([9, 8], januaryCellGrid, 0);
          return;
        }
        if (y === 2) {
          showCell([9, 9], januaryCellGrid, 0);
          return;
        }
        console.error(`Trying to do 'birth' too early or something (wrong y: ${y})`);

      case 'w':
        if (y === 2) {
          showCell([8, 9], januaryCellGrid, 0);
          return;
        }
        console.error(`Should be 'no' because is west and north`);
        return;
      default:
        console.error(`Trying to do 'birth' from wrong direction: ${direction}`);
        return;
    }
  },
  death: (currentLocation: CellLocation, cellGrid: CellGrid) => {
    removeCellContent();
    localStorage.removeItem('darkRoomPath');
    const audio = document.getElementById(DARK_ROOM_AUDIO.death.id) as HTMLAudioElement;
    const callback = () => alert(`Check your books to learn more about ${whoAmI(currentLocation)}`);
    playIfAllowed(audio, { callback, alternateTimeout: 600 });
    setEndingSeen(currentLocation);
  },
  dissolution: (currentLocation: CellLocation, cellGrid: CellGrid) => {
    removeCellContent();
    localStorage.removeItem('darkRoomPath');
    const whoIAm = whoAmI(currentLocation);
    const silhouette = createImage(DARK_ROOM_IMAGES.silhouette, ['dr-silhouette'], `dr-silhouette-${whoIAm}`)
    const audio = document.getElementById(DARK_ROOM_AUDIO.dissolution.id) as HTMLAudioElement;
    const callback = () => {
      cellContent.classList.add('dr-fade');
      setTimeout(removeCellContent, 500);
      setTimeout(() => alert(`Check your books to learn more about ${whoIAm}`), 501);
    };
    playIfAllowed(audio, { callback, alternateTimeout: 6200 });
    const cellContent = createDivWithElements([silhouette], ['cell-content'], 'dr-effect-parent');
    const all = document.getElementsByTagName('html')[0]
    all.append(cellContent);
    const goldSky = document.createElement('div');
    goldSky.id = 'dr-sky-grows-gold';
    goldSky.classList.add(`${whoIAm}-dissolution`)
    cellContent.append(goldSky);
    sun(cellContent, 'dr', 'midday')
    setEndingSeen(currentLocation);
  },
  rebirth: (currentLocation: CellLocation, cellGrid: CellGrid) => {
    removeCellContent();
    localStorage.removeItem('darkRoomPath');
    const silhouette = createImage(DARK_ROOM_IMAGES.silhouette, ['dr-silhouette'], `dr-silhouette-Michael`)
    const audio = document.getElementById(DARK_ROOM_AUDIO.rebirth.id) as HTMLAudioElement;
    const sky = document.createElement('div');
    sky.id = ('dr-lightening-sky');
    const risingSun = document.createElement('div');
    risingSun.id = ('dr-rising-sun');
    const cellContent = createDivWithElements([sky, risingSun, silhouette], ['cell-content'], 'dr-effect-parent');
    const all = document.getElementsByTagName('html')[0]
    all.append(cellContent);
    setTimeout(() => {
      sun(cellContent, 'dr', 'sunrise');
    }, 4000);

    const callback = () => {
      cellContent.classList.add('dr-fade');
      setTimeout(removeCellContent, 500);
      setTimeout(() => alert(`Check your books to learn more about ${whoAmI(currentLocation)}`), 501);
    };
    playIfAllowed(audio, { callback, alternateTimeout: 11200 });
    setEndingSeen(currentLocation);
  },
}

function cellAt(location: CellLocation, cellGrid: CellGrid): Cell | undefined {
  const [x, y] = location;
  return cellGrid[y][x];
}

function emptyDiv(): HTMLDivElement {
  return createDivWithElements([], ['dark-room-empty']);
}

function showOption(option: Transition): HTMLDivElement {
  const optionElement = document.createElement('div');
  optionElement.innerText = 'Back';
  if (option.words) {
    optionElement.innerText = option.words.words || 'forgot to fill this in';
  }
  let styleClass: string;
  switch (option.words?.textType) {
    case 'LARGE_SELF':
      styleClass = 'cell-option-large-self';
      break;
    case 'LARGE_STORY':
      styleClass = 'cell-option-large-story';
      break;
    case 'SMALL_SELF':
      styleClass = 'cell-option-small-self';
      break;
    case 'SMALL_STORY':
      styleClass = 'cell-option-small-story';
      break;
    default:
      styleClass = 'cell-option-large-story';
      break;
  }
  optionElement.classList.add('cell-option', styleClass);
  if (option.transitionType === 'EVERNOST') {
    optionElement.style.color = JANUARY_COLORS.violet;
  }
  if (option.transitionType === 'END') {
    optionElement.style.color = JANUARY_COLORS.gold;
  }
  if (option.words?.textColor) {
    optionElement.style.color = option.words.textColor;
  }
  return optionElement;
}

// There can be multiple "back" buttons but we only want to show the one in the appropriate direction
function canShow(transitionType: TransitionType, location: CellLocation, cellGrid: CellGrid, direction: CellDirection): boolean {
  if (transitionType !== 'BACK') {
    return true;
  }
  const previous = previousCell();
  const next = nextCell(location, cellGrid, direction);

  if (previous?.[0][0] !== next?.[0][0] || previous?.[0][1] !== next?.[0][1] || previous?.[1] !== next?.[1]) {
    return false;
  }

  return true;
}

function showOptions(location: CellLocation, cellGrid: CellGrid, cell: Cell): HTMLDivElement {
  let north: HTMLDivElement = emptyDiv();
  let east: HTMLDivElement = emptyDiv();
  let west: HTMLDivElement = emptyDiv();
  let south: HTMLDivElement = emptyDiv();

  if (cell.n && canShow(cell.n.transitionType, location, cellGrid, 'n')) {
    north = showOption(cell.n);
    north.classList.add('cell-option-north');
    north.addEventListener('click', () => {
      const audio = document.getElementById(DARK_ROOM_AUDIO.optionSound.id)! as HTMLAudioElement;
      audio.currentTime = 0;
      playIfAllowed(audio);
      TRANSITION_EFFECT_CATALOG[cell.n!.effect]?.(location, cellGrid, 'n');
    })
  }
  if (cell.e && canShow(cell.e.transitionType, location, cellGrid, 'e')) {
    east = showOption(cell.e);
    east.classList.add('cell-option-east');
    east.addEventListener('click', () => {
      const audio = document.getElementById(DARK_ROOM_AUDIO.optionSound.id)! as HTMLAudioElement;
      audio.currentTime = 0;
      playIfAllowed(audio);
      TRANSITION_EFFECT_CATALOG[cell.e!.effect]?.(location, cellGrid, 'e');
    })
  }
  if (cell.w && canShow(cell.w.transitionType, location, cellGrid, 'w')) {
    west = showOption(cell.w);
    west.classList.add('cell-option-west');
    west.addEventListener('click', () => {
      const audio = document.getElementById(DARK_ROOM_AUDIO.optionSound.id)! as HTMLAudioElement;
      audio.currentTime = 0;
      playIfAllowed(audio);
      TRANSITION_EFFECT_CATALOG[cell.w!.effect]?.(location, cellGrid, 'w');
    })
  }
  if (cell.s && canShow(cell.s.transitionType, location, cellGrid, 's')) {
    south = showOption(cell.s);
    south.classList.add('cell-option-south');
    south.addEventListener('click', () => {
      const audio = document.getElementById(DARK_ROOM_AUDIO.optionSound.id)! as HTMLAudioElement;
      audio.currentTime = 0;
      playIfAllowed(audio);
      TRANSITION_EFFECT_CATALOG[cell.s!.effect]?.(location, cellGrid, 's');
    })
  } 
  const [x, y] = location;
  const idString = `${y}-${x}-options`;
  return createDivWithElements([north, south, east, west], ['cell-content', 'cell-content-options'], `cellContent${idString}`);
}

function removeCellContent() {
  removeByClassName('cell-content');
}

function renderContentText(text: CellText, idString: string): HTMLParagraphElement {
  let styleClass: string;
  switch (text.textType) {
    case 'STORY':
      styleClass = 'cell-text-story';
      break;
    case 'VOICE':
      styleClass = 'cell-text-voice';
      break;
  }
  let textElement = document.createElement('p');
  textElement.classList.add('cell-text', styleClass);
  textElement.id = `cellText${idString}`;
  textElement.innerText = text.words;
  return textElement
}

function showCellContent(cellState: CellState, stateIndex: number, location: CellLocation): HTMLDivElement {
  const [x, y] = location;
  const idString = `${y}-${x}-${stateIndex}`;

  const image = cellState.image ? createImage(cellState.image, ['cell-image'], `cellImage${idString}`) : createDivWithElements([], ['cell-empty']);
  const text = cellState.text ? renderContentText(cellState.text, idString) : createDivWithElements([], ['cell-empty']);
  const effect = cellState.effect ? CONTENT_EFFECT_CATALOG[cellState.effect]?.(location, januaryCellGrid, 'n') as HTMLElement : emptyDiv();
  return createDivWithElements([image, text, effect], ['cell-content'], `cellContent${idString}`);
}

function getLocationFromPathComponent(pathComponent: string): [location: CellLocation, cellGrid: CellGrid] {
  const currentLocationArr = pathComponent.split('.');
  switch (currentLocationArr[0]) {
    case 'e':
      return [[parseInt(currentLocationArr[1]), parseInt(currentLocationArr[2])], extradimensionalBeginning];
    case 'c':
      return [[parseInt(currentLocationArr[1]), parseInt(currentLocationArr[2])], extradimensionalContinuation];
    case 'j':
      return [[parseInt(currentLocationArr[1]), parseInt(currentLocationArr[2])], januaryCellGrid];
    default:
      console.error(`Malformed currentLocationString ${currentLocationArr}`);
      return [STARTING_CELL_LOCATION, extradimensionalBeginning];
  }
}

function getLocationFromPath(pathString: string | null): [location: CellLocation, cellGrid: CellGrid] {
  let hasGottenEnding = localStorage.getItem('metMadelineEnding') === 'true' || localStorage.getItem('metMichaelEnding') === 'true' || localStorage.getItem('metVernaEnding') === 'true';
  if (!pathString && !hasGottenEnding) {
    return [STARTING_CELL_LOCATION, extradimensionalBeginning];
  }
  
  if (!pathString) {
    return [STARTING_CELL_LOCATION, extradimensionalContinuation];
  }
  const path = pathString.split('|');
  const currentLocationArr = path[path.length - 1]
  return getLocationFromPathComponent(currentLocationArr);
}

function addNewLocationToPath(location: CellLocation, cellGrid: CellGrid) {
  const [x, y] = location;
  const pathTillNowString = localStorage.getItem('darkRoomPath');
  const path: string[] = pathTillNowString?.split('|') ?? [];
  let newLocation = '';
  switch (cellGrid) {
    case extradimensionalBeginning:
      newLocation += 'e.';
      break;
    case extradimensionalContinuation:
      newLocation += 'c.';
      break;
    case januaryCellGrid:
      newLocation += 'j.';
      break;
    default:
      break;
  }
  newLocation += `${x}.${y}`;
  if (path[path.length-1] === newLocation) {
    return;
  }
  path.push(newLocation);
  localStorage.setItem('darkRoomPath', path.join('|'));
}

function removeLastLocationFromPath() {
  const pathTillNowString = localStorage.getItem('darkRoomPath');
  if (!pathTillNowString) {
    return;
  }
  const path: string[] = pathTillNowString.split('|');
  path.pop();
  localStorage.setItem('darkRoomPath', path.join('|'));
}

function showCell(location: CellLocation, cellGrid: CellGrid, contentIndex: number) {
  if (contentIndex === 0) {
    addNewLocationToPath(location, cellGrid);
  }

  const all = document.getElementsByTagName('html')[0];
  const cell = cellAt(location, cellGrid);

  if (!cell) {
    console.error(`Cell at location ${location} does not exist`);
    return;
  }
  if (isInEvernost(location, cellGrid)) {
    whereInEvernost(location)();
  }

  if (!cell.content[contentIndex]) {
    all.append(showOptions(location, cellGrid, cell));
    return;
  }

  const content = showCellContent(cell.content[contentIndex], contentIndex, location);
  content.addEventListener('click', () => {
    removeCellContent();
    showCell(location, cellGrid, contentIndex + 1);
    const audio = document.getElementById(`dr-harp${Math.floor(Math.random() * 3)}`)! as HTMLAudioElement;
    audio.volume = 0.2;
    audio.currentTime = 0;
    playIfAllowed(audio);
  });
  all.append(content);
}

export function begin() {
  const whereAmI = getLocationFromPath(localStorage.getItem('darkRoomPath'));
  showCell(...whereAmI, 0);
}

