
import { AudioURLSrc, ImagePathAndAltText, SHARED_IMAGES } from "../../../shared/constants";
import { JANUARY_COLORS } from "../../../shared/color";
import { createButtonWithImage, createButtonWithText, createDivWithElements, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { createAppButtonWithEmojiOrText } from "../computer.helpers"
import './music.css';
import { MUSIC } from './music.constants';
import { ANTHOLOGY_IMAGES } from "../../books/anthology/constants";
import { SOUND_CONTROL_ID } from "../../../shared/sound";


export function musicIcon(): HTMLButtonElement {
  return createAppButtonWithEmojiOrText('🎧', [], 'music-icon-button');
}

function closeMusic() {
  removeByClassName('music');
  document.getElementById(SOUND_CONTROL_ID)!.style.display = 'block';
}

function setUpMusic(goBack: () => void) {
  document.getElementById(SOUND_CONTROL_ID)!.style.display = 'none';
  const xImage = createImage(SHARED_IMAGES.x, ['photos', 'close-button-image'], 'photos-close-button-image');
  const closeButton = createButtonWithImage(xImage, ['photos', 'close-button'], 'photos-close-button');
  closeButton.addEventListener('click', () => {
    closeMusic();
    goBack();
  });
  
  const currentlyPlaying = document.createElement('div');
  currentlyPlaying.id = 'currently-playing-cover';
  const player = document.createElement('audio');
  player.controls = true;
  player.id = 'music-player';
  const playerDiv = createDivWithElements([currentlyPlaying, player], [], 'music-player-section');
  
  const titles = Object.keys(MUSIC);
  const playable = titles.sort().filter(title => !MUSIC[title].shouldHide)
  const musicTiles: HTMLDivElement[] = playable.map(song => {
    const songInfo = MUSIC[song];
    const title = document.createElement('h4');
    title.classList.add('music-title')
    title.innerText = songInfo.songTitle;
    const coverArt = createImage(songInfo.coverArt ?? ANTHOLOGY_IMAGES.snowflakeLeft, ['music-cover-art-thumbnail'], `${song}-music-cover-art`);
    const musicButton = createButtonWithImage(coverArt, ['music-image-button'], `music-image-button${song}`);
      musicButton.addEventListener('click', () => {
        ((player as unknown) as AudioURLSrc).src = songInfo.path;
        const coverArtLarge = createImage(songInfo.coverArt ?? ANTHOLOGY_IMAGES.snowflakeLeft, ['music-cover-art-large'], `${song}-music-cover-art-large`);
        removeByClassName('music-cover-art-large');
        removeByClassName('music-title-main');
        const newTitle = title.cloneNode(true);
        (newTitle as HTMLElement).classList.add('music-title-main')
        currentlyPlaying.append(coverArtLarge, newTitle);
      });
      return createDivWithElements([musicButton, title], [], `music-tile${song}`);
  })
  const library = createDivWithElements(musicTiles, [], 'music-library');
  return createDivWithElements([closeButton, library, playerDiv], ['music'], 'music-container');
}

export function music(goBack: () => void) {
  const all = document.getElementsByTagName('html')[0];
  setBackground(JANUARY_COLORS.black, {
    degrees: 150,
    color1: JANUARY_COLORS.black,
    color2: JANUARY_COLORS.violet,
  });
  all.append(setUpMusic(goBack));
}