import { Color, FEBRUARY_COLOR_SET } from '../../../shared/color';
import { createDivWithElements, createImage, removeByClassName, loadImagesForCatalog, createButtonWithImage, fillWithMarkdown, createSpan } from "../../../shared/helpers";
import { SpeechBubble, PoemFragment, FragmentedPoem, Marginalia, StaticPage, PoemPage, FebruaryPage, FebruaryChapter, FebruaryBook, BookColors, END } from './reader.february.constants';
import { SHARED_IMAGES } from '../../../shared/constants';
import './reader.february.css';

function loadImagesForBook(className: string, book: FebruaryBook) {
  loadImagesForCatalog(book.imageCatalogToLoad, [className]);
}

function makeStaticPage(className: string): HTMLDivElement {
  const textContainer = createDivWithElements([], [className, 'february-reader-text-container'], `${className}-february-reader-text-container`);  
  const textWindow = createDivWithElements([textContainer], [className, 'february-reader-text-window'], `${className}-february-reader-text-window`);

  const marginaliaLeft = createDivWithElements([], [className, 'february-reader-marginalia-left', `${className}-reader-marginalia`, `${className}-reader-marginalia-horizontal`], `${className}-february-reader-marginalia-left`);
  const marginaliaTop = createDivWithElements([], [className, 'february-reader-marginalia-top', `${className}-reader-marginalia`, `${className}-reader-marginalia-vertical`], `${className}-february-reader-marginalia-top`);
  const marginaliaRight = createDivWithElements([], [className, 'february-reader-marginalia-right', `${className}-reader-marginalia`, `${className}-reader-marginalia-horizontal`], `${className}-february-reader-marginalia-right`);
  const marginaliaBottom = createDivWithElements([], [className, 'february-reader-marginalia-bottom', `${className}-reader-marginalia`, `${className}-reader-marginalia-vertical`], `${className}-february-reader-marginalia-bottom`);

  const centerPane = createDivWithElements([marginaliaTop, textWindow, marginaliaBottom], [className, 'february-reader-center-pane'], `${className}-february-reader-static-page-center-pane`);

  return createDivWithElements([marginaliaLeft, centerPane, marginaliaRight], [className, 'static-page'], `${className}-static-page`);
}

function makePoemPage(className: string): HTMLDivElement {
  const backButtonImage = createImage(SHARED_IMAGES.arrowLeft, [className, 'february-reader-poem-page-back-button-image'], `${className}-february-reader-poem-page-back-button-image`);
  const backButton = createButtonWithImage(backButtonImage, [className, 'february-reader-poem-page-back-button'], `${className}-february-reader-poem-page-back-button`);
  return createDivWithElements([backButton], [className, 'poem-page'], `${className}-poem-page`);
}

function populateStaticPage(page: StaticPage, back: () => void, forward: () => void, className: string) {
  const staticPageElement = document.getElementById(`${className}-static-page`);
  const textContainer = document.getElementById(`${className}-february-reader-text-container`);
  if (!staticPageElement) {
    console.error('Static page element missing');
    return; // replace with error state?
  }
  if (!textContainer) {
    console.error('Text container element missing');
    return; // replace with error state?
  }

  const marginaliaLeft = document.getElementById(`${className}-february-reader-marginalia-left`);
  if (!marginaliaLeft) {
    console.error('Missing left image container');
  }
  if (page.marginalia?.left.imageLeft) {
    marginaliaLeft?.replaceChildren(page.marginalia.left.imageLeft);
  } else {
    const left = createImage(SHARED_IMAGES.arrowLeft, ['february-reader-static-page-back-button'], 'february-reader-poem-page-back-button');
    marginaliaLeft?.replaceChildren(left)
  }
  marginaliaLeft?.addEventListener('click', back, { once: true });

  if (page.marginalia?.top.imageLeft) {
    document.getElementById(`${className}-february-reader-marginalia-top`)?.replaceChildren(page.marginalia.top.imageLeft);
  }

  const marginaliaRight = document.getElementById(`${className}-february-reader-marginalia-right`);
  if (!marginaliaRight) {
    console.error('Missing right image container');
  }
  if (page.marginalia?.right.imageLeft) {
    const marginaliaRight = document.getElementById(`${className}-february-reader-marginalia-right`);
    if (!marginaliaRight) {
      console.error('Missing right image container');
    }
    marginaliaRight?.replaceChildren(page.marginalia.right.imageLeft);
  } else {
    const right = createImage(SHARED_IMAGES.arrowRight, ['february-reader-static-page-forward-button'], 'february-reader-poem-page-forward-button');
    marginaliaRight?.replaceChildren(right)
  }
  marginaliaRight?.addEventListener('click', forward, { once: true });

  window.addEventListener('keydown', event => {
    switch(event.code) {
      case "KeyA":
      case "ArrowLeft": 
        back();    
        break;
      case "KeyD":
      case "ArrowRight":
      case "Enter":
      case "Space":
        forward();
        break;
      default:
        break;
      }
    }, { once: true });
  
  if (page.marginalia?.bottom.imageLeft) {
    document.getElementById(`${className}-february-reader-marginalia-bottom`)?.replaceChildren(page.marginalia.bottom.imageLeft);
  }
  fillWithMarkdown(textContainer, page.markdown);
  staticPageElement.style.display = 'flex';
}

