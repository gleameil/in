import { createDivWithElements, removeByClassName, createImage, setBackground, createAudio } from "../../../shared/helpers";
import { FEBRUARY_COLORS } from "../../../shared/color";
import { getTime } from "../../../shared/time/time";
// import { lookAtBooks } from "../../books/books";
// import { setUpDarkRoom } from "../../darkRoom/darkRoom";
import { FEBRUARY_BACKGROUNDS, FEBRUARY_HOME_IMAGES, WindowForFebruary } from "./home.february.constants";
// import { OUT, HOUSE } from "../constants";
import { createItem, randomFebruaryBackgroundIndex } from "../helpers";
import '../home.css';
import { createSoundControl, playIfAllowed, SOUND_CONTROL_ID } from "../../../shared/sound";
import { MUSIC } from "../../computer/music/music.constants";
import { ImagePathAndAltText } from "../../../shared/constants";
// import { lookAtClockAndCalendar } from './clock.ts';

function leaveHome(musicToo: boolean) {
  removeByClassName('home');
  if (musicToo) {
    removeByClassName('home-music');
  }
}

function lightsOn() {
  const items = document.getElementsByClassName('item-february');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('active-february');
    }
  setBackground(FEBRUARY_COLORS.pink);
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
      images[i].style.filter = '';
  }
  const comforter = document.getElementById('comforter');
  if (comforter) {
    comforter.style.filter = '';
  }

  const walls = document.getElementsByClassName('wall');
  if (walls && walls.length) {
    for (let i = 0; i < walls.length; i++) {
      (walls[i] as HTMLElement).style.filter = ''
    }
  }
}

function lightsOut() {
  const items = document.getElementsByClassName('item-february');
    for (let i = 0; i < items.length; i++) {
        // TODO: Door and light must remain active (for February's setUpDarkRoom)
        if (items[i].id === 'lamp') {
          continue;
        }
        items[i].classList.remove('active-february');
    }
  setBackground(FEBRUARY_COLORS.black);  
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
      images[i].style.filter = 'brightness(0.1)';
  }
  const comforter = document.getElementById('comforter');
  if (comforter) {
    comforter.style.filter = 'brightness(0.1)';
  }

  const walls = document.getElementsByClassName('wall');
  if (walls && walls.length) {
    for (let i = 0; i < walls.length; i++) {
      (walls[i] as HTMLElement).style.filter = 'brightness(0.25)'
    }
  }
}

function toggleLights() {
  const windowForFebruary = window as WindowForFebruary;
  if ((window as WindowForFebruary).lampIsOn) {
    lightsOut();
  } else {
    lightsOn();
  }
  windowForFebruary.lampIsOn = !windowForFebruary.lampIsOn;
}

function nextBackground(currentBackground?: number, parent?: HTMLDivElement) {
  const bgIndex = currentBackground !== undefined ? (currentBackground + 1) % FEBRUARY_BACKGROUNDS.length : 0;
  const background = FEBRUARY_BACKGROUNDS[bgIndex];
  if (typeof background === 'string') {
    setBackground(background, undefined, parent, undefined, true);
  } else {
    setBackground(FEBRUARY_COLORS.white, undefined, parent, background.path.href, true);
  }
  (parent ?? document.getElementById('background'))?.addEventListener('click', () => {
    nextBackground(bgIndex, parent);
  }, { once: true })
}

function makeBed(isHell: boolean): HTMLDivElement {
    const bedFrame = createImage(FEBRUARY_HOME_IMAGES.bed, ['home', 'bed-february'], 'bed-february');
    const comforter = createDivWithElements([], ['home', 'bed-february'], 'comforter');
    if (isHell) {
      setBackground(FEBRUARY_COLORS.orange, undefined, comforter);
    } else {
      nextBackground(randomFebruaryBackgroundIndex(), comforter);
    }
    const bed = createDivWithElements([bedFrame, comforter], ['home', 'bed-february'], 'bed-and-comforter');
    return bed;
}

