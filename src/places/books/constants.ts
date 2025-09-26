import { ImageCatalog } from "../../shared/constants";
import { blech, blechCover } from './blech/blech';
import { loonOfLoons, loonOfLoonsCover } from './loonOfLoons/loonOfLoons';
import { oracle, oracleBox } from './oracle/oracle';
import { anthology, anthologyCover } from './anthology/anthology';
import { booksIntro, booksIntroSmall } from './booksIntro/booksIntro';
import { mereReality, mereRealityCover } from "./mereReality/mereReality";
import { verna, vernaCover } from './verna/verna';
import { michael, michaelCover } from "./michael/michael";
import { madeline, madelineCover } from "./madeline/madeline";

export interface Book {
  name: string;
  showCover: () => HTMLImageElement;
  show: (goBack: () => void) => void;
  shouldHide?: () => boolean; 
}

// export const FEBRUARY_BOOKS_HEAVEN: Book[] = [
//   { // lost sylphid, lost princess &or golden key
//     name: 'anthology',
//     showCover: anthologyCover,
//     show: februaryAnthology,
//   },
//   { // Ruth, happy ending
//     name: 'courage',
//     showCover: courageHeavenCover,
//     show: courageHeaven,
//   },
//   { // ? Christy, happy ending???? 
//     name: 'faith',
//     showCover: faithHeavenCover,
//     show: faithHeaven,
//   },
//   { // Elinor, happy ending
//     name: 'temperance',
//     showCover: temperanceHeavenCover,
//     show: temperanceHeaven,
//   },
//   { // Lily, happy ending ???
//     name: 'love',
//     showCover: loveHeavenCover,
//     show: loveHeaven,
//   },
//   { // ...Janus & Lizzie, happy ending?
//     name: 'justice',
//     showCover: justiceHeavenCover,
//     show: justiceHeaven,
//   },
//   { // Duessa
//     name: 'wisdom',
//     showCover: wisdomHeavenCover,
//     show: wisdomHeaven,
//   },
//   { // Doris? Lost princess?
//     name: 'hope',
//     showCover: hopeHeavenCover,
//     show: hopeHeaven,
//   },
// ]

// export const FEBRUARY_BOOKS_HELL: Book[] = [
//   { // lost sylphid, lost princess &or golden key
//     name: 'anthology',
//     showCover: anthologyCover,
//     show: februaryAnthology,
//   },
//   { // Ruth, happy ending
//     name: 'courage',
//     showCover: courageHellCover,
//     show: courageHell,
//   },
//   { // ? Christy, happy ending???? 
//     name: 'faith',
//     showCover: faithHellCover,
//     show: faithHell,
//   },
//   { // Elinor, happy ending
//     name: 'temperance',
//     showCover: temperanceHellCover,
//     show: temperanceHell,
//   },
//   { // Lily, happy ending ???
//     name: 'love',
//     showCover: loveHellCover,
//     show: loveHell,
//   },
//   { // ...Janus & Lizzie, happy ending?
//     name: 'justice',
//     showCover: justiceHellCover,
//     show: justiceHell,
//   },
//   { // Duessa
//     name: 'wisdom',
//     showCover: wisdomHellCover,
//     show: wisdomHell,
//   },
//   { // Doris? Lost princess?
//     name: 'hope',
//     showCover: hopeHellCover,
//     show: hopeHell,
//   },
// ]

export const BOOKS: Book[] = [
  {
    name: 'blech',
    showCover: blechCover,
    show: blech,
  },
  {
    name: 'loonOfLunes',
    showCover: loonOfLoonsCover,
    show: loonOfLoons,
  },
  // {
  //   name: 'oracle',
  //   showCover: oracleBox,
  //   show: oracle,
  // },
  {
    name: 'anthology',
    showCover: anthologyCover,
    show: anthology,
  },
  {
    name: 'booksIntro',
    showCover: booksIntroSmall,
    show: booksIntro,
  },
  {
    name: 'mereReality',
    showCover: mereRealityCover,
    show: mereReality,
  },
  {
    name: 'madeline',
    showCover: madelineCover,
    show: madeline,
    shouldHide: () => localStorage.getItem('metMadelineEnding') !== 'true',
  },
  {
    name: 'michael',
    showCover: michaelCover,
    show: michael,
    shouldHide: () => localStorage.getItem('metMichaelEnding') !== 'true',
  },
  {
    name: 'verna',
    showCover: vernaCover,
    show: verna,
    shouldHide: () => localStorage.getItem('metVernaEnding') !== 'true',
  },
] as const;

export const BOOKS_IMAGES: ImageCatalog = {
  blechCover: {
    path: new URL('../../assets/images/books/bookCovers/blechCover.jpg', import.meta.url),
    alt: 'Gaudy orange-gold book titled Blech',
  },
  loonOfLoonsCover: {
    path: new URL('../../assets/images/books/bookCovers/loonOfLoonsCover.jpg', import.meta.url),
    alt: 'Abstract orange, blue, and white book titled loon of lunes',
  },
  oracleBox: {
    path: new URL('../../assets/images/books/bookCovers/oracleJanuaryCover.jpg', import.meta.url),
    alt: 'Small box titled Magic Cards',
  },
  anthologyCover: {
    path: new URL('../../assets/images/books/bookCovers/anthologyCover.jpg', import.meta.url),
    alt: 'Dull red book titled A Year of Readings',
  },
  booksIntroSmall: {
    path: new URL('../../assets/images/paper.png?as=webp&height=270', import.meta.url),
    alt: 'Ball of paper',
  },
  mereRealityCover: {
    path: new URL('../../assets/images/books/bookCovers/mereRealityCover.jpg', import.meta.url),
    alt: 'Cardboard sketchbook with black banner reading Mere Reality',
  },
  sketchDiaryCover: {
    path: new URL('../../assets/images/books/bookCovers/mySketchDiaryCover.jpg', import.meta.url),
    alt: 'Cardboard sketchbook with white banner reading "My rainbow sketch diary" in many colors',
  },
  madelineCover: {
    path: new URL('../../assets/images/books/bookCovers/whiteNightcCover.jpg', import.meta.url),
    alt: 'Black book with white banner reading White Night',
  },
  michaelCover: {
    path: new URL('../../assets/images/books/bookCovers/smokeAndMirrorsCover.jpg', import.meta.url),
    alt: 'White book with black banner reading Smoke and Mirrors',
  },
  vernaCover: {
    path: new URL('../../assets/images/books/bookCovers/grayDawnCover.jpg', import.meta.url),
    alt: 'Gray book with darker gray banner reading Gray Dawn',
  },
} as const;
