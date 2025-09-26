import { createDivWithElements, createImage } from "../../../shared/helpers";
import { WindowForFebruary } from "../../home/home-february/home.february.constants";
import { MIRROR_FEBRUARY_IMAGES } from "./mirror.february.constants";

export function makeMirror(): HTMLDivElement {
    const isHell = (window as WindowForFebruary).isHell;
    const frame = createImage(MIRROR_FEBRUARY_IMAGES.frame, ['mirror-close'], 'mirror-frame');
    // const background = createImage(MIRROR_FEBRUARY_IMAGES.mirrorMask, ['mirror-close'], 'mirror-background');
    const jennie = !isHell ? createImage(MIRROR_FEBRUARY_IMAGES.lostJennie, ['mirror-close'], 'lost-jennie') : createImage(MIRROR_FEBRUARY_IMAGES.foundJennie, ['mirror-close'], 'found-jennie');
    return createDivWithElements([jennie, frame], ['mirror-close'], 'mirror-close-february');
}
// export function makeClock(): HTMLDivElement {

// }

// export function makeCalendar() HTMLDivElement {

// }
