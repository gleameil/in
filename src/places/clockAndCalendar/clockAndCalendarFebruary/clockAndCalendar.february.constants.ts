import { FEBRUARY_COLORS, FebruaryColor } from "../../../shared/color";
import { ImageCatalog } from "../../../shared/constants";

// 360deg / 1440 minutes per day
export const DEGREES_PER_MINUTE_HOUR_HAND = 0.5;
// 360deg / 60 minutes per hour
export const DEGREES_PER_MINUTE_MINUTE_HAND = 6;

export const DATETIME_IMAGES_FEBRUARY: ImageCatalog = {
    calendarHeaven: {
        path: new URL('../../../assets/images/clockAndCalendar/february/calendarHeaven.png', import.meta.url),
        alt: 'calendar with images of flowers shaped like hearts',
    },
    calendarHell: {
        path: new URL('../../../assets/images/clockAndCalendar/february/calendarHell.png', import.meta.url),
        alt: 'calendar with abstract image of eye floating in fire',
    },
    clock: {
        path: new URL('../../../assets/images/clockAndCalendar/february/clockClose.png', import.meta.url),
        alt: '',
    },
    minuteHand: {
        path: new URL('../../../assets/images/clockAndCalendar/february/minuteHand.png', import.meta.url),
        alt: '',
    },
    hourHand: {
        path: new URL('../../../assets/images/clockAndCalendar/february/hourHand.png', import.meta.url),
        alt: '',
    },
}

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
        date: 2,
        name: 'Groundhog Day',
        secularEmoji: '🐿️',
        sacredEmoji: '🔥',
        color: FEBRUARY_COLORS.yellow,
    },
    {
        date: 8,
        name: 'Brook\'s Birthday',
        secularEmoji: '🎂',
        sacredEmoji: '🩵',
        color: FEBRUARY_COLORS.blue,
    },
    {
        date: 10,
        name: 'Lunar New Year',
        secularEmoji: '🧧',
        sacredEmoji: '🐲',
        color: FEBRUARY_COLORS.red,
        textColor: FEBRUARY_COLORS.white,
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
        date: 14,
        name: 'Valentine\'s Day',
        secularEmoji: '❤️',
        sacredEmoji: '♱',
        color: FEBRUARY_COLORS.violet,
        textColor: FEBRUARY_COLORS.white,
    },
    {
        date: 19,
        name: 'President\'s Day',
        secularEmoji: '🇺🇸',
        sacredEmoji: '🇺🇸',
        color: FEBRUARY_COLORS.orange,
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