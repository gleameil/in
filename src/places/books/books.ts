import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from '../../shared/helpers';
import { BOOKS } from './constants';
import './books.css';
import { JANUARY_COLORS } from '../../shared/color';

function leaveBooks() {
  removeByClassName('books');
}

export function lookAtBooks(comeHome: () => void) {
  setBackground(JANUARY_COLORS.white);
  const all = document.getElementsByTagName('html')[0];
  const booksToShow = BOOKS.filter(book => !book.shouldHide || !book.shouldHide())
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