function pagePoem(poem: FragmentedPoem, className: string, parent: HTMLElement): (clicks: number) => string | undefined {
  return (clicks: number) => {
    const phrase = poem[clicks - 1];
    if (!phrase) {
      return END;
    }
    const phraseSpan = createSpan('', [className, `february-reader-poem-phrase`, `${className}-poem-phrase`], `${className}-poem-phrase-${clicks-1}`);
    fillWithMarkdown(phraseSpan, phrase.markdown);

    let currentSpeechBubble = document.getElementById(`${className}-speech-bubble${phrase.speechBubble?.index ?? 0}`);
    if (!currentSpeechBubble) {
      currentSpeechBubble = createDivWithElements([], ['february-reader-speech-bubble', `${className}-speech-bubble`], `${className}-speech-bubble${phrase.speechBubble?.index ?? 0}`);
      parent.append(currentSpeechBubble);
    }

    if (phrase.speechBubble?.arrowLeft && phrase.speechBubble?.arrowRight) {
      currentSpeechBubble.classList.add(`${className}-speech-bubble-left`, `${className}-speech-bubble-right`);
    } else if (phrase.speechBubble?.arrowLeft) {
      currentSpeechBubble.classList.remove(`${className}-speech-bubble-right`);
      currentSpeechBubble.classList.add(`${className}-speech-bubble-left`);
    } else if (phrase.speechBubble?.arrowRight) {
      currentSpeechBubble.classList.remove(`${className}-speech-bubble-left`);
      currentSpeechBubble.classList.add(`${className}-speech-bubble-right`);
    } else {
      currentSpeechBubble.classList.remove(`${className}-speech-bubble-right`);
      currentSpeechBubble.classList.remove(`${className}-speech-bubble-left`);
    }

    let currentStanza = document.getElementById(`${className}-${phrase.speechBubble?.index ?? 0}-stanza${phrase.stanza ?? 0}`);
    if (!currentStanza) {
      currentStanza = createDivWithElements([], ['february-reader-poem-stanza', `${className}-stanza`], `${className}-${phrase.speechBubble?.index ?? 0}-stanza${phrase.stanza ?? 0}`);
      currentSpeechBubble.append(currentStanza);
    }

    let line = document.getElementById(`${className}-${phrase.speechBubble?.index ?? 0}-stanza${phrase.stanza ?? 0}-line${phrase.line ?? 0}`);
    if (!line) {
      line = createDivWithElements([], ['february-reader-poem-line', `${className}-line`], `${className}-${phrase.speechBubble?.index ?? 0}-stanza${phrase.stanza ?? 0}-line${phrase.line ?? 0}`);
      currentStanza.append(line);
    }

    line.append(phraseSpan);
    currentSpeechBubble.scrollIntoView({ behavior: 'smooth' });
  }
}

