import { FEBRUARY_COLORS } from "../../../shared/color";
import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from "../../../shared/helpers";
import { makeClock, makeCalendar } from "./clockAndCalendar.february.helpers";
import './clockAndCalendar.february.css';
import { WindowForFebruary } from "../../home/home-february/home.february.constants";
import { startTime } from "../../../shared/time/time";

export function leaveClockAndCalendarFebruary() {
    startTime();
    removeByClassName('clock-and-calendar-february');
}

export function clockAndCalendarFebruary(comeHome: () => void) {
    const windowForFebruary = window as WindowForFebruary;
    const isHell = !!windowForFebruary.isHell;
    isHell ? setBackground(FEBRUARY_COLORS.lightGray) : setBackground(FEBRUARY_COLORS.blue);
    const clock = makeClock();
    const calendar = makeCalendar(isHell);
    const clockAndCalendarContainer = createDivWithElements([clock, calendar], ['clock-and-calendar-february'], 'clock-and-calendar-february-container')
    const all = document.getElementsByTagName('html')[0]
    all.append(createHomewardButton('Stop looking', ['clock-and-calendar-february'], () => {
        leaveClockAndCalendarFebruary()
        comeHome()
    }));
    all.append(clockAndCalendarContainer);
}