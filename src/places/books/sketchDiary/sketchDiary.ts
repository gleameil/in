import { JANUARY_COLORS } from "../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { BOOKS_IMAGES, } from "../constants";
import { createReader, leaveJanuaryReader } from "../reader";
import { SKETCH_DIARY_CHAPTERS } from "./constants";
import './sketchDiary.css';

export function sketchDiaryCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.sketchDiaryCover, ['cover'], 'sketch-diary-cover');
}

export function sketchDiary(goBack: () => void) {
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Stop snooping', ['sketch-diary'], () => {
    leaveJanuaryReader('sketch-diary')
    goBack();
  });
  createReader('sketch-diary', SKETCH_DIARY_CHAPTERS, JANUARY_COLORS.blue);
  all.append(homeward);
}