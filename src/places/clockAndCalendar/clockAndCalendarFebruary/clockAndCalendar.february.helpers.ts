import { FEBRUARY_COLORS, JANUARY_COLORS } from "../../../shared/color";
import { createDivWithElements, createImage, createSpan } from "../../../shared/helpers";
import { month as getMonth, getTime, setTime } from "../../../shared/time/time";
import { DATETIME_IMAGES_FEBRUARY, DEGREES_PER_MINUTE_MINUTE_HAND, DEGREES_PER_MINUTE_HOUR_HAND, FebruaryHoliday, FEBRUARY_HOLIDAYS } from "./clockAndCalendar.february.constants";

function minuteHandAngle(minutesFromStartHour: number): number {
    const degreesFromVertical = DEGREES_PER_MINUTE_MINUTE_HAND * minutesFromStartHour;
    // clock hands start horizontal, at 3 o'clock / 15 minutes
    return degreesFromVertical - 90;
} 

function hourHandAngle(minutesFromStartDay: number): number {    
    const degreesFromVertical = DEGREES_PER_MINUTE_HOUR_HAND * minutesFromStartDay;
    // clock hands start horizontal, at 3 o'clock / 15 minutes
    return degreesFromVertical - 90;
} 

function showDate(originalDate: Date) {
    const now = getTime();
    const previousDay = document.getElementById(`calendar-square-${originalDate.getMonth()}-${originalDate.getDate()}`) as HTMLDivElement;
    const today = document.getElementById(`calendar-square-${getMonth()}-${now.getDate()}`) as HTMLDivElement;
    if (today) {
        highlightToday(today, previousDay, getHoliday(now));
    }
}

function showTime(minuteHand: HTMLImageElement, hourHand: HTMLImageElement) {
    const now = getTime();
    const minutesFromStartHour = now.getMinutes();
    const minutesFromStartDay = now.getHours() * 60 + minutesFromStartHour;

    minuteHand.style.transform = `rotate(${minuteHandAngle(minutesFromStartHour)}deg)`;
    hourHand.style.transform = `rotate(${hourHandAngle(minutesFromStartDay)}deg)`;
}
/* test: 
    1. top should be 40, 0
    2. 3 o'clock should be 80, 40
    3. 6 o'clock should be 40, 80
    4. 9 o'clock should be 0, 40
*/
function clockNumeralLocation(numeral: number): { left: number, top: number } {
    // 2*pi / 12
    const radiansPerNumeral = (Math.PI * 2) / 12 ;
    // start as if we're measuring distance from the center of the clock, not the top left
    const radius = 34; // may have to tweak; will be a percentage value
    const degreesFromNoon = numeral * radiansPerNumeral;
    const xFromOrigin = Math.sin(degreesFromNoon) * radius;
    const yFromOrigin = -Math.cos(degreesFromNoon) * radius;
    //origin is actually 40 from left and top;
    const left = xFromOrigin + 47;
    const top = yFromOrigin + 40;
    return { left, top };
}

export function makeClock(): HTMLDivElement {
    const clock = createImage(DATETIME_IMAGES_FEBRUARY.clock, ['clock-and-calendar', 'clock'], 'clock-bg');
    const minuteHand = createImage(DATETIME_IMAGES_FEBRUARY.minuteHand, ['clock-and-calendar', 'clock', 'clock-hand'], 'clock-minute-hand');
    const hourHand = createImage(DATETIME_IMAGES_FEBRUARY.hourHand, ['clock-and-calendar', 'clock', 'clock-hand'], 'clock-hour-hand');
    

    function changeTime(e: MouseEvent, isMinute: boolean = false) {
        const oldNow = getTime();
        const now = new Date(oldNow.getTime());
        const rightClick = e.button === 2;
        
        const change = rightClick ? -1 : 1

        if (isMinute) {
            now.setMinutes(now.getMinutes() + change);
        } else {
            now.setHours(now.getHours() + change)
        }
        setTime(now);
        showTime(minuteHand, hourHand);
        if (oldNow.getDate() !== getTime().getDate()) {
            showDate(oldNow);
        }
    }

    const clockCenter = createDivWithElements([], ['clock-and-calendar', 'clock'], 'clock-center-piece');

    minuteHand.addEventListener('click', (e: MouseEvent) => changeTime(e, true));
    hourHand.addEventListener('click', (e: MouseEvent) => changeTime(e));
    clockCenter.addEventListener('click', (e: MouseEvent) => changeTime(e));

    const numbers: HTMLSpanElement[] = [];
    for (let i = 1; i < 13; i++) {
        const number = createSpan(`${i}`, ['clock-and-calendar', 'clock', 'clock-numeral'], `clock-numeral-${i}`);
        const { left, top } = clockNumeralLocation(i);
        number.style.left = `${left}%`;
        number.style.top = `${top}%`;
        numbers.push(number);
    }
    const clockFace = createDivWithElements([...numbers, minuteHand, hourHand, clockCenter], ['clock-and-calendar', 'clock'], 'clock-face');
    showTime(minuteHand, hourHand);
    return createDivWithElements([clock, clockFace], ['clock-and-calendar', 'clock'], 'clock-close');
}

