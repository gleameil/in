import { FEBRUARY_COLORS, FebruaryColor } from "../../../shared/color";
import { ImageCatalog, ImagePathAndAltText, LinearGradient } from "../../../shared/constants";

export interface WindowForFebruary extends Window {
    lampIsOn?: boolean;
    isHell?: boolean;
}

export const FEBRUARY_HOME_IMAGES: ImageCatalog = {
    bed: {
        path: new URL('../../../assets/images/home/february/bed.png?as=webp', import.meta.url),
        alt: 'Bed'
    },
    comforterMask: {
        path: new URL('../../../assets/images/home/february/bedMask.png', import.meta.url),
        alt: ''
    },
    floor: {
        path: new URL('../../../assets/images/home/february/floor.jpg?as=webp', import.meta.url),
        alt: 'floor',
    },
    lampOn: {
        path: new URL('../../../assets/images/home/february/lampOn.png?as=webp', import.meta.url),
        alt: 'lamp shining warmly',
    },
    lampMask: {
        path: new URL('../../../assets/images/home/february/lampMask.png', import.meta.url),
        alt: '',
    },
    corner: {
        path: new URL('../../../assets/images/home/february/corner.png?as=webp', import.meta.url),
        alt: '',
    },
    bookshelf: {
        path: new URL('../../../assets/images/home/february/bookshelf.png?as=webp', import.meta.url),
        alt: 'bookshelf',
    },
};

const FEBRUARY_PATTERNS: ImageCatalog = {
    snow: {
        path: new URL('../../../assets/images/home/february/snowPattern.jpg?as=webp', import.meta.url),
        alt: 'stylized snow print',
    },
    mouse: {
        path: new URL('../../../assets/images/home/february/mousePattern.jpg?as=webp', import.meta.url),
        alt: 'mouse print',
    },
    polkaDot: {
        path: new URL('../../../assets/images/home/february/polkaDotPattern.jpg?as=webp', import.meta.url),
        alt: 'polka dot print',
    }
}

export const FEBRUARY_BACKGROUNDS: (ImagePathAndAltText | FebruaryColor)[] = [FEBRUARY_COLORS.white, FEBRUARY_PATTERNS.snow, FEBRUARY_COLORS.pink, FEBRUARY_PATTERNS.mouse, FEBRUARY_COLORS.blue, FEBRUARY_PATTERNS.polkaDot, FEBRUARY_COLORS.dullViolet]
