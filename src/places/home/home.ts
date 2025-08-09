import { createDivWithElements, removeByClassName, createImage, setBackground, createAudio } from "../../shared/helpers";
import { SHARED_IMAGES } from "../../shared/constants";
import { JANUARY_COLORS } from "../../shared/color";
import { getTime } from "../../shared/time/time";
import { lookAtBooks } from "../books/books";
import { setUpGarbage } from "../garbage/garbage";
import { setUpDarkRoom } from "../darkRoom/darkRoom";
import { setUpComputer } from "../computer/computer";
import { OUT, HOME_IMAGES } from "./constants";
import { createItem } from "./helpers";
import { createIntro, showIntro } from "./intro";
import './home.css';
import { getBackgroundPath } from "../computer/photos/photos";
import { createSoundControl, playIfAllowed, SOUND_CONTROL_ID } from "../../shared/sound";
import { MUSIC } from "../computer/music/music.constants";

function leaveHome(musicToo: boolean) {
  removeByClassName('home');
  if (musicToo) {
    document.getElementById('home-song')?.remove();
    document.getElementById('jazz')?.remove();
  }
}

function lightsOut() {
  const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
  setBackground(JANUARY_COLORS.black);  
  const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.filter = 'grayscale() invert()';
        if (images[i].id === 'switch-image') {
            continue;
        }
        images[i].classList.add('dissolving');
    }
    setTimeout(() => {
      leaveHome(true);
      setUpDarkRoom(comeHome);
    }, 2000);
}

export function comeHome() {
  setBackground(JANUARY_COLORS.white);

  const all = document.getElementsByTagName('html')[0];
  if (!document.getElementById(SOUND_CONTROL_ID)) {
    all.append(createSoundControl());
  }

  const bed = createImage(HOME_IMAGES.bed, ['home'], 'bed');
  all.append(bed);

  const computerImage = createImage(HOME_IMAGES.computer, ['home'], 'computer-image');
  const computer = createItem(computerImage, 'computer', () => {
    leaveHome(true);
    setUpComputer(comeHome)
  });

  const paperImage = createImage(SHARED_IMAGES.paper, ['home'], 'intro-paper-image');
  const paper = createItem(paperImage, 'intro-paper', showIntro);

  const windowImage = createImage(HOME_IMAGES.window, ['home'], 'window-image');
  const windowDiv = createItem(windowImage, 'window', () => {
    window.location.assign(`${OUT}?time=${getTime().getTime()}`);
  });
  
  const booksImage = createImage(HOME_IMAGES.books, ['home'], 'books-image');
  const books = createItem(booksImage, 'books', () => {
    leaveHome(true);
    lookAtBooks(comeHome);
  });

  const bedContainer = createDivWithElements([computer, paper, windowDiv, books], ['home'], 'bed-div');
  all.append(bedContainer);

  const lightSwitchImage = createImage(HOME_IMAGES.switch, ['home'], 'switch-image');
  const lightSwitch = createItem(lightSwitchImage, 'switch', () => {
    document.getElementById('home-song')?.remove();
    lightsOut()
  });
  all.append(lightSwitch);

  const garbageImage = createImage(HOME_IMAGES.garbage, ['home'], 'garbage-image');
  const garbage = createItem(garbageImage, 'garbage', () => {
    leaveHome(false);
    setUpGarbage(comeHome)
  });
  all.append(garbage);

  const artPath = getBackgroundPath(localStorage.getItem('jennies-room-bg') ?? undefined);
  if (artPath) {
    const artImage = createImage(artPath, ['home'], 'home-art-image');
    const art = createItem(artImage, 'home-art', () => {
      switch (artImage.style.borderColor) {
        case (JANUARY_COLORS.black):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.violet}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.gold}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.violet):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.dullViolet}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.violet}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.dullViolet):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.paleViolet}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.dullViolet}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.paleViolet):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.indigo}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.gold}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.indigo):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.cyan}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.white}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.cyan):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.blue}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.black}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.blue):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.gold}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.dullOrange}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.gold):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.yellow}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.dullViolet}`;
          artImage.style.backgroundColor = JANUARY_COLORS.paleViolet;
          break;
        case (JANUARY_COLORS.yellow):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.dullGreen}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.green}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.dullGreen):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.green}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.yellow}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.green):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.red}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.gold}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.red):
          artImage.style.backgroundColor = JANUARY_COLORS.blue;
          artImage.style.border = `1vw solid ${JANUARY_COLORS.white}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.black}`;
          break;
        case (JANUARY_COLORS.white):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.gray}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.lightGray}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.gray):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.lightGray}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.gray}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.lightGray):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.orange}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.gold}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        case (JANUARY_COLORS.orange):
          artImage.style.border = `1vw solid ${JANUARY_COLORS.dullOrange}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.orange}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
        default:
          artImage.style.border = `1vw solid ${JANUARY_COLORS.black}`;
          artImage.style.outline = `.31vw solid ${JANUARY_COLORS.black}`;
          artImage.style.backgroundColor = JANUARY_COLORS.white;
          break;
      }
    });
    all.append(art);
  }

  const introduction = createIntro();
  all.append(introduction);

  if (!document.getElementById('home-song')) {
    const music = createAudio(MUSIC.home.path, [], 'home-song');
    const jazz = createAudio(MUSIC.jazz.path, [], 'jazz');
    music.volume = 0.3;
    all.append(music);
    all.append(jazz);
    function playJazz() {
      jazz.currentTime = 0;
      jazz.volume = 0.2;
      playIfAllowed(jazz, { callback: playHomeSong, alternateTimeout: 60000 });
    }    
    function playHomeSong() {
      music.currentTime = 0;
      music.volume = 0.3;
      playIfAllowed(music, { callback: playJazz, alternateTimeout: 67000 });
    }
    playIfAllowed(music, { callback: playJazz, alternateTimeout: 49000 });
  }
}