function populatePoemPage(page: PoemPage, back: () => void, forward: () => void, className: string) {
  document.getElementById(`${className}-poem-page-container`)?.remove();
  const poemPageElement = document.getElementById(`${className}-poem-page`);
    const backButton = document.getElementById(`${className}-february-reader-poem-page-back-button`);
  if (!poemPageElement) {
    console.error('Poem page element missing');
    return; // replace with error state?
  }
  
  if (!backButton) {
    console.error('Back button missing');
    return;
  }

  let clicks = 0;

  const container = createDivWithElements([], ['february-reader-poem-page-container'], `${className}-poem-page-container`);
  const title = page.title;
  if (title) {
    const titleElement = document.createElement('h1');
    titleElement.id = `${className}-title-${title}`;
    titleElement.innerText = title;
    titleElement.classList.add(`${className}-poem-page-title`);
    container.append(titleElement);
  }

  const poem = pagePoem(page.poem, className, container)

  function proceed() {
    console.log('proceed, clicks = ', clicks);
    clicks++;
    const result = poem(clicks);
    if (result === END) {
      window.removeEventListener('keydown', handleForwardKeypress);
      forward();
    }
  }
  backButton.addEventListener('click', () => {
    window.removeEventListener('keydown', handleForwardKeypress);
    back()
  }, { once: true });
  
  container.addEventListener('click', proceed);

  function handleForwardKeypress(event: KeyboardEvent) {
    switch(event.code) {
      case "KeyA":
      case "ArrowLeft":
        console.log(event.code, 'trying to go back');
        window.removeEventListener('keydown', handleForwardKeypress);
        back()
      case "KeyD":
      case "ArrowRight":
      case "Enter":
      case "Space":
        console.log('handleForwardKeypress', event.code)
        proceed();
        break;
      default:
        break;
    }
  }

  window.addEventListener('keydown', handleForwardKeypress);

  poemPageElement.append(container);
  proceed();
  poemPageElement.style.display = 'flex';
}

export function createFebruaryReader(className: string, book: FebruaryBook, homeward: () => void) {
  loadImagesForBook(className, book);
  let currentChapterIndex = 0;
  let currentTextIndex = 0;

  const storedChapterIndex = localStorage.getItem(`${className}ChapterIndex`);
  currentChapterIndex = storedChapterIndex ? parseInt(storedChapterIndex) : 0;
  const storedTextIndex = localStorage.getItem(`${className}TextIndex`);
  currentTextIndex = storedTextIndex ? parseInt(storedTextIndex) : 0;

  const poemPage = makePoemPage(className);
  poemPage.style.display = 'none';
  const staticPage = makeStaticPage(className);
  staticPage.style.display = 'none';

  const reader = createDivWithElements([poemPage, staticPage], [className, 'february-reader'], `${className}-february-reader`);

  document.getElementsByTagName('html')[0].append(reader);
  goToFragment(currentChapterIndex, currentTextIndex, false);

  function forward() {
    goToFragment(currentChapterIndex , currentTextIndex + 1, true);
  }

  function back() {
    goToFragment(currentChapterIndex, currentTextIndex - 1, false);
  }

  function goToFragment(chapterIndex: number, textIndex: number, isGoingForward: boolean) {
    console.log(`Chapter index: ${chapterIndex}, text index: ${textIndex}`);
    const chapters = book.chapters;
    if (chapterIndex >= chapters.length) {
      localStorage.removeItem(`${className}TextIndex`);
      localStorage.removeItem(`${className}ChapterIndex`);
      homeward();
      return;
    } else if (textIndex >= chapters[chapterIndex].length) {
      goToFragment(chapterIndex + 1, 0, false);
      return;
    } else if (textIndex < 0) {
      if (chapterIndex !== 0) {
        goToFragment(chapterIndex - 1, chapters[chapterIndex - 1].length - 1, false);   
        return;
      }
      goToFragment(chapterIndex, 0, isGoingForward);
      return;
    } else if (isGoingForward && !(chapters[chapterIndex]?.[textIndex]?.canShow ?? (() => true)())) {
      alert('Explore more to keep reading.');
      return;
    }

    poemPage.style.display = 'none';
    staticPage.style.display = 'none';
    localStorage.setItem(`${className}ChapterIndex`, `${chapterIndex}`);
    localStorage.setItem(`${className}TextIndex`, `${textIndex}`);

    currentChapterIndex = chapterIndex;
    currentTextIndex = textIndex;
    const page = chapters[chapterIndex][textIndex];

    if ((page as StaticPage).markdown) {
      populateStaticPage(page as StaticPage, back, forward, className);
    } else if ((page as PoemPage).poem) {
      populatePoemPage(page as PoemPage, back, forward, className);
    }
  }
}