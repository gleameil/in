import { JanuaryColor } from "./color";

export interface ImageURLSrc {
  src: URL;
}

export interface AudioURLSrc {
  src: URL;
}

export interface ImagePathAndAltText {
  path: URL;
  alt: string;
  // preloading images for reader; left and right images get different ids
  imageLeft?: HTMLImageElement;
  imageRight?: HTMLImageElement; 
  shouldHide?: boolean;
}

export interface AudioPath {
  path: URL;
  id: string;
  isLoop: boolean;
  audio?: HTMLAudioElement;
}

export interface ImageCatalog {
  [name: string]: ImagePathAndAltText;
};

export interface AudioCatalog {
  [name: string]: AudioPath;
}

export const FONTS = {
  imFell: 'IM Fell English',
  indieFlower: 'Indie Flower',
  montserrat: 'Montserrat',
  ebGaramond: 'EB Garamond',
  rockSalt: 'Rock Salt',
  reenieBeanie: 'Reenie Beanie',
  nanumBrushScript: 'Nanum Brush Script',
} as const

export type Font = typeof FONTS[keyof typeof FONTS]

export interface LinearGradient {
  degrees: number;
  color1: JanuaryColor;
  color2: JanuaryColor;
}

export const SHARED_IMAGES: ImageCatalog = {
  arrowLeft: {
    path: new URL('../assets/images/arrow-left-red.png', import.meta.url),
    alt: 'hand-drawn next arrow',
    shouldHide: true,
  },
  arrowRight: {
    path: new URL('../assets/images/arrow-right-red.png', import.meta.url),
    alt: 'hand-drawn back arrow',
    shouldHide: true,
  },
  x: {
    path: new URL('../assets/images/x.png', import.meta.url),
    alt: 'hand-drawn close button',
    shouldHide: true,
  },
  noImage: {
    path: new URL('../assets/images/no-image.png', import.meta.url),
    alt: '',
    shouldHide: true,
  },
  paper: {
    path: new URL('../assets/images/paper.png', import.meta.url),
    alt: 'ball of paper',
  },
} as const;