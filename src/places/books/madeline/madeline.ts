import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES } from "../constants";
import { createReader } from "../reader";
import { MADELINE_CHAPTERS_AFTER } from "./constants";

export function madelineCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.madelineCover, ['cover'], 'madeline-cover');
}

export function leaveMadeline() {
  removeByClassName('madeline')
}

export function madeline(goBack: () => void) {
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop reading', ['madeline'], () => {
    leaveMadeline()
    goBack();
  });
  createReader('madeline', MADELINE_CHAPTERS_AFTER);
  all.append(homeward);
}
