import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES, } from "../constants";
import { createReader, leaveJanuaryReader } from "../reader";
import { BLECH_CHAPTERS } from "./constants";
import './blech.css';

export function blechCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.blechCover, ['cover'], 'blech-cover');
}

export function blech(goBack: () => void) {
  setBackground(JANUARY_COLORS.orange);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop snooping', ['blech'], () => {
    leaveJanuaryReader('blech')
    goBack();
  });
  createReader('blech', BLECH_CHAPTERS);
  all.append(homeward);
}