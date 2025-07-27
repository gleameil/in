import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES } from "../constants";
import { createReader } from "../reader";
import { LOON_OF_LUNES_CHAPTERS } from "./constants";
import './lunes.css';

export function loonOfLoonsCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.loonOfLoonsCover, ['cover'], 'lunes-cover');
}

export function leaveLunes() {
  removeByClassName('lunes')
}

export function loonOfLoons(goBack: () => void) {
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop reading', ['lunes'], () => {
    leaveLunes()
    goBack();
  });
  createReader('lunes', LOON_OF_LUNES_CHAPTERS);
  all.append(homeward);
}
