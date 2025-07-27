import { createDivWithElements, createHomewardButton, createImage, removeByClassName } from "../../../shared/helpers";
import { makeParagraphs } from "../../../shared/text";
import { BOOKS_IMAGES } from "../constants";
import { BOOKS_INTRO } from './constants';
import './booksIntro.css';

export function booksIntroSmall(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.booksIntroSmall, [], 'books-intro-paper');
}

export function leaveBooksIntro() {
  removeByClassName('books-intro');
}

export function booksIntro(goBack: () => void) {
  const all = document.getElementsByTagName('html')[0];
  const homewardButton = createHomewardButton('Got it', ['books-intro'], () => {
    leaveBooksIntro();
    goBack();
  });
  const text = makeParagraphs(BOOKS_INTRO);
  const textContainer = createDivWithElements(text, ['books-intro'], 'books-intro-text-container');
  all.append(homewardButton, textContainer);
}