export function comeHome() {
  const windowForFebruary = window as WindowForFebruary;
  const isHell = !!windowForFebruary.isHell;

  const all = document.createElement('div');
  all.classList.add('home');
  all.id = 'home-container';

  if (!document.getElementById(SOUND_CONTROL_ID)) {
    all.append(createSoundControl());
  }

  const floor = createDivWithElements([], ['home', 'wall'], 'floor');
  const backWall = createDivWithElements([], ['home', 'wall'], 'back-wall');
  const sideWall = createDivWithElements([], ['home', 'wall'], 'side-wall');

  if (isHell) {
    setBackground(FEBRUARY_COLORS.lightGray, undefined, backWall)
    setBackground(FEBRUARY_COLORS.gray, undefined, sideWall)
  } else {
    nextBackground(randomFebruaryBackgroundIndex(), backWall);
    nextBackground(randomFebruaryBackgroundIndex(), sideWall);
  }

  const room = createDivWithElements([backWall, floor, sideWall], ['home'], 'room');

  const bookshelfImage = createImage(FEBRUARY_HOME_IMAGES.bookshelf, ['home'], 'bookshelf-image');
  const bookshelf = createItem(bookshelfImage, 'bookshelf', () => {
    // leaveHome(true);
    // lookAtBooks(isHell, comeHome);
  });
  room.append(bookshelf);

  const bed = makeBed(isHell);
  room.append(bed);
  all.append(room);

//   const dollsImage = createImage(FEBRUARY_HOME_IMAGES.dolls, ['home', 'dolls']);
//   const dolls = createItem(dollsImage, 'dolls', () => {
//     leaveHome(true);
//     play(isHell, comeHome);
//   });
  

//   const windowImage = createImage(FEBRUARY_HOME_IMAGES.window, ['home'], 'window-image');
//   const windowDiv = createItem(windowImage, 'window', () => {
//     // Another way out of Out (rather grim, will grow fuller and fuller of potential) or night (beautiful but uneventful)
//     window.location.assign(`${OUT}?time=${getTime().getTime()}`);
//   });

  const lampImage = createImage(FEBRUARY_HOME_IMAGES.lampOn, ['home'], 'lamp-image');
  const lamp = createItem(lampImage, 'lamp', toggleLights);
  all.append(lamp);

//   const wallClockAndCalendarImage = createImage(FEBRUARY_HOME_IMAGES.clockAndCalendar, ['home'], 'clock-and-calendar-image');
//   const clockAndCalendar = createItem(wallClockAndCalendarImage, 'clock-and-calendar', () => {
//     leaveHome(false);
//     lookAtClockAndCalendar(comeHome)
//   });
//   all.append(clockAndCalendar);

//   const mirrorImage = createImage(FEBRUARY_HOME_IMAGES.mirror, ['home'], 'mirror-image');
//   const mirror = createItem(mirrorImage, 'mirror', () => {
//     leaveHome(false);
//     lookInMirror(comeHome);
//   })

//   const doorImage = createImage(FEBRUARY_HOME_IMAGES.door, ['home'], 'door-image')
//   const door = createItem(mirrorImage, 'door', () => window.location.assign(HOUSE))
  
//   if (document.getElementsByClassName('home-music').length === 0) {
//     const music = createAudio(MUSIC.home.path, ['home-music'], 'home-song');
//     const jazz = createAudio(MUSIC.jazz.path, ['home-music'], 'jazz');
//     music.volume = 0.3;
//     all.append(music);
//     all.append(jazz);
//     function playJazz() {
//       jazz.currentTime = 0;
//       jazz.volume = 0.2;
//       playIfAllowed(jazz, { callback: playHomeSong });
//     }    
//     function playHomeSong() {
//       music.currentTime = 0;
//       music.volume = 0.3;
//       playIfAllowed(music, { callback: playJazz });
//     }
//     playIfAllowed(music, { callback: playJazz });
//   }
  const lampIsOn = windowForFebruary.lampIsOn ?? true;
  windowForFebruary.lampIsOn = lampIsOn;
  if (!lampIsOn) {
    lightsOut()
  }

  document.getElementsByTagName('html')[0].append(all);
}