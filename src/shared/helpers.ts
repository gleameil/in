import markdownIt from 'markdown-it-ts';

import { OUT } from '../places/home/constants';
import { Color, FebruaryColor, JANUARY_COLORS, JanuaryColor } from './color';
import { AudioURLSrc, ImageCatalog, ImagePathAndAltText, ImageURLSrc, LinearGradient } from './constants';
import { canPlayAudio, setCanPlayFromQuery } from './sound';
import { getTime, setTimeFromQuery } from './time/time';

export function makeLinearGradient(gradient: LinearGradient): string {
  return `linear-gradient(${gradient.degrees}deg, ${gradient.color1}, ${gradient.color2})`;
}

export function createBackground() {
  const html = document.getElementsByTagName('html')[0];
  const background = createDivWithElements([], [], 'background');
  html.append(background);
  return background;
}

export class Background {
    background: ImagePathAndAltText | Color;
    constructor(background: ImagePathAndAltText | Color) {
        this.background = background
    }

    setAsCurrent(parent?: HTMLDivElement) {
        if (typeof (this.background as ImagePathAndAltText)?.path?.href === 'string') {
            setBackground(JANUARY_COLORS.white, undefined, parent, (this.background as ImagePathAndAltText)?.path?.href, true);
        } else {
            setBackground((this.background as Color).rgbaString(), undefined, parent);
        }
    }
}

export function setBackground(color: string, gradient?: LinearGradient, parent?: HTMLDivElement, imageHref?: string, repeat: boolean = false) {
  let bg = document.getElementById('background');
  if (!bg) {
    bg = createBackground();
  }
  const all = parent ?? bg;
  all.style.background = 'none';
  all.style.backgroundColor = color;
  if (gradient) {
    all.style.background = makeLinearGradient(gradient);
  }
  if (imageHref) {
    all.style.backgroundImage = `url(${imageHref})`;
    all.style.backgroundPosition = 'center';
    all.style.backgroundSize = repeat ? '20%' : 'contain';
    all.style.backgroundRepeat = repeat ? 'repeat' : 'no-repeat'
  }

}

export function fadeBackground(byHowMuch: number) {
  let bg = document.getElementById('background');
  if (!bg) {
    bg = createBackground();
  }
  let newOpacity = (parseFloat(bg.style.opacity) || 1) - byHowMuch;
  newOpacity = Math.max(newOpacity, 0);
  newOpacity = Math.min(newOpacity, 1);
  bg.style.opacity = `${newOpacity}`;
}

export function removeByClassName(className: string) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].remove();
  }
}

export function createImage(imageDetails: ImagePathAndAltText, classNames: string[], id: string): HTMLImageElement {
  const image = document.createElement('img');
  ((image as unknown) as ImageURLSrc).src = imageDetails.path
  image.alt = imageDetails.alt;
  image.classList.add(...classNames);
  image.id = id;
  return image;
}

export function createAudio(source: URL, classNames: string[], id: string): HTMLAudioElement {
  const audio = document.createElement('audio');
  ((audio as unknown) as AudioURLSrc).src = source;
  audio.classList.add(...classNames);
  audio.id = id;
  return audio;
}

export function createSpan(text: string, classNames: string[], id?: string): HTMLSpanElement {
  const span = document.createElement('span');
  span.innerText = text;
  if (classNames) span.classList.add(...classNames);
  if (id) span.id = id;
  return span;
}

export function createDivWithElements(elementsToAdd: HTMLElement[], classNames: string[], id?: string) {
  const div = document.createElement('div');
  if (classNames) div.classList.add(...classNames);
  if (id) { div.id = id; }
  div.append(...elementsToAdd); 
  return div;
}

export function createHomewardButton(text: string, classNames: string[], goBack: () => void) {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add(...classNames)
  button.id = 'homeward';
  button.addEventListener('click', goBack);
  return button;
}

export function createButtonWithImage(image: HTMLImageElement, classNames: string[], id: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.classList.add('image-button', ...classNames);
  button.id = id;
  button.append(image);
  return button;
}

export function createButtonWithText(text: string, classNames: string[], id: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.classList.add(...classNames);
  button.id = id;
  button.innerText = text;
  return button;
}

export function randomInRange(minimum: number, maximum: number): number {
  return Math.random() * (maximum - minimum) + minimum;
}

export function randomIntegerInRange(minimum: number, maximum: number): number {
  return Math.floor(randomInRange(minimum, maximum));
}

export function makeCoordinateStringVH(number: number): string {
  return `${number}vh`;
}

export function makeCoordinateStringVW(number: number): string {
  return `${number}vw`;
}

export function sun(parent: HTMLDivElement, rayPrefix: string, time: string) {
  for (let i = 0; i < 720; i++) {
    const ray = document.createElement('div');
    ray.classList.add(`${rayPrefix}-ray`, `${rayPrefix}-${time}-ray`);
    if (i % 14 === 0) {
        ray.classList.add(`${rayPrefix}-mid-ray`);
    } else if (i % 6 === 0) {
        ray.classList.add(`${rayPrefix}-thick-ray`);
    } else {
        ray.classList.add(`${rayPrefix}-normal-ray`);
    }
    if (i % 3 === 0 && ray.classList.contains(`${rayPrefix}-normal-ray`)) {
        ray.id = `${i}`
        ray.classList.replace(`${rayPrefix}-${time}-normal-ray`, `${rayPrefix}-long-ray`);
    }
    ray.style.transform = `rotate(-${i/2}deg)`;
    parent.append(ray);
  }
}

export function expectLetters(e: KeyboardEvent, index: number, letters: string, callback: () => void) {
    if (index === letters.length) {
        callback();
        return;
    }
    if (e.key === letters[index]) {
        document.addEventListener('keydown', e => expectLetters(e, index + 1, letters, callback), { once: true });
    }
}

export function handleQueryParams() {
  const query = new URLSearchParams(window.location.search);
  setTimeFromQuery(query);
  setCanPlayFromQuery(query);
  window.history.replaceState({}, '', window.location.href.replace(query.toString(), ''));
}

export function urlForOutNow(): URL {
  const url = new URL(OUT);
  url.searchParams.append('time', `${getTime().getTime()}`);
  url.searchParams.append('canPlay', `${canPlayAudio()}`);
  return url;
}

export function fillWithMarkdown(element: HTMLElement, markdown: string) {
  const md = markdownIt({ html: true });
  element.innerHTML = md.render(markdown);
}

export function loadImagesForCatalog(imageCatalog: ImageCatalog, classNames: string[]) {
  let imageKeys = Object.keys(imageCatalog);
  imageKeys.forEach(key => {
    const imagePath = imageCatalog[key];
    imagePath.imageLeft = createImage(imagePath, classNames, `image-${key}`);
  });
}