function removeHighlight(previousDay: HTMLDivElement) {
    previousDay.style.backgroundColor = 'transparent';
    previousDay.style.color = FEBRUARY_COLORS.black;
}

function highlightToday(today: HTMLDivElement, previousDay?: HTMLDivElement, todaysHoliday?: FebruaryHoliday) {
    if (previousDay) {
        removeHighlight(previousDay);
    }
    const month = getMonth();
    today.style.backgroundColor = todaysHoliday?.color ?? (month === 0 ? JANUARY_COLORS.white : FEBRUARY_COLORS.white);
    today.style.color = todaysHoliday?.textColor ?? (month === 0 ? FEBRUARY_COLORS.gray : FEBRUARY_COLORS.black);
} 

function getHoliday(date: Date): FebruaryHoliday | undefined {
    const month = date.getMonth();
    const day = date.getDate();
    return FEBRUARY_HOLIDAYS.find(holiday => month === 1 && holiday.date === day)
}

export function makeCalendar(isHell: boolean): HTMLDivElement {
    const image = isHell ? DATETIME_IMAGES_FEBRUARY.calendarHell : DATETIME_IMAGES_FEBRUARY.calendarHeaven;
    const calendarBg = createImage(image, ['clock-and-calendar', 'calendar'], 'calendar-bg');
    const calendarHeader = createSpan('February', ['clock-and-calendar', 'calendar'], 'calendar-header-february');
    const calendarSquares: HTMLDivElement[] = [];
    for (let i = 0; i < 35; i++) {
        let day: number;
        let month: number;
        if (i < 4) {
            day = 28 + i;
            month = 0;
        } else if (i < 33) {
            day = i - 3;
            month = 1;
        } else {
            day = i - 32;
            month = 2;
        }

        const calendarSquareElements: HTMLElement[] = [];
        calendarSquareElements.push(createSpan(`${day}`, ['clock-and-calendar', 'calendar', `calendar-square-${month}`, 'calendar-numeral'], `calendar-numeral-${month}-${day}`));
        const holiday: FebruaryHoliday | undefined = getHoliday(new Date(2024, month, day));
        if (holiday) {
            const text = createSpan(holiday.name, ['clock-and-calendar', 'calendar', `calendar-square-${month}`, 'calendar-holiday-text'], `calendar-holiday-text-${month}-${day}`);
            const emoji = createSpan(holiday.secularEmoji, ['clock-and-calendar', 'calendar', `calendar-square-${month}`, 'calendar-holiday-emoji'], `calendar-holiday-emoji-${month}-${day}`);
            calendarSquareElements.push(emoji);
        }
        const square = createDivWithElements(calendarSquareElements, ['clock-and-calendar', 'calendar', 'calendar-square'], `calendar-square-${month}-${day}`);
        square.addEventListener('click', () => {
            if (month < 2) {
                const previousDay = document.getElementById(`calendar-square-${getMonth()}-${getTime().getDate()}`) as HTMLDivElement;                
                setTime(new Date(2024, month, day, 0));

                highlightToday(square, previousDay, holiday)

                const minuteHand = document.getElementById('clock-minute-hand') as HTMLImageElement;
                const hourHand = document.getElementById('clock-hour-hand') as HTMLImageElement;
                if (minuteHand && hourHand) {
                    showTime(minuteHand, hourHand)
                }
            }
        });

        if (holiday) {
            square.addEventListener('mouseenter', () => {
                const emoji = document.getElementById(`calendar-holiday-emoji-${month}-${day}`);
                if (emoji) {
                    emoji.innerText = holiday.sacredEmoji;
                }
            });
            square.addEventListener('mouseleave', () => {
                const emoji = document.getElementById(`calendar-holiday-emoji-${month}-${day}`);
                if (emoji) {
                    emoji.innerText = holiday.secularEmoji;
                }
            });
        }

        if (getMonth() === month && getTime().getDate() === day) {
            highlightToday(square, undefined, holiday);
        } 
        calendarSquares.push(square)
    }
    const calendarGrid = createDivWithElements(calendarSquares, ['clock-and-calendar', 'calendar'], 'calendar-grid');
    return createDivWithElements([calendarBg, calendarHeader, calendarGrid], ['clock-and-calendar', 'calendar'], 'calendar')
}