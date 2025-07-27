import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES } from "../constants";
import { createReader } from "../reader";
import { MICHAEL_CHAPTERS } from "./constants";

export function michaelCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.michaelCover, ['cover'], 'michael-cover');
}

export function leaveMichael() {
  removeByClassName('michael')
}

export function michael(goBack: () => void) {
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop reading', ['michael'], () => {
    leaveMichael()
    goBack();
  });
  createReader('michael', MICHAEL_CHAPTERS);
  all.append(homeward);
}
