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
        path: new URL('../../../../assets/audio/foolSongInterlude.mp3', import.meta.url),
        id: 'foolSongInterlude',
        isLoop: true,
    },
    foolSongChorus: {
        path: new URL('../../../../assets/audio/foolSongChorus.mp3', import.meta.url),
        id: 'foolSongChorus',
        isLoop: false,
    },
    foolSongV1_2: {
        path: new URL('../../../../assets/audio/foolSongV1-2.mp3', import.meta.url),
        id: 'foolSongV1-2',
        isLoop: false,
    },
    foolSongV3_4: {
        path: new URL('../../../../assets/audio/foolSongV3-4.mp3', import.meta.url),
        id: 'foolSongV3-4',
        isLoop: false,
    },
    foolSongEnd: {
        path: new URL('../../../../assets/audio/foolSongEnd.mp3', import.meta.url),
        id: 'foolSongEnd',
        isLoop: false,
    },
}

const DEIFIC_CHAPTERS: FebruaryChapter[] = [
    [
        {
            markdown: `
# 🟒
*I loved a girl as fair, as gay,*\n
*As any morn in merry May.*\n
*In merry May full fair was she,*\n
*But ay! she loved not me.*`,
            musicOverride: DEIFIC_AUDIO.foolSongChorus,
        },
        {
            markdown: `
## Heavy Love
I loved a girl blithe as a morn in May.\n
I longed for her to see that love divine\n
Is less than that I bear her, and less fine,\n
But, as one jesting, she would always say,\n
"Dear sir, I beg you take your love away.\n
Bestow it on some warmer heart than mine,\n
And with some sterner spirit let it twine.\n
I am to frail to bear its weight. Oh, slay\n
Me not!" Time passed, and I could not deny\n
She loved me not. For woe, to you I turn\n
My suit, O Night, and, gazing long, I scry\n
Deep in the dark between the stars' cold burn\n
A woman's form more darkly fair, more high,\n
Than that gay maid's whose heart I could not earn.`
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
                        markdown: `piper, **you** lure the girls`,
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
                        markdown: `& my brain said,`,
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
            markdown: `# 🟆
I plucked the rose, the daffodil,\n
Of all sweet odors drank my fill.\n
I wove a crown full fair to see\n
So she might then love me.\n
<br>\n
She took my bright and od'rous crown.\n
She danced it up the hills and down.\n
In merry May full fair was she,\n
But ay! she loved not me.`,
            musicOverride: DEIFIC_AUDIO.foolSongV1_2,
        },
        {
            markdown: `## Courting the Night
They chant supernal peace into night's face —\n
peace was never further from my mind.\n
For them, night's holy paradox, a trace\n
of God, a void. They do not hear the wind.\n
The wind, that flying, crying, spying why,\n
ruins the roiots. Night holds no consolation, no.\n
It echoes, echoes, twists the chanted lie.\n
It echoes, echoes, all my railing woe.\n
It echoes, echoes, echoes, and I strum\n
the strings, I sing. Dead symphhonies arise.\n
My voice twines with lost ghosts', and devils hum\n
beneath the screech of birds with yellow eyes —\n
but no. There is no choir, though I confess\n
I'd rather sing with hell than emptiness.`
        },
        {
            title: 'Discord dms',
            poem: [
                {
                    markdown: `but many lovers of serious 🟈`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `(Tolkien, e.g.)`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `despise silly 🟑`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `(Disney, diminutive Victorian fairies)`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `& I don't always`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `even`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `notice the distinctions`,
                    line: 4,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `perhaps you idiosyncratically call Tolkien sparkles`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `yes`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `probably`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `because what people regard as`,
                    line: 2,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    }
                },
                {
                    markdown: `*real, deep, serious sublime*`,
                    line: 3,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `strikes me as at`,
                    line: 4,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `least as fake as`,
                    line: 5,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `the other thing`,
                    line: 6,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `whereas propononets of it`,
                    line: 7,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `find it to be real`,
                    line: 7,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `while the other thing is fake`,
                    line: 8,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `burn`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `& I still would have both`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `over reality-as-I-perceive-it`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ],
        },
        {
            markdown: `# 🟊
*I loved a girl as fair, as gay*\n
*As any morn in merry May.*\n
*In merry May full fair was she,*\n
*But ay! she loved not me.*`,
            musicOverride: DEIFIC_AUDIO.foolSongChorus,
        },
        {
            markdown: `## Sacrifice
I want to marry him, the only one\n
who knows me and would still do anything\n
to save me, and whose touch is like the sun,\n
the wind, the rain — in one — who bought the ring\n
and told true, laughing tales of five years' love\n
for me — for me — that evening in the park,\n
the one whose seeking mind can fly above\n
not only me but clouds, into the dark\n
between the spheres — the one for whom I feel\n
quite nearly nothing more than quick desire,\n
because you ask me, laughing, "Would you kneel\n
before that thoughtless fool, give him the fire\n
I gave to you? You say he has no peer?\n
And you can care for him — when I am here?"`,
        },
        {
            title: 'Revolt (1)',
            poem: [
                {
                    markdown: `Workshop rejected **you**`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `Sad girl,`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `sick mother`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `jerk father,`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `no friends:`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `the story's core. What`,
                    line: 2,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `does **you** add?`,
                    line: 3,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `Purple prose,`,
                    line: 3,
                    speechBubble: {
                        index: 1,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `fantasy.`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(🟉)`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: true,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(Why would I bother with that bore &`,
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
                    markdown: `(Because, tho' I paint **you**`,
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
            markdown: `# ✪
I called my jeweler, called my smith,\n
and ordered to be wrought forthwith\n
A diadem full fair to see\n
So she might then love me.\n
<br>\n
She wore my fair and glist’ring crown\n
In the country, in the town.\n
In merry May full fair was she,\n
But ay! she loved not me.`,
            musicOverride: DEIFIC_AUDIO.foolSongV3_4,
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
                    markdown: `to be real, &`,
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
        },
        {
            title: `Revolt (4)`,
            poem: [
                {
                    markdown: `A mouse,`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `a cigarette butt,`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `a multidimensionally`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `indeterminate`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `linguistic structure,`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `a divorce,`,
                    line: 3,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*are*.`,
                    line: 4,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `✸`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `is`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `mere`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*trammeled*`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `metaphor`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
        {
            title: `Revolt (5)`,
            poem: [
                {
                    markdown: `for what`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `*is*`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `so much better`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `that the comparison`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `is`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `the comparison is laughable`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
        {
            markdown: `# ✰
*I loved a girl as fair, as gay,*\n
*As any morn in merry May.*\n
*In merry May full fair was she,*\n
*But ay! she loved not me.*`,
            musicOverride: DEIFIC_AUDIO.foolSongChorus,

        },
        {
            markdown: `## Destiny
Goatish, I am destined\n
to love you and to lose.\n
To love and to refuse,\n
because your love is not\n
a thing that I can bear.\n
To love, my destiny,\n
and learn it is not love,\n
and it is not you\n
I do not love — that too.\n
<br>\n
Your house is glorious,\n
I’m sure, but I won’t see.\n
The others’ laugh at me.\n
is my seal of doom,\n
because their laugh at me\n
is mine at you. There’s twisting\n
at the root of me\n
that never will come straight.\n
To know me is to hate.`
        },
        {
            title: `Revolt (6)`,
            poem: [
                {
                    markdown: `Grant my readers`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `mice`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ],
        },
        {
            title: `Revolt (7)`,
            poem: [
                {
                    markdown: `& metaphor`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `so tight`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `they will forgive`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `the 🟌`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ],
        },
        {
            markdown: `# ✧
Enough with her, enough with all!\n
I’ll leave my high and handsome hall,\n
To sing and play and act the fool\n
To serve those whom I once did rule.\n
<br>\n
She thought me dead, she thought me gone,\n
She died, she died, and I lived on,\n
And so a happy fool I’ll be\n
While worms with her make free.\n`,
            musicOverride: DEIFIC_AUDIO.foolSongEnd,
        },
        {
            title: `Revolt (8)`,
            poem: [
                {
                    markdown: `& if ✵`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `is not even metaphor,`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `if **you**`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `are my grubby tee-shirted body`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `in the fast & frigid stream`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `or Vaughan Williams’s`,
                    line: 2,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `“Lark Ascending”`,
                    line: 3,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `so much less`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `than **you** are`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `the pressure`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `water`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `exerts`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `on this stretch of limestone`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `to erode shifting patterns`,
                    line: 2,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `no one`,
                    line: 3,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `but **you**`,
                    line: 3,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `will ever see,`,
                    line: 3,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
        {
            title: `Revolt (9)`,
            poem: [
                {
                    markdown: `the ✦’s`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `still moves me`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `to revolt.`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
        {
            title: `Liar`,
            poem: [
                {
                    markdown: `**You** call to me`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `with ✦, &`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `I call it lies.`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(✮ tells us`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `what to eat/fuck`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `& meaningless intricacies`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `because evolution`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `is inefficient?)`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `(Certain`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `secret`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `days`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `it’s too`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `❂ —`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `I can’t stand —)`,
                    line: 2,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: false,
                    },
                },
                {
                    markdown: `I’ll pretend **you** came to me`,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `to show me the wonder within`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `— **you**,`,
                    line: 1,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `not my brain.`,
                    line: 2,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `I’ll just lie,`,
                    line: 2,
                    speechBubble: {
                        index: 3,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `it’s not that I knew it was bullshit,`,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `it’s that I *thought* it was bullshit,`,
                    line: 1,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `& because I could not care`,
                    line: 2,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `about **you**,`,
                    line: 2,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `I could not care at all.`,
                    line: 3,
                    speechBubble: {
                        index: 4,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
        {
            markdown: `## To the Author-God
All voices are your voice. Not even I\n
exist—you wrote my thoughts, a minor move\n
well made. Omnipotent, you need not prove\n
your skill—you play so endless day may fly\n
a little faster. Yes, you’re governed by\n
the rules you set: for logic must approve\n
each play, and nature too, and to remove\n
one bit from your intent’s to fall awry\n
of all—an easy game, and yet less dull\n
than, lonely, contemplating your lone mind.\n
The world’s a poem. If I knew each thought\n
that swam each soul, each fl ower blooming full\n
today, tomorrow gone--in all I’d find\n
the form. The matter we know not.
            `
        },
        {
            title: `Waking Ugly`,
            poem: [
                {
                    markdown: `Wind,`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `sleet.`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `**Your** ✦’s`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `my heat —`,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `I run.`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `**You** do not chase.`,
                    line: 1,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `**You** fly.`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `I do not chase.`,
                    line: 2,
                    speechBubble: {
                        index: 0,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `The sun makes love`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `to dream dolls,`,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `lamplight on sudoku,`,
                    line: 1,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `lilies in the margin,,`,
                    line: 2,
                    speechBubble: {
                        index: 1,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `solutionless.`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `Third`,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `bloom I draw’s.`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `a rose.`,
                    line: 1,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `Prick me red.`,
                    line: 2,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
                {
                    markdown: `Or dead.`,
                    line: 2,
                    speechBubble: {
                        index: 2,
                        arrowLeft: false,
                        arrowRight: true,
                    },
                },
            ]
        },
    ],
]

export const DEIFIC: FebruaryBook = {
    chapters: DEIFIC_CHAPTERS,
    palette: deificColors,
    arrowImage: SHARED_IMAGES.arrowLeft,
    music: DEIFIC_AUDIO.foolSongInterlude,
    imageCatalogToLoad: {},
}
