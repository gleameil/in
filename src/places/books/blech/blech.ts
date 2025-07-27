import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES, } from "../constants";
import { createReader } from "../reader";
import { BLECH_CHAPTERS } from "./constants";
import './blech.css';

export function blechCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.blechCover, ['cover'], 'blech-cover');
}

function leaveBlech() {
  removeByClassName('blech');
}

export function blech(goBack: () => void) {
  setBackground(JANUARY_COLORS.orange);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop snooping', ['blech'], () => {
    leaveBlech()
    goBack();
  });
  createReader('blech', BLECH_CHAPTERS);
  all.append(homeward);
}