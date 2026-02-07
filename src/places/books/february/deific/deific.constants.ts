import { BookColors, FebruaryBook, FebruaryChapter } from "../reader.february.constants";
import { Color, OUT_COLOR_SET } from "../../../../shared/color";
import { AudioCatalog, AudioPath, ImagePathAndAltText, SHARED_IMAGES } from "../../../../shared/constants";


const deificColors: BookColors = {
    white: Color.fromString('rgb(255, 255, 255)'),
    lightWarm: Color.fromString('rgb(255, 255, 0)'),
    lightCool: OUT_COLOR_SET.almostWhite,
    midWarm: Color.fromString('rgb(255, 0, 255)'),
    midCool: OUT_COLOR_SET.lightGray,
    darkWarm: OUT_COLOR_SET.redderGray,
    darkCool: OUT_COLOR_SET.greenerGray,
    black: Color.fromString('rgb(0, 0, 0)'),
}

const DEIFIC_AUDIO: AudioCatalog = {
    foolSongInterlude: {
        path: new URL('../../../assets/audio/foolSongInterlude.mp3', import.meta.url),
        id: 'foolSongInterlude',
        isLoop: true,
    },
    foolSongChorus: {
        path: new URL('../../../assets/audio/foolSongChorus.mp3', import.meta.url),
        id: 'foolSongChorus',
        isLoop: false,
    },
    foolSongV1_2: {
        path: new URL('../../../assets/audio/foolSongV1-2.mp3', import.meta.url),
        id: 'foolSongV1-2',
        isLoop: false,
    },
    foolSongV3_4: {
        path: new URL('../../../assets/audio/foolSongV3-4.mp3', import.meta.url),
        id: 'foolSongV3-4',
        isLoop: false,
    },
    foolSongEnd: {
        path: new URL('../../../assets/audio/foolSongEnd.mp3', import.meta.url),
        id: 'foolSongEnd',
        isLoop: false,
    },
}

