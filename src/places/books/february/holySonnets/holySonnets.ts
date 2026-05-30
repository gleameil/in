import { Background, createHomewardButton, createImage, loadImagesForCatalog, setBackground } from "../../../../shared/shared.helpers";
import { BOOKS_IMAGES } from "../../books.constants";
import { createFebruaryReader, leaveFebruaryReader } from "../reader.february";
import { HOLY_SONNETS, HOLY_IMAGES, HOLY_COLORS } from "./holySonnets.constants";
import './holySonnets.css';

export function holySonnetsCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.holySonnetsCover, ['cover'], 'holy-sonnets-cover');
}

export function holySonnets(goBack: () => void) {
  const background = new Background(HOLY_COLORS.black);
  background.setAsCurrent();
  const all = document.getElementsByTagName('html')[0];

  function goHomeward() {
    leaveFebruaryReader('holy-sonnets');
    goBack();
  }

  const homeward = createHomewardButton('Stop reading', ['holy-sonnets'], goHomeward)
  createFebruaryReader('holy-sonnets', HOLY_SONNETS, goHomeward);

  all.append(homeward);
}