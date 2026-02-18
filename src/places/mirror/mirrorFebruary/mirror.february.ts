import { FEBRUARY_COLORS } from "../../../shared/color";
import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from "../../../shared/helpers";
import { makeMirror } from "./mirror.february.helpers";
import './mirror.february.css';
import { WindowForFebruary, FEBRUARY_BACKGROUNDS } from "../../home/home-february/home.february.constants";
import { getTime } from "../../../shared/time/time";

export function leaveSideWallFebruary() {
    removeByClassName('side-wall-february');
}

export function sideWallFebruary(comeHome: () => void) {
    const windowForFebruary = window as WindowForFebruary;
    const mirror = makeMirror();
    mirror.addEventListener('click', () => {
        if (getTime().getDate() === 14) {
            windowForFebruary.isHell = !windowForFebruary.isHell;
            leaveSideWallFebruary();
            comeHome();
        }
    }, { once: true });

    const sideWallContainer = createDivWithElements([mirror], ['side-wall-february'], 'side-wall-february-container')
    const all = document.getElementsByTagName('html')[0]
    all.append(createHomewardButton('Stop looking', ['side-wall-february'], () => {
        leaveSideWallFebruary()
        comeHome()
    }));
    all.append(sideWallContainer);
}