const DEIFIC_CHAPTERS: FebruaryChapter[] = [
    [
        {
            markdown: `
            # 🟒
            *I loved a girl as fair, as gay,
            As any morn in merry May.
            In merry May full fair was she,
            But ay! she loved not me.*
            `,
            musicOverride: DEIFIC_AUDIO.foolSongChorus,
        },
        {
            markdown: `
            ## Heavy Love
            I loved a girl blithe as a morn in May.
            I longed for her to see that love divine
            Is less than that I bear her, and less fine,
            But, as one jesting, she would always say,
            "Dear sir, I beg you take your love away.
            Bestow it on some warmer heart than mine,
            And with some sterner spirit let it twine.
            I am to frail to bear its weight. Oh, slay
            Me not!" Time passed, and I could not deny
            She loved me not. For woe, to you I turn
            My suit, O Night, and, gazing long, I scry
            Deep in the dark between the stars' cold burn
            A woman's form more darkly fair, more high,
            Than that gay maid's whose heart I could not earn.
            `
        },
        {
            title: 'Afternoon with the psychic',
            poem: [
                    {
                        markdown: `Make your obstacles a wall,`,
                        speechBubble: {
                            index: 0,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `then knock.`,
                        line: 1,
                        speechBubble: {
                            index: 0,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `that.`,
                        line: 1,
                        speechBubble: {
                            index: 0,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `wall.`,
                        line: 1,
                        speechBubble: {
                            index: 0,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `down.`,
                        line: 1,
                        speechBubble: { 
                            index: 0,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `(The cinder blocks stretch to the moon.)`,
                        speechBubble: {
                            index: 1,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: `Channeling isn't hard, just write`,
                        speechBubble: {
                            index: 2,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `what comes into`,
                        line: 1,
                        speechBubble: {
                            index: 2,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `your head.`,
                        line: 1,
                        speechBubble: {
                            index: 2,
                            arrowLeft: false,
                            arrowRight: true,
                        },
                    },
                    {
                        markdown: `(*Love*`,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: ` 🟊 `,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: `love`,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: ` 🟇 `,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: `**love**`,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: ` 🟔 `,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: `love,`,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        },
                    },
                    {
                        markdown: `**you**,`,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*G*`,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `(odlike) `,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*F*`,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `(airy) `,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*L*`,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `(over),`,
                        line: 1,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `my *most recurring character*,`,
                        line: 2,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `god, goddess — `,
                        line: 3,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `twilight walker,`,
                        line: 3,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `undead king petrifying thieves,`,
                        line: 4,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `telepath or **rainbow**`,
                        line: 5,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `piper, you lure the girls`,
                        line: 5,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*away* —`,
                        line: 5,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `to heaven,`,
                        line: 6,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `though I did,`,
                        line: 6,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `that one time,`,
                        line: 7,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `ask,`,
                        line: 7,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*If he were here?*`,
                        line: 7,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `*Now?*`,
                        line: 8,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `+ my brain said,`,
                        line: 8,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `Those curls hide glowing red eyes.)`,
                        line: 9,
                        speechBubble: {
                            index: 3,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `I sense the archangel Michael over you.`,
                        speechBubble: {
                            index: 4,
                            arrowLeft: false,
                            arrowRight: true,
                        }
                    },
                    {
                        markdown: `(No match for walls. Brain drool`,
                        speechBubble: {
                            index: 5,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
                    {
                        markdown: `dribbles into nothing new.)`,
                        line: 1,
                        speechBubble: {
                            index: 5,
                            arrowLeft: false,
                            arrowRight: false,
                        }
                    },
            ],
        },
        {
            markdown: `
            # 🟆
            I plucked the rose, the daffodil,
            Of all sweet odors drank my fill.
            I wove a crown full fair to see
            So she might then love me.
            
            She took my bright and od'rous crown.
            She danced it up the hills and down.
            In merry May full fair was she,
            But ay! she loved not me.
            `,
            musicOverride: DEIFIC_AUDIO.foolSongV1_2,
        },
        {
            markdown: `
            ## Courting the Night
            They chant supernal peace into night's face —
            peace was never further from my mind.
            For them, night's holy paradox, a trace
            of God, a void. They do not hear the wind.
            The wind, that flying, crying, spying why,
            ruins the roiots. Night holds no consolation, no.
            It echoes, echoes, twists the chanted lie.
            It echoes, echoes, all my railing woe.
            It echoes, echoes, echoes, and I strum
            the strings, I sing. Dead symphhonies arise.
            My voice twines with lost ghosts', and devils hum
            beneath the screech of birds with yellow eyes —
            but no. There is no choir, though I confess
            I'd rather sing with hell than emptiness.
            `
        },
        {
            title: 'Discord dms',
            poem: [
                {
                    markdown: `but many lovers of serious 🟈`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(Tolkien, e.g.)`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `despise silly 🟑`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(Disney, diminutive Victorian fairies)`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `+ I don't always`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `even`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `notice the distinctions`,
                    line: 4,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `perhaps you idiosyncratically call Tolkien sparkles`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `yes`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `probably`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `because what people regard as`,
                    line: 2,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    }
                },
                {
                    markdown: `*real, deep, serious sublime*`,
                    line: 3,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `strikes me as at`,
                    line: 4,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `least as fake as`,
                    line: 5,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `the other thing`,
                    line: 6,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `whereas propononets of it`,
                    line: 7,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `find it to be real`,
                    line: 7,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `while the other thing is fake`,
                    line: 8,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `burn`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `+ I still would have both`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `over reality-as-I-perceive-it`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `any day`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
            ],
        },
        {
            markdown: `
            # 🟊
            *I loved a girl as fair, as gay
            As any morn in merry May.
            In merry May full fair was she,
            But ay! she loved not me.*`,
            musicOverride: DEIFIC_AUDIO.foolSongChorus,
        },
        {
            markdown: `
            ## Sacrifice
            I want to marry him, the only one
            who knows me and would still do anything
            to save me, and whose touch is like the sun,
            the wind, the rain — in one — who bought the ring
            and told true, laughing tales of five years' love
            for me — for me — that evening in the park,
            the one whose seeking mind can fly above
            not only me but clouds, into the dark
            between the spheres — the one for whom I feel
            quite nearly nothing more than quick desire,
            because you ask me, laughing, "Would you kneel
            before that thoughtless fool, give him the fire
            I gave to you? You say he has no peer?
            And you can care for him — when I am here?"
            `,
        },
        {
            title: 'Revolt (1)',
            poem: [
                {
                    markdown: `Workshop rejected you.`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `Sad girl,`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `sick mother`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `jerk father,`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `no friends:`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `the story's core. What`,
                    line: 2,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `do **you** add?`,
                    line: 3,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `Purple prose,`,
                    line: 3,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `fantasy.`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `(🟉)`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `(Why would I bother with that bore +`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `her dysfunctional parents`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `without **you**?)`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
            ],
        },
        {
            title: `Revolt (2)`,
            poem: [
                {
                    markdown: `(Because, tho' I paint you`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `with the *garish gleam* of love,`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `the colors of the real`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `I cannot give`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `without a living model.)`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
            ],
        },
        {
            markdown: `
            # ✪
            I called my jeweler, called my smith,
            and ordered to be wrought forthwith
            A diadem full fair to see
            So she might then love me.
            
            She wore my fair and glist’ring crown
            In the country, in the town.
            In merry May full fair was she,
            But ay! she loved not me.            
            `
        },
        {
            title: `Revolt (3)`,
            poem: [
                {
                    markdown: `I’ll show them.`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `I’ll write`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*unyou*`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*Unyou*`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `is the gray of cinder blocks.`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*Unyou* isn’t`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*Unyou* isn’t complex enough either,`,
                    line: 2,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `but it pretends`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `to be real, +`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `they’ll pretend to like it.`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        }
    ]
]

export const DEIFIC: FebruaryBook = {
    chapters: [],
    palette: deificColors,
    arrowImage: SHARED_IMAGES.arrowLeft,
    music: DEIFIC_AUDIO.foolSongInterlude,
}
