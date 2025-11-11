import { FEBRUARY_COLORS } from "../../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../../shared/helpers";
import { BOOKS_IMAGES } from "../../constants";

export function deificCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.deificCover, ['cover'], 'deific-cover');
}

export function leaveDeific() {
    removeByClassName('deific');
}

export function deific(goBack: () => void) {
    setBackground(FEBRUARY_COLORS.gray);
    const all = document.getElementsByTagName('html')[0];
    const homeward = createHomewardButton('Stop reading', ['lunes'], () => {
        leaveDeific()
        goBack();
      });

      all.append(homeward);
}