import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from '../../shared/helpers';
import { Book, BOOKS, FEBRUARY_BOOKS_HELL, FEBRUARY_BOOKS_HEAVEN } from './constants';
import './books.css';
import { JANUARY_COLORS, DesignColor, FEBRUARY_COLORS } from '../../shared/color';
import { month } from '../../shared/time/time';

function leaveBooks() {
  removeByClassName('books');
}

function backgroundForMonth(isHell: boolean): DesignColor {
  switch (month()) {
    case 0:
      return JANUARY_COLORS.white;
    case 1:
      return isHell ? FEBRUARY_COLORS.lightGray : FEBRUARY_COLORS.white;
    default:
      return JANUARY_COLORS.white;
  }
}

function booksForMonth(isHell: boolean): Book[] {
  switch (month()) {
    case 0:
      return BOOKS;
    case 1:
      return isHell ? FEBRUARY_BOOKS_HELL : FEBRUARY_BOOKS_HEAVEN;
    default:
      return [];
  }
}

export function lookAtBooks(comeHome: () => void, isHell = false) {
  setBackground(backgroundForMonth(isHell));
  const all = document.getElementsByTagName('html')[0];
  const booksForNow = booksForMonth(isHell);
  const booksToShow = booksForNow.filter(book => !book.shouldHide || !book.shouldHide())
  const covers = booksToShow.map(book => {
    const cover = book.showCover()
    cover.classList.add('books');
    cover.addEventListener('click', () => {
      leaveBooks();
      book.show(() => lookAtBooks(comeHome));
    });
    cover.style.transform = `rotate(${Math.random() * 80 - 40}deg)`
    return cover;
  });
  const spreadOutBooks = createDivWithElements(covers, ['books'], 'spread-out-books');
  all.append(createHomewardButton('Stop looking at books \'n stuff', ['books'], () => {
    leaveBooks()
    comeHome()
}));
  all.append(spreadOutBooks);
}