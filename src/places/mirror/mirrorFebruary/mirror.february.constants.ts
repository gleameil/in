import { ImageCatalog } from "../../../shared/constants";

export const CITY_DOLENT = `Created me divine Omnipotence, The highest Wisdom and the primal Love.`

export const MIRROR_FEBRUARY_IMAGES: ImageCatalog = {
    frame: {
        path: new URL('../../../assets/images/mirror/february/mirrorClose.png?as=webp', import.meta.url),
        alt: 'mirror',
    },
    lostJennie: {
        path: new URL('../../../assets/images/mirror/february/lostJennie.jpg?as=webp', import.meta.url),
        alt: 'reflection of girl with handwritten words "I want to go home"',
    },
    foundJennie: {
        path: new URL('../../../assets/images/mirror/february/jennie.png?as=webp', import.meta.url),
        alt: 'reflection of girl with suns and moons on her face',
    },
    mirrorMask: {
        path: new URL('../../../assets/images/mirror/february/mirrorMask.png?as=webp', import.meta.url),
        alt: '',
    },
};

export type MirrorSpeaker = 'you' | 'mirror'

export interface MirrorSpeech {
    markdown: string;
    speaker: MirrorSpeaker;
    nextId: string;
}

export interface MirrorOption {
    markdown: string;
    nextId: string;
}

export interface MirrorChoice {
    options: MirrorOption[];
}

export interface MirrorInteractionSequence {
    [id: string]: MirrorSpeech | MirrorChoice;
}

export interface MirrorInteraction {
    firstId: string;
    interactionSequence: MirrorInteractionSequence;
    effectIds: string[];
}

const FEBRUARY_OPENING: MirrorInteractionSequence = {
    a: {
        markdown: `Hi! I'm so glad you're here.`,
        speaker: 'mirror',
        nextId: 'b',
    },
    b: {
        markdown: `The news is bad, but I know we can handle it together.`,
        speaker: 'mirror',
        nextId: 'c',
    },
    c: {
        markdown: `Jennie got trapped in Bad Ending World. We need to save her.`,
        speaker: 'mirror',
        nextId: 'd',
    },
    d: {
        markdown: `Uh, hi?`,
        speaker: 'you',
        nextId: 'e'
    },
    e: {
        markdown: `Who are you? Where am I? Who's Jennie?`,
        speaker: 'you',
        nextId: 'f'
    },
    f: {
        markdown: `You don't know either? Things are worse than I thought!`,
        speaker: 'mirror',
        nextId: 'g',
    },
    g: {
        markdown: `Still, I know we'll figure it out one way or another.`,
        speaker: 'mirror',
        nextId: 'h',
    },
    h: {
        markdown: `Jennie is seven right now. She crossed through the mirror.`,
        speaker: 'mirror',
        nextId: 'i',
    },
    i: {
        markdown: `The Happy Place is on one side, but the other side is Bad Ending World.`,
        speaker: 'mirror',
        nextId: 'j',
    },
    j: {
        markdown: `Except it's all kind of metaphorical. That's all I know, honestly. I thought *you* would know more!`,
        speaker: 'mirror',
        nextId: 'k',
    },
    k: {
        markdown: `But will you help me?`,
        speaker: 'mirror',
        nextId: 'aa',
    },
    aa: {
        markdown: `Actually, better question!`,
        speaker: 'mirror',
        nextId: 'ab',
    },
    ab: {
        markdown: `Any time you spend here at all helps *me*.`,
        speaker: 'mirror',
        nextId: 'ac',
    },
    ac: {
        markdown: `We both need to explore. But do you want *my* help?`,
        speaker: 'mirror',
        nextId: 'ad',
    },
    ad: {
        markdown: `If yes, I'll send you looking for things,`,
        speaker: 'mirror',
        nextId: 'ae',
    },
    ae: {
        markdown: `and you get to see the good you do.`,
        speaker: 'mirror',
        nextId: 'af',
    },
    af: {
        markdown: `Otherwise you can explore on your own.`,
        speaker: 'mirror',
        nextId: 'ag',
    },
    ag: {
        markdown: `It'll be more like they said January was for you. Mysterious. A lot to see, but not a lot of direction.`,
        speaker: 'mirror',
        nextId: 'ah',
    },
    ah: {
        markdown: `Will you epxlore with me or without?`,
        speaker: 'mirror',
        nextId: 'l',
    },
    l: {
        options: [
            {
                markdown: `With!`,
                nextId: 'y',
            },
            {
                markdown: `Maybe without...`,
                nextId: 'z'
            },
        ]
    },
    m: {
        markdown: `I certainly *hope* so! You never know, though...`,
        speaker: 'mirror',
        nextId: 'r',
    },
    n: {
        markdown: `It's not *just* a game!`,
        speaker: 'mirror',
        nextId: 'o',
    },
    o: {
        markdown: `But freedom can teach you more than anything else!`,
        speaker: 'mirror',
        nextId: 'p',
    },
    p: {
        markdown: `and the more either of us learns, the better —`,
        speaker: 'mirror',
        nextId: `q`,
    },
    q: {
        markdown: `for *all* of us. Including Jennie.`,
        speaker: 'mirror',
        nextId: `s`
    },
    r: {
        markdown: `One thing. You're a human on a computer, right? In *real*, I mean? Here's what they said to say, for that.`,
        speaker: 'mirror',
        nextId: 't',
    },
    s: {
        markdown: `I won't ask again unless you clear your browser data (localStorage in particular).`,
        speaker: 'mirror',
        nextId: 'noGame',
    },
    t: {
        markdown: `Everything you accomplish lives in your browser — in something called localStorage or indexedDB for https://gleameil.github.io.`,
        speaker: 'mirror',
        nextId: 'u',
    },
    u: {
        markdown: `(If you understand any of that any better than I do!) But they say if you delete your browsing data you'll lose your progress.`,
        speaker: 'mirror',
        nextId: 'v',
    },
    v: {
        markdown: `They'll try to make it so you can download it all at some point,`,
        speaker: 'mirror',
        nextId: 'w',
    },
    w: {
        markdown: `but it's not there yet.`,
        speaker: 'mirror',
        nextId: 'x',
    },
    x: {
        markdown: `Anyway, good luck! See you around!`,
        speaker: 'mirror',
        nextId: 'game',
    },
    y: {
        markdown: `Do you think we'll figure out what's going on?`,
        speaker: 'you',
        nextId: 'm',
    },
    z: {
        markdown: `I thought this was supposed to be some kind of art environment. I'm not sure I feel up for a game.`,
        speaker: 'you',
        nextId: 'n'
    }
} as const;

export interface MirrorInteractionCatalog {
    [date: number]: MirrorInteraction;
}

export const FEBRUARY_IN_THE_MIRROR: MirrorInteractionCatalog = {
    0: {
        firstId: 'a',
        interactionSequence: FEBRUARY_OPENING,
        effectIds: ['game', 'noGame']
    },
} as const;

export interface MirrorEffectCatalog {
    [effectId: string]: (comeHome: () => void) => void;
}