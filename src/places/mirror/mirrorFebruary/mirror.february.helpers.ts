import { createButtonWithText, createDivWithElements, createImage, createSpan, removeByClassName } from "../../../shared/helpers";
import { WindowForFebruary } from "../../home/home-february/home.february.constants";
import { CITY_DOLENT, FEBRUARY_IN_THE_MIRROR, MIRROR_FEBRUARY_IMAGES, MirrorChoice, MirrorEffectCatalog, MirrorInteraction, MirrorSpeech } from "./mirror.february.constants";
import { setMaxTime } from "../../../shared/time/time";
import { INITIAL_LIMIT_OF_FEBRUARY_FORESIGHT, LIMITLESS } from "../../../shared/time/time.februaryConstants";

const MIRROR_EFFECTS: MirrorEffectCatalog = {
    game: (comeHome: () => void) => {
        setMaxTime(`${INITIAL_LIMIT_OF_FEBRUARY_FORESIGHT}`);
        removeByClassName('side-wall-february');
        comeHome();
    },
    noGame: (comeHome: () => void) => {
        setMaxTime(LIMITLESS);
        removeByClassName('side-wall-february');
        comeHome();
    }
} as const;

function interactionForToday(today: number): MirrorInteraction | undefined {
    return FEBRUARY_IN_THE_MIRROR[today] 
}

function createMirrorSpeechDiv(dialogue: MirrorSpeech): HTMLDivElement {
    let text = document.getElementById(`${dialogue.speaker}-text`) as HTMLDivElement;
    if (!text) {
        throw new Error('Missing Mirror Speech')
    }
    text.innerText = dialogue.markdown;
    text.classList.remove('you-text-hidden');
    return text;
}

function createMirrorOptions(dialogue: MirrorChoice, interaction: MirrorInteraction, mirror: HTMLDivElement, youText: HTMLDivElement, comeHome: () => void): HTMLDivElement {
    const options = dialogue.options.map((option, index) => {
        const optionButton = createButtonWithText(option.markdown, ['mirror-close', 'you-option'], `you-option${index}`);
        optionButton.addEventListener('click', (e) => {
            e.stopPropagation();
            removeByClassName('you-option');
            youText.classList.add('you-text-hidden');
            goToMirrorId(option.nextId, interaction, mirror, youText, comeHome);
        }, { once: true});
        return optionButton;
    });

    youText.innerHTML = '';
    youText.append(... options);
    youText.classList.remove('you-text-hidden');
    return youText;
}

function goToMirrorId(id: string, interaction: MirrorInteraction, mirror: HTMLDivElement, youText: HTMLDivElement, comeHome: () => void) {
    if (interaction.effectIds.includes(id)) {
        MIRROR_EFFECTS[id]?.(comeHome);
        return;
    }
    const dialogueItem = interaction.interactionSequence[id];
    if (dialogueItem === undefined) {
        throw new Error(`missing dialogue item or effect of id ${id}`)
    } else if ((dialogueItem as MirrorSpeech).markdown) {
        const speech = createMirrorSpeechDiv(dialogueItem as MirrorSpeech);
        const clickable = speech.id === 'you-text' ? speech : mirror;
        clickable.addEventListener('click', () => {
            speech.innerText = '';
            if (speech.id === 'you-text') {
                speech.classList.add('you-text-hidden')
            }
            goToMirrorId((dialogueItem as MirrorSpeech).nextId, interaction, mirror, youText, comeHome)
        }, { once: true })
    } else {
        createMirrorOptions(dialogueItem as MirrorChoice, interaction, mirror, youText, comeHome);
    }

}

function startInteraction(today: number, mirror: HTMLDivElement, youText: HTMLDivElement, comeHome: () => void) {
    const interaction = interactionForToday(today);
    if (interaction === undefined) {
        throw new Error('missing interaction')
    }
    goToMirrorId(interaction.firstId, interaction, mirror, youText, comeHome);
}

export function makeFirstMirror(today: number, comeHome: () => void) {
    const frame = createImage(MIRROR_FEBRUARY_IMAGES.frame, ['mirror-close'], 'mirror-frame');
    const background = createImage(MIRROR_FEBRUARY_IMAGES.mirrorMask, ['mirror-close'], 'mirror-background');
    const interlocutor = createImage(MIRROR_FEBRUARY_IMAGES.foundJennie, ['mirror-close'], 'mirror-silhouette');
    const mirrorText = createDivWithElements([], ['mirror-close'], 'mirror-text');
    const youText = createDivWithElements([], ['mirror-close', 'you-text-hidden'], 'you-text');
    const mirror = createDivWithElements([background, interlocutor, mirrorText, frame], ['mirror-close'], 'mirror-close-february');
    document.getElementsByTagName('html')[0].append(createDivWithElements([mirror, youText], ['side-wall-february'], 'side-wall-february-container'));
    startInteraction(today, mirror, youText, comeHome);
}

export function makeMirror(): HTMLDivElement {
    const isHell = (window as WindowForFebruary).isHell;
    const frame = createImage(MIRROR_FEBRUARY_IMAGES.frame, ['mirror-close'], 'mirror-frame');
    const background = createImage(MIRROR_FEBRUARY_IMAGES.mirrorMask, ['mirror-close'], 'mirror-background');
    const jennie = !isHell ? createImage(MIRROR_FEBRUARY_IMAGES.lostJennie, ['mirror-close'], 'lost-jennie') : createImage(MIRROR_FEBRUARY_IMAGES.foundJennie, ['mirror-close'], 'found-jennie');
    let mirror: HTMLElement[] = [background, jennie, frame];
    if (!isHell) {
        const gatesOfHellText = createSpan(`${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT} ${CITY_DOLENT}`, ['mirror-close'], 'lost-jennie-text');
        const gatesOfHell = createDivWithElements([gatesOfHellText], ['mirror-close'], 'lost-jennie-gates-of-hell');
        mirror = [background, jennie, gatesOfHell, frame];
    }
    return createDivWithElements(mirror, ['mirror-close'], 'mirror-close-february');
}
