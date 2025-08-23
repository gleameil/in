import { JANUARY_COLORS, JanuaryColor } from '../../shared/color';
import { createDivWithElements, createImage, removeByClassName } from '../../shared/helpers';
import { makeParagraphs } from '../../shared/text';
import { Chapter, Chapters, Page } from './reader.constants';
import './reader.css';

function loadImagesForBook(className: string, book: Chapters) {
  book.forEach((chapter: Chapter) => {
    chapter.forEach((page: Page) => {
      if (!page.leftImage.imageLeft) {
        page.leftImage.imageLeft = createImage(page.leftImage, ['reader-image', className, 'reader-invisible'], `${className}-reader-left-image`);
      }
      if (!page.rightImage.imageRight) {
        page.rightImage.imageRight = createImage(page.rightImage, ['reader-image', className, 'reader-invisible'], `${className}-reader-right-image`);
      }
    });
  });
}
export function createReader(className: string, book: Chapters, imageBackgroundColor: JanuaryColor = JANUARY_COLORS.white): HTMLDivElement {
  loadImagesForBook(className, book);
  let currentChapterIndex = 0;
  let currentTextIndex = 0;

  const storedChapterIndex = localStorage.getItem(`${className}ChapterIndex`);
  currentChapterIndex = storedChapterIndex ? parseInt(storedChapterIndex) : 0;
  const storedTextIndex = localStorage.getItem(`${className}TextIndex`);
  currentTextIndex = storedTextIndex ? parseInt(storedTextIndex) : 0;
  
  const leftArt = createDivWithElements([], [className, 'reader-art', 'reader-left-art'], `${className}-reader-left-art`);
  leftArt.style.backgroundColor = imageBackgroundColor;
  const text = createDivWithElements([], ['reader-text'], `${className}-reader-text`);
  const textContainer = createDivWithElements([text], [className, 'reader-text-container'], `${className}-reader-text-container`);
  const rightArt = createDivWithElements([], [className, 'reader-art', 'reader-right-art'], `${className}-reader-right-art`);
  rightArt.style.backgroundColor = imageBackgroundColor;

  const reader = createDivWithElements([leftArt, textContainer, rightArt], [className, 'reader-container'], `${className}-reader-container`);
  document.getElementsByTagName('html')[0].append(reader);
  goToFragment(currentChapterIndex, currentTextIndex, false);

  function forward() {
    goToFragment(currentChapterIndex , currentTextIndex + 1, true);
  }
  
  function back() {
    goToFragment(currentChapterIndex, currentTextIndex - 1, false);
  }

  function removeHighlightLeft() {
    document.getElementById(`${className}-reader-left-image`)?.classList.add('reader-invisible');
    document.getElementById(`${className}-reader-left-art`)!.style.backgroundColor = imageBackgroundColor;
  } 
  
  function removeHighlightRight() {
    document.getElementById(`${className}-reader-right-image`)?.classList.add('reader-invisible');
    document.getElementById(`${className}-reader-right-art`)!.style.backgroundColor = imageBackgroundColor;
  }

  function highlightLeft() {
    removeHighlightRight();
    const leftImage = document.getElementById(`${className}-reader-left-image`);
    if (currentChapterIndex > 0 || currentTextIndex > 0) {
      leftImage?.classList.remove('reader-invisible');
      document.getElementById(`${className}-reader-left-art`)!.style.backgroundColor = JANUARY_COLORS.white;
    }
  }
  
  function highlightRight() {
    removeHighlightLeft();
    const rightImage = document.getElementById(`${className}-reader-right-image`)
    if (currentChapterIndex < book.length - 1 || currentTextIndex < book[book.length -1].length - 1) {
      rightImage?.classList.remove('reader-invisible');
      document.getElementById(`${className}-reader-right-art`)!.style.backgroundColor = JANUARY_COLORS.white;
    }
  }

  function goToFragment(chapterIndex: number, textIndex: number, isGoingForward: boolean) {
    if (chapterIndex === book.length) {
      removeHighlightRight();
    } else if (textIndex === book[chapterIndex].length) {
      goToFragment(chapterIndex + 1, 0, false);
    } else if (textIndex < 0) {
      if (chapterIndex !== 0) {
        goToFragment(chapterIndex - 1, book[chapterIndex - 1].length - 1, false);   
      }
    } else if (isGoingForward && !(book[chapterIndex]?.[textIndex]?.canShow ?? (() => true)())) {
      alert('Explore more to keep reading.');
    } else {
      if (chapterIndex === 0 && textIndex === 0) {
        removeHighlightLeft();
      }
      if ((isGoingForward && textIndex === 0) || (!isGoingForward && textIndex === book[chapterIndex].length - 1)) {
      }
      const text = document.getElementById(`${className}-reader-text`);
      text?.querySelectorAll('h1').forEach(title => text.removeChild(title));
      text?.querySelectorAll('h2').forEach(poemTitle => text.removeChild(poemTitle));
      text?.querySelectorAll('p').forEach(paragraph => text.removeChild(paragraph));
      currentChapterIndex = chapterIndex;
      currentTextIndex = textIndex;
      localStorage.setItem(`${className}ChapterIndex`, `${chapterIndex}`);
      localStorage.setItem(`${className}TextIndex`, `${textIndex}`);
      
      const fragment = book[chapterIndex][textIndex];
      removeByClassName('reader-image');
      document.getElementById(`${className}-reader-right-art`)?.append(fragment.rightImage.imageRight!);
      document.getElementById(`${className}-reader-left-art`)?.append(fragment.leftImage.imageLeft!);
      if (fragment.title) {
        let title = document.createElement('h1');
        title.innerText = fragment.title;
        text?.append(title);
      }
      if (fragment.heading) {
        let heading = document.createElement('h2');
        heading.innerText = fragment.heading;
        text?.append(heading);
      }
      if (fragment.text) {
        makeParagraphs(fragment.text).forEach(paragraph => text?.append(paragraph));
      }
      if (fragment.effect) {
        fragment.effect();
      }
    }
  }  

  window.addEventListener('keydown', event => {
    switch(event.code) {
      case "KeyA":
      case "ArrowLeft": 
        back();    
        highlightLeft();
        break;
      case "KeyD":
      case "ArrowRight":
        forward();
        highlightRight();
        break;
      default:
        break;
    }
  });

  leftArt.addEventListener('mouseover', highlightLeft);
  leftArt.addEventListener('mouseleave', removeHighlightLeft);
  leftArt.addEventListener('click', back);
  
  rightArt.addEventListener('mouseover', highlightRight);
  rightArt.addEventListener('mouseleave', removeHighlightRight);
  rightArt.addEventListener('click', forward);

  return reader;
}