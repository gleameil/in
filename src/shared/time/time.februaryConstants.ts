import { FEBRUARY_COLORS, FebruaryColor } from "../color";

export const BEGINNING_OF_FEBRUARY = new Date(2024, 1).getTime();
export const INITIAL_LIMIT_OF_FEBRUARY_FORESIGHT = new Date(2024, 1, 1, 23, 59, 59).getTime();
export const END_OF_FEBRUARY = new Date(2024, 1, 29, 23, 59, 59).getTime();

export const LIMIT_OF_FEBRUARY_FORESIGHT_KEY = 'limitOfFebruaryForesight';
export const LIMITLESS = 'limitless';

export interface FebruaryHoliday {
    date: number,
    name: string,
    secularEmoji: string,
    sacredEmoji: string,
    color: FebruaryColor,
    textColor?: FebruaryColor,
}

export const FEBRUARY_HOLIDAYS: FebruaryHoliday[] = [
    {
        date: 1,
        name: 'St. Brigid\'s Day',
        secularEmoji: '☘️',
        sacredEmoji: '🔥',
        color: FEBRUARY_COLORS.red,
        textColor: FEBRUARY_COLORS.white,
    },
    {
        date: 2,
        name: 'Groundhog Day',
        secularEmoji: '🐿️',
        sacredEmoji: '🔥',
        color: FEBRUARY_COLORS.orange,
    },
    {
        date: 8,
        name: 'Brook\'s Birthday',
        secularEmoji: '🎂',
        sacredEmoji: '🩵',
        color: FEBRUARY_COLORS.blue,
    },
    {
        date: 11,
        name: 'Superbowl Sunday',
        secularEmoji: '🏈',
        sacredEmoji: '⚜️',
        color: FEBRUARY_COLORS.indigo,
        textColor: FEBRUARY_COLORS.white,
    },
    {
        date: 13,
        name: 'Mardi Gras',
        secularEmoji: '🥞',
        sacredEmoji: '🥞',
        color: FEBRUARY_COLORS.yellow,
    },
    {
        date: 14,
        name: 'Valentine\'s Day',
        secularEmoji: '❤️',
        sacredEmoji: '♱',
        color: FEBRUARY_COLORS.violet,
        textColor: FEBRUARY_COLORS.white,
    },
    {
        date: 29,
        name: 'Leap Day',
        secularEmoji: '🗓️',
        sacredEmoji: '🌱',
        color: FEBRUARY_COLORS.green,
        textColor: FEBRUARY_COLORS.white,
    },
]

export interface FebruaryDay {
    // task descriptions
    // holiday if existent
}

export const FEBRUARY_SCHEDULE = [] as const;