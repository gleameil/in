import { createHomewardButton, createImage, setBackground } from "../../../../shared/helpers";
import { BOOKS_IMAGES } from "../../constants";
import { createFebruaryReader, leaveFebruaryReader } from "../reader.february";
import { HOLY_SONNETS, holyColors } from "./holySonnets.constants";
import './holySonnets.css';

export function holySonnetsCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.holySonnetsCover, ['cover'], 'holy-sonnets-cover');
}

export function holySonnets(goBack: () => void) {
  console.log('trying to open holy sonnets')
  setBackground(holyColors.lightCool.rgbaString());
  const all = document.getElementsByTagName('html')[0];

  function goHomeward() {
    leaveFebruaryReader('holy-sonnets');
    goBack();
  }

  const homeward = createHomewardButton('Stop reading', ['holy-sonnets'], goHomeward)
  createFebruaryReader('holy-sonnets', HOLY_SONNETS, goHomeward);

  all.append(homeward);
}