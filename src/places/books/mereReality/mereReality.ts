import { JANUARY_COLORS } from "../../../shared/color";
import { createAudio, createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES, } from "../constants";
import { createReader } from "../reader";
import { sketchDiary, sketchDiaryCover } from "../sketchDiary/sketchDiary";
import { MERE_REALITY_CHAPTERS } from "./constants";
import './mereReality.css';

export function mereRealityCover(): HTMLImageElement {
  const showRainbow: boolean = !!localStorage.getItem('showRainbow');
  if (showRainbow) {
    return sketchDiaryCover();
  }
  return createImage(BOOKS_IMAGES.mereRealityCover, ['cover'], 'mere-reality-cover');
}

function leaveMereReality() {
  removeByClassName('mere-reality');
}

export function mereReality(goBack: () => void) {
  const showRainbow: boolean = !!localStorage.getItem('showRainbow');
  if (showRainbow) {
    sketchDiary(goBack);
    return;
  }
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  all.append(createAudio(new URL('../../../assets/audio/swans.mp3', import.meta.url), ['mere-reality'], 'mere-reality-music'));
  const homeward = createHomewardButton('Stop reading', ['mere-reality'], () => {
    leaveMereReality()
    goBack();
  });
  createReader('mere-reality', MERE_REALITY_CHAPTERS, JANUARY_COLORS.dullOrange);
  all.append(homeward);
}