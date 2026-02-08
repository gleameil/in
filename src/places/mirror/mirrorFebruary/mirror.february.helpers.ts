import { createDivWithElements, createImage, createSpan } from "../../../shared/helpers";
import { WindowForFebruary } from "../../home/home-february/home.february.constants";
import { CITY_DOLENT, MIRROR_FEBRUARY_IMAGES } from "./mirror.february.constants";

export function makeMirror(): HTMLDivElement {
    const isHell = (window as WindowForFebruary).isHell;
    const frame = createImage(MIRROR_FEBRUARY_IMAGES.frame, ['mirror-close'], 'mirror-frame');
    // const background = createImage(MIRROR_FEBRUARY_IMAGES.mirrorMask, ['mirror-close'], 'mirror-background');
    const jennie = !isHell ? createImage(MIRROR_FEBRUARY_IMAGES.lostJennie, ['mirror-close'], 'lost-jennie') : createImage(MIRROR_FEBRUARY_IMAGES.foundJennie, ['mirror-close'], 'found-jennie');
    let mirror: HTMLElement[] = [jennie, frame];
    if (!isHell) {
        const gatesOfHellText = createSpan(`${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT}`, ['mirror-close'], 'lost-jennie-text');
        const gatesOfHell = createDivWithElements([gatesOfHellText], ['mirror-close'], 'lost-jennie-gates-of-hell');
        mirror = [jennie, gatesOfHell, frame];
    }
    return createDivWithElements(mirror, ['mirror-close'], 'mirror-close-february');
}
// export function makeClock(): HTMLDivElement {

// }

// export function makeCalendar() HTMLDivElement {

// }
