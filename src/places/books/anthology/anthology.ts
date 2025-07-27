import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { JANUARY_COLORS } from "../../../shared/color";
import { BOOKS_IMAGES } from "../constants";
import { createReader } from "../reader";
import { ANTHOLOGY_CHAPTERS } from "./constants";
import './anthology.css';

export function anthologyCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.anthologyCover, ['cover'], 'anthology-cover')
}
function leaveAnthology() {
  removeByClassName('anthology');
}
export function anthology(goBack: () => void) {
  setBackground(JANUARY_COLORS.lightGray);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop reading', ['anthology'], () => {
    leaveAnthology()
    goBack();
  });
  createReader('anthology', ANTHOLOGY_CHAPTERS);
  all.append(homeward);
}