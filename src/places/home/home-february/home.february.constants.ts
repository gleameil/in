import { FEBRUARY_COLORS, FebruaryColor } from "../../../shared/color";
import { ImageCatalog, ImagePathAndAltText, LinearGradient } from "../../../shared/constants";
import { setBackground } from "../../../shared/helpers";

export interface WindowForFebruary extends Window {
    lampIsOn?: boolean;
    isHell?: boolean;
}

export const FEBRUARY_HOME_IMAGES: ImageCatalog = {
    bed: {
        path: new URL('../../../assets/images/home/february/bed.png?as=webp', import.meta.url),
        alt: 'Bed'
    },
    clockAndCalendar: {
        path: new URL('../../../assets/images/home/february/clockAndCalendar.png?as=webp', import.meta.url),
        alt: 'clock with red frame and wall calendar',
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
    dresser: {
        path: new URL('../../../assets/images/home/february/dresser.png?as=webp', import.meta.url),
        alt: 'cabinet',
    },
    mirror: {
        path: new URL('../../../assets/images/home/february/mirror.png?as=webp', import.meta.url),
        alt: 'mirror',
    },
    window: {
        path: new URL('../../../assets/images/home/february/window.png?as=webp', import.meta.url),
        alt: 'window',
    },
    outTheWindowHeaven: {
        path: new URL('../../../assets/images/home/february/outTheWindowHeaven.png?as=webp', import.meta.url),
        alt: 'indeterminate gray',
    },
    outTheWindowHell: {
        path: new URL('../../../assets/images/home/february/outTheWindowHell.png?as=webp', import.meta.url),
        alt: 'cartoonishly drawn suburban neighborhood',
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

export const backgroundChoiceFebruary = 'background-choice-february'

export const FEBRUARY_HAS_CHANGING_BACKGROUND = {
    sideWall: 'side-wall',
    backWall: 'back-wall',
    comforter: 'comforter',
} as const;

export type FebruaryChangingBackground = typeof FEBRUARY_HAS_CHANGING_BACKGROUND[keyof typeof FEBRUARY_HAS_CHANGING_BACKGROUND]

export const FEBRUARY_BACKGROUNDS: (ImagePathAndAltText | FebruaryColor)[] = [FEBRUARY_COLORS.white, FEBRUARY_PATTERNS.snow, FEBRUARY_COLORS.pink, FEBRUARY_PATTERNS.mouse, FEBRUARY_COLORS.blue, FEBRUARY_PATTERNS.polkaDot, FEBRUARY_COLORS.dullViolet] as const;
