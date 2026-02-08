import { makeParagraphs } from "../../../shared/text";
import { createButtonWithImage, createDivWithElements, createImage } from "../../../shared/helpers";
import { INTRO_TEXT } from "../constants";
import { SHARED_IMAGES } from "../../../shared/constants";

export function hideIntro() {
  document.getElementById('intro')?.classList.add('hidden');
}
export function showIntro() {
  document.getElementById('intro')?.classList.remove('hidden');
}

export function createIntro(): HTMLDivElement {
  const paragraphs = makeParagraphs(INTRO_TEXT);
  const xImage = createImage(SHARED_IMAGES.x, ['home', 'intro', 'close-button-image'], 'intro-close-button-image');
  const closeButton = createButtonWithImage(xImage, ['home', 'intro', 'close-button'], 'intro-close-button');
  closeButton.addEventListener('click', hideIntro);
  const message = createDivWithElements(paragraphs, ['home', 'intro'], 'intro-message');
  return createDivWithElements([closeButton, message], ['home', 'hidden', 'intro'], 'intro');
}