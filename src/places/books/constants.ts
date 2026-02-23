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
import { sketchDiaryCover } from "./sketchDiary/sketchDiary";
import { deificCover, deific } from './february/deific/deific';
import { holySonnets, holySonnetsCover } from "./february/holySonnets/holySonnets";

export interface Book {
  name: string;
  showCover: () => HTMLImageElement;
  show: (goBack: () => void) => void;
  shouldHide?: () => boolean; 
}

// Living Poems in the style of Firebirds
export const FEBRUARY_BOOKS_HEAVEN: Book[] = [
  // pair with poor Donne
  {
    name: 'deific',
    showCover: deificCover,
    show: deific,
  },
//   {
//     name: 'outOfTales',
//     showCover: outOfTalesCover,
//     show: outOfTales,
//   },
//   {
//     name: 'wiseWoman',
//     showCover: wiseWomanCover,
//     show: wiseWoman,
//   },
//   {
//     name: 'sketchDiary',
//     showCover: februarySketchDiaryCover,
//     show: februarySketchDiary,
//   },
//   {
//     name: 'flowerFairies',
//     showCover: flowerFairiesCover,
//     show: flowerFairies,
//   },
//   {
//     name: 'talesOfOut',
//     showCover: talesOfOutCover,
//     show: talesOfOut,
//   },
//   {
//     name: 'duessa',
//     showCover: duessaCover,
//     show: duessa,
//   },
//   // Doris
//   {
//     name: 'romanceLastChapter',
//     showCover: romanceLastChapterCover,
//     show: romanceLastChapter,
//   },
  {
    name: 'holySonnets',
    showCover: holySonnetsCover,
    show: holySonnets,
  },
//   {
//     name: 'illuminations',
//     showCover: illuminationsCover,
//     show: illuminations,
//   },
//   {
//     name: 'songOfTheReed',
//     showCover: songOfTheReedCover,
//     show: songOfTheReed,
//   },
//   {
//     name: 'dearEmily',
//     showCover: illuminationsCover,
//     show: illuminations,
//   },
//   {
//     name: 'amalie',
//     showCover: amalieCover,
//     show: amalie,
//   }
//   // { // lost sylphid, lost princess &or golden key
//   //   name: 'februaryAnthology',
//   //   showCover: anthologyCover,
//   //   show: februaryAnthology,
//   // },
]

export const FEBRUARY_BOOKS_HELL: Book[] = [
//   {
//     name: 'holySonnets',
//     showCover: holySonnetsCover,
//     show: holySonnets,
//   },
//   {
//     name: 'illuminations',
//     showCover: illuminationsCover,
//     show: illuminations,
//   },
//   {
//     name: 'songOfTheReed',
//     showCover: songOfTheReedCover,
//     show: songOfTheReedHell,
//   },
//   {
//     name: 'dearEmily',
//     showCover: illuminationsCover,
//     show: illuminations,
//   },
//   {
//     name: 'romanceRoulette',
//     showCover: romanceRouletteCover,
//     show: romanceRoulette,
//   },
//   {
//     name: 'thisThing',
//     showCover: thisThingCover,
//     show: thisThing,
//   }
]

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
  deificCover: {
    path: new URL('../../assets/images/books/bookCovers/deificCover.jpg', import.meta.url),
    alt: 'Book with mice (one cartoon, one realistic pencil) on cardboard reading "Songs & Unholy Sonnets / Dei-fic"',
  },
  holySonnetsCover: {
    path: new URL('../../assets/images/books/bookCovers/holySonnets.webp', import.meta.url),
    alt: 'Book with mouse reading "Holy Sonnets ~ John Donne"',
  }
} as const;
