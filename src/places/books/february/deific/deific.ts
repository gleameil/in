import { FEBRUARY_COLORS } from "../../../../shared/color";
import { createHomewardButton, createImage, removeByClassName, setBackground } from "../../../../shared/helpers";
import { BOOKS_IMAGES } from "../../constants";
import { createFebruaryReader, leaveFebruaryReader } from "../reader.february";
import { DEIFIC } from "./deific.constants";
import './deific.css';

export function deificCover(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.deificCover, ['cover'], 'deific-cover');
}

export function deific(goBack: () => void) {
    setBackground(FEBRUARY_COLORS.gray);
    const all = document.getElementsByTagName('html')[0];
    
    function goHomeward() {
      leaveFebruaryReader('deific');
      goBack();
    }

    const homeward = createHomewardButton('Stop reading', ['deific'], goHomeward)
      createFebruaryReader('deific', DEIFIC, goHomeward);

      all.append(homeward);
}