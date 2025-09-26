import { FEBRUARY_COLORS } from "../../../shared/color";
import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from "../../../shared/helpers";
import { makeMirror } from "./mirror.february.helpers";
import './mirror.february.css';
import { WindowForFebruary } from "../../home/home-february/home.february.constants";

export function leaveSideWallFebruary() {
    removeByClassName('side-wall-february');
}

export function sideWallFebruary(comeHome: () => void) {
    setBackground(FEBRUARY_COLORS.lightGray);
    const mirror = makeMirror();
    mirror.addEventListener('click', () => {
        const windowForFebruary = window as WindowForFebruary;
        windowForFebruary.isHell = !windowForFebruary.isHell;
        leaveSideWallFebruary();
        comeHome();
    }, { once: true });
    // const clock = makeClock();
    // const calendar = makeCalendar();

    const sideWallContainer = createDivWithElements([mirror], ['side-wall-february'], 'side-wall-february-container')
    const all = document.getElementsByTagName('html')[0]
    all.append(createHomewardButton('Stop looking', ['side-wall-february'], () => {
        leaveSideWallFebruary()
        comeHome()
    }));
    all.append(sideWallContainer);
}