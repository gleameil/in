import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES } from "../constants";
import { createReader } from "../reader";
import { VERNA_CHAPTERS } from "./constants";
import './verna.css';

export function vernaCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.vernaCover, ['cover'], 'verna-cover');
}

export function leaveVerna() {
  removeByClassName('verna')
}

export function verna(goBack: () => void) {
  setBackground(JANUARY_COLORS.lightGray);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop reading', ['verna'], () => {
    leaveVerna()
    goBack();
  });
  createReader('verna', VERNA_CHAPTERS);
  all.append(homeward);
}
