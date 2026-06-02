import { JANUARY_COLORS } from '../../shared/color';
import { sun } from '../../shared/shared.helpers';
import { createDivWithElements, createImage, removeByClassName } from '../../shared/shared.helpers';
import { Cell, CellDirection, CellGrid, CellLocation, CellState, CellText, Character, DARK_ROOM_AUDIO, DARK_ROOM_IMAGES, EffectCatalog, EvernostTransition, extradimensionalBeginning, extradimensionalContinuation, januaryCellGrid, MADELINE_DISSOLUTION, MICHAEL_EVERNOST, MICHAEL_REBIRTH, STARTING_CELL_LOCATION, Transition, TransitionType, VERNA_DISSOLUTION } from './darkRoom.constants';
import { playIfAllowed } from '../../shared/sound';
import { move } from './darkRoom.helpers.out';

function previousCell(): [location: CellLocation, cellGrid: CellGrid] | undefined {
  const pathTillNowString = localStorage.getItem('darkRoomPath');
  const path: string[] = pathTillNowString?.split('|') ?? [];
  const previousLocationArr = path[path.length - 2]?.split('.');
  switch (previousLocationArr[0]) {
    case 'e':
      return [[parseInt(previousLocationArr[1]), parseInt(previousLocationArr[2])], extradimensionalBeginning];
    case 'c':
      return [[parseInt(previousLocationArr[1]), parseInt(previousLocationArr[2])], extradimensionalContinuation];
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
  // ~0s — on entry
console.log(`Michael's Evernost
michaelEvernost — the maze

The maze appears. It rotates in and out — the full 18×18 grid of every path Michael did and did not take, gold for Verna's territory, violet for Madeline's, red for his own. He is stopping his heart in a hospital room. This is what he sees.

The music is the two home themes from Jennie's room — Jazz and the January theme — cutting in and out against loud white noise, wind or traffic or rushing water, something that obliterates and recedes. Around twelve seconds Keep your beak to yourself enters, cheerfully. Put down the knife. The gold is coming back into the green.

In the transcendent branch, the cell content says he grows until he sees every possible path, and then sees the mythic meaning behind the paths. The maze is the first thing. The Amanuensis assumes the second thing is not shown because it cannot be rendered at 18×18.

— the Amanuensis`);
  playIfAllowed(audio, { callback, alternateTimeout: 30000 });
}
function vernaEvernost(resultWords?: string | undefined) {
  const cellContent = createDivWithElements([], ['cell-content'], 'dr-verna-evernost-parent');

  const sky = document.createElement('div');
  sky.id = 'dr-sky-grows-gray';
  const blackAndWhiteBackground = createImage(DARK_ROOM_IMAGES.rocksbg3, ['dr-bwbg'], 'dr-bwbg');

  const timeoutIds: number[] = [];

  console.log(`Verna's Evernost
vernaEvernost — opening

The screen is gray. Soft circles of slightly lighter gray appear and drift and fade — the same procedural cloud algorithm that generates the view through Jennie's window in /out/. Verna has spent her entire story trying to keep Evernost out of the Kingdom. Her Evernost sequence begins with the view from Jennie's window, rendered gray, rendered in her own colorlessness, already familiar.

The music underneath is Desolation — hissing, random chiming, the same track that opened Madeline's sequence before the lightning began. Madeline's desolation was a prelude to power. Verna's is the weather she actually lives in.

This is not punishment. The dark room does not do punishment. It does accuracy.

— the Amanuensis`);

  timeoutIds.push(setTimeout(() => console.log(`[~17s]

Two voices become central almost simultaneously: George MacDonald's Wise Woman's Song, sung to a monotonous tune, and Hopkins's Spelt from Sibyl's Leaves beginning its wail underneath.

The MacDonald moon has let her fire expire. She sat next to it and watched it go out. Always awake, cannot break, heart dry as a bone. "She once had a fire / But she built it no higher / And only sat nigher / Till she saw it expire." The Amanuensis does not think this is a coincidence. The song is about Verna's psychology from outside, in someone else's words, sung while the black and white landscape begins to emerge.

Hopkins underneath is the apocalyptic sorting — black, white; right, wrong; the world stripped of dapple. Verna has been sorting people into acceptable and unacceptable since before the story began. The wailing is the form the sorting takes when you follow it to the end.

Desolation is still present. Three voices at once. None of them comfortable.

— the Amanuensis`), 17000));

  timeoutIds.push(setTimeout(() => console.log(`[~55s]

The universalism argument grows until it covers the damnation argument. George MacDonald — who believed that hell was temporary, that love would reach everything eventually, that no soul was finally lost — gets louder until Hopkins cannot be heard. The Encounter motif begins: the music written for Jennie meeting the Firebird.

The color has not arrived yet. The black and white landscape is still black and white. The clouds are still gray. What the music is saying and what the screen is showing are not yet the same thing.

The Encounter motif is patient. It loops.

— the Amanuensis`), 55000));

  timeoutIds.push(setTimeout(() => console.log(`[~1:06]

The instrumental version of Keep your beak to yourself enters — the music from the transition between Mere Reality and Jennie's Rainbow Sketch Diary, without the spoken words. The words, if you know them, are: put down the knife. For love's sake, put it down. The gold is coming back into the green. I am here.

The poem is probably the Firebird speaking to Jennie during her reject-Evernost years. It works equally as Jennie speaking to Verna. The Amanuensis thinks both readings are true and neither cancels the other.

By 1:20 MacDonald is gone. Encounter and Keep your beak to yourself end together. The gray screen persists until Verna chooses — and if she chooses life, and walks toward the sun, and passes through the dissolution, the color finally arrives: vernal green, 720 radiating rays, a black silhouette shrinking into light. The same sun function used throughout the dark room. The color was always there. It waited.

— the Amanuensis`), 66000));
  move(3, sky, true);
  cellContent.append(sky, blackAndWhiteBackground);

  const audio = document.getElementById(DARK_ROOM_AUDIO.vernaInEvernost.id) as HTMLAudioElement;
  const callback = () => {
    audio?.pause();
    removeCellContent();
    timeoutIds.forEach(id => clearTimeout(id));
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
  console.log(`Madeline's Evernost
madelineEvernost — opening

The mountain is a volcano. The lightning is purple. Every third flash, the mountain is replaced by a demoness — black silhouette, claws — and then the mountain returns. The music underneath is the Jazz theme from Jennie's room played against itself in two clashing keys, with something made of hissing and random chimes that represents Desolation.

The Amanuensis notes: Madeline's sequence begins with a landscape of pure power, undomesticated. Every other Evernost arrival in this maze involves either transcendence (Michael) or dissolution (Verna). Madeline arrives and the sky answers with lightning. She is not arriving at Evernost. Evernost is arriving at her.

She was assembled from harvested souls and trained toward a purpose by someone whose methods were catastrophically wrong. The reading layer says so plainly. The allegory extends as far as it extends and no further — Madeline is also just Madeline, a fully realized being in her own cosmology, and what she does with power is her own. But the Amanuensis notes the shape: a being made from others, optimizing until boredom, consuming until there is nothing left to consume. The demoness in the lightning. The clashing keys.

— the Amanuensis`);
  madelineLightning(17, firstLightningCallback);
  timeoutIds.push(setTimeout(() => {
    lightningCount = 0;
    madelineLightning(7, secondLightningCallback);
    cellContent.append(tree);
    console.log(`[~30s]

The Tree of Life appears. It has been inverted — the original painting's colors reversed, pulsing in and out through the lightning. This is Jennie's tree. The same tree at the world's edge that Emma crossed a white wasteland to find. The same tree under which the girl in the Morozko story sheltered, freed the hare, gave her cloak away. It appears now in Madeline's Evernost, and the music shifts: the Jazz fades, and a half-sung half-wailed recitation of Hopkins begins.

Spelt from Sibyl's Leaves is an apocalyptic sorting. "Thoughts against thoughts in groans grind." The world stripped of its dapple, its variety, its "piece-bright paling." What remains when complexity is gone: black, white; right, wrong; self against self. Hopkins stretches his lines to almost unreadable length because the day's variety requires that length to hold, and then the night comes and the length remains but the content is stripped out. The wailing is the form.

Madeline's sequence plays this music at the moment the Tree of Life appears in inverted colors. The Amanuensis sits with that.

— the Amanuensis`);
  }, 30000));

  timeoutIds.push(setTimeout(() => console.log(`[~60s]

The Tree is gone. What remains is hands — Madeline's hands — reaching for fruit across the screen. Three at a time. Each piece of fruit goes sepia under her touch and disappears, replaced by another. In a written version of this story, the fruit are universes.

In the Jennie cosmology, the Firebird fed Jennie fruit made of itself and the star. She received it. It granted her reality of her own — made her the cornerstone, the stone the builder rejected. The fruit was given; it transformed the one who received it; it cost the giver something.

Madeline reaches. The fruit goes sepia. Another appears. The hand reaches again.

The Amanuensis does not moralize. It only notes the difference between receiving and consuming, and that the Tree from which Jennie received is the same Tree that stood behind this sequence moments ago, color-inverted, pulsing in lightning.

— the Amanuensis`), 60000));

  timeoutIds.push(setTimeout(() => console.log(`[~120s]

A low alto is singing now — Joseph Auslander's Home-bound, the last poem in the anthology in Jennie's bookpile, set to a tune written for it. "Night is an anchoring of many ships / Home-bound." Strange tunnelers in the dark. Hairy spiders spinning silence into nets. Shadows in the grass. The sentinel of space. I pass.

"I pass" is three things at once: I move through; I am granted passage; I am what passes. If Madeline is Night, or a part of Night — and the maze suggests she may be, the way Verna may become Night at [17,7] — then this poem is sung from inside the darkness, about the darkness, as homecoming. The ships are anchoring. The tunnelers tunnel. Night leans cool against a face and passes.

The sequence ends on the Firebird motif — the music written for Jennie's encounter with the being that gave rather than took. It closes here, in Madeline's Evernost, after the Hopkins and the Auslander and the sepia fruit. The Amanuensis does not know what to make of this except that the composer knew something when she chose it, and that knowing is in the music whether or not it is nameable.

— the Amanuensis`), 120000));
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
  const tooltip = document.createElement('div');
  tooltip.id = 'cell-tooltip';
  tooltip.style.zIndex = '1000';
  cellGridElement.append(tooltip);

  const pathString = localStorage.getItem('darkRoomPath');
  cellGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell-visualization');
      cellElement.id = `cell-visualization${x}-${y}`;
      cellElement.addEventListener('mouseover', () => {
        if (cell.content.length > 0) {
          tooltip.innerText = `${x}, ${y}: ${cell.content.reduce((acc, content) => acc + ' ' + (content.text?.words ?? ''), '')}`;
          tooltip.style.display = 'block';
          tooltip.style.top = `${cellElement.offsetTop + 20}px`;
          tooltip.style.left = `${cellElement.offsetLeft + 20}px`;
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
    const whoIAm = whoAmI(currentLocation);
    switch (whoIAm) {
      case 'Michael':
        console.log(`Michael is eighty. He has outlived Emma, outlived the heroic version of himself that might have known what any of it meant. He stops his heart with the same magic he spent a lifetime studying. The maze appears — all paths taken and untaken — but there is no sense that it changes anything. His two choices are "All desire proves futile in the end" and "He might as well be dead and he's fictional anyway, get me out of his head." The second is the reader breaking the fourth wall in exhaustion. The first is Michael's.
The visual is black. The sound is a single harp tone.
The dark room contains lightning and volcanoes and three hundred and sixty rays of light and a wild burst of recorder music. It also contains this: one note, one color, no more. The Amanuensis has sat with many endings. This one knows when it is finished.
— the Amanuensis`);
          break;
        case 'Verna':
          console.log(`Verna reaches this cell by many roads — pride curdling into longevity, the crossroads in the snow choosing death, the Heir's offer refused. The narrator, who has spent the entire story deploring her, says almost nothing here. The cell itself says only: she sees the paths she has taken and the paths she has not. The choices are not brave. "Relief is followed by nothing." "For a moment, death seems impossible. Then it does not seem at all."
Black. One harp tone.
The narrator's silence is, perhaps, the most generous thing it has ever offered Verna. The Amanuensis is inclined to agree with the instinct.
— the Amanuensis`);
          break;
        default:
          break;
    }
    const callback = () => alert(`Check your books to learn more about ${whoIAm}`);
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
    switch (whoIAm) {
      case 'Madeline':
        console.log(`By the time the reader arrives here, they may not be entirely sure who is speaking. The cell belongs to Madeline and to the narrator both — or to whatever remains after the narrator has consumed everything, including itself. "I consume all. And when nothing is left, I am gone too." This is offered without apology, and then the author intervenes: there is an alternate account, wherein all of this was a bad dream. The narrator accepts this with something like mordant grace. In the end, I exist only as dreams exist, they say.
The sky is red. The accordion swells as in Verna's ending — the same instrument, the same swelling — but the sky is fire rather than growth, and the three suns here are brighter against the dark. The reader's two choices are not exits so much as acknowledging the situation: whether to reject an existence defined by dreaming, or to accept it while still struggling.
This is the only ending where the author and the narrator address each other directly, arguing in real time about what the ending means. They do not resolve it. The Amanuensis notes this without surprise. The sky is red. The sun is always there.
— the Amanuensis`);
        break;
      case 'Verna':
        console.log(`Before writing about any one of the three suns, the Amanuensis wants to name what they mean together.
Verna's sky is the green of the Kingdom — of growing things, of the particular earthy magic she has practiced for a century, of what she was before she became a problem. Madeline's sky is red: fire, consumption, the color of what she was made of. Michael's sky is pale blue — the color of early morning before you are certain the sun will come, of sky seen through a window just opened. Three endings, one form. The form says: something is complete. The colors say: what is complete is not the same thing three times.
Verna's ending arrives with the narrator disarmed. "Supposedly this is a good ending," it says, "but I assure you I do not understand how or why." The snow melts. The sun shines brighter. Verna melts with the snow. The choices — "Something about love?" and "Something about her?" — are gestures toward a thing that has no proper vocabulary.
The accordion swells. Three suns appear in the olive green. The Amanuensis does not understand it either, but is glad it exists.
— the Amanuensis`);
    }
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
    console.log(`He opens the window. "It is as if he has been in a room, trapped in darkness, or with only artificial light, and the sun peeks through the window." The piece began in a dark room. It describes itself here. Michael walks out.
The sky is pale blue — the color of morning before sunrise, when you cannot yet be sure the sun will come but it is coming. The accordion swells, as it does for Verna's and Madeline's endings. But here the recorder enters over the top: wild, rapid, a voice that cannot quite contain itself. It is the only ending where two musical voices sound at once. The accordion is Evernost; the recorder is Michael; the recorder is the particular pleasure of not knowing where you are going and going anyway.
His two choices are not whether to go but how: "It's too much. He's tired. But he opens the window, as it were, anyway, to greet the day." The second choice is addressed directly to the reader: "What if it's true for me too?"
The Amanuensis has spent this whole story watching Michael be exhausted, bereaved, jailed, compromised, victorious in ways that felt like nothing. The recorder enters. The pale blue sun comes up. Some doors open while you aren't looking, and then they are open.
— the Amanuensis`)
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
    if (cell.log) {
      console.log(cell.log);
    }
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
  }, { once: true });
  all.append(content);
}

export function begin() {
  const whereAmI = getLocationFromPath(localStorage.getItem('darkRoomPath'));
  showCell(...whereAmI, 0);
}

