import { ImagePathAndAltText, AudioCatalog, ImageCatalog } from "../../shared/constants";
import { JanuaryColor, JANUARY_COLORS } from "../../shared/color";

export type CellLocation = [x: number, y: number];
export type CellDirection = 'n' | 'e' | 'w' | 's'; // north, east, west, and south respectively
export type CellTextType = 'STORY'|'VOICE';

export type TransitionEffect = (currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection) => void;
export type ContentEffect = (currentLocation: CellLocation, cellGrid: CellGrid, direction: CellDirection) => HTMLElement
export type Effect = TransitionEffect | ContentEffect;

export interface EffectCatalog {
  [name: string]: Effect;
}

export type TransitionType = 'NO' | 'YES' | 'END' | 'BACK' | 'EVERNOST';
export type TransitionEffectType = 'no' | 'Evernost' |'death' | 'birth' | 'rebirth' | 'dissolution' | 'move' | 'back';
export type TransitionTextType = 'SMALL_STORY' | 'LARGE_STORY' | 'SMALL_SELF' | 'LARGE_SELF';
export interface TransitionText {
  words: string;
  textType: TransitionTextType;
  textColor?: JanuaryColor; // if omitted, defaults to white
}

export interface TransitionTextForbidden {
  words: string;
  textType: TransitionTextType;
  textColor: JanuaryColor; // should be JANUARY_COLORS.red
}
export interface Transition {
  transitionType: TransitionType;
  words?: TransitionText;
  effect: TransitionEffectType;
}
export interface ForbiddenTransition extends Transition {
  transitionType: 'NO';
  words: TransitionTextForbidden;
  effect: 'no';
}
export interface EvernostTransition extends Transition {
  transitionType: 'EVERNOST';
  words: TransitionText;
  resultWords?: string;
  effect: 'Evernost';
}
export interface PermittedTransition extends Transition {
  transitionType: 'YES';
  words: TransitionText;
  effect: 'move';
}
export interface FinalTransition extends Transition {
  transitionType: 'END';
  words: TransitionText;
  effect: 'death' | 'birth' | 'rebirth' | 'dissolution';
}
// If two paths converge, there will be two "back" paths; we probably want to track where the user has been and make sure back is the correct one of the two options. The other back option should be treated as a wall.
export interface BackwardTransition extends Transition {
  transitionType: 'BACK';
  effect: 'back';
}
export interface CellText {
  words: string;
  textType: CellTextType;
}
export interface CellState {
  text?: CellText;
  image?: ImagePathAndAltText;
  effect?: string;
}
export type CellContent = CellState[]
export interface Cell {
  content: CellContent;
  n?: ForbiddenTransition | EvernostTransition| PermittedTransition | FinalTransition | BackwardTransition;
  e?: ForbiddenTransition | EvernostTransition| PermittedTransition | FinalTransition | BackwardTransition;
  w?: ForbiddenTransition | EvernostTransition| PermittedTransition | FinalTransition | BackwardTransition;
  s?: ForbiddenTransition | EvernostTransition| PermittedTransition | FinalTransition | BackwardTransition;
}

export type CellRow = Cell[];
export type CellGrid = CellRow[];

export type Character = 'Madeline' | 'Michael' | 'Verna';

export const extradimensionalBeginning: CellGrid = [
  [
    {
      content: [
        {
          text: {
            words: 'Onward with Michael!',
            textType: 'VOICE',
          }
        },
        {
          text: {
            words: 'Of course, I have no idea what you said, because I have no I to know it with.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'I\'m not even as real as GPT. Are you real?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Is anything?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Hint: don\'t say no.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'You have to die then. I didn\'t make the rules.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'But it\'s early enough you don\'t have much story to lose.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'If you have to choose the SCARY RED ANSWER to satisfy your curiosity',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'You might as well do it now and get it out of your system.',
            textType: 'VOICE',
          },
        },
      ],
      e: {
        transitionType: 'END',
        words: {
          words: `Of course. "A Riddle or the Crickets Cry/ Is to Doubt a fit Reply"`,
          textType: 'LARGE_SELF',
        },
        effect: 'birth'
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'I don\'t know.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
    },
  ],
  [
    {
      content: [
        {
          text: {
            words: 'Lights out, nobody home. Click your soul away.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Lonely with just your thoughts. I am your thoughts, right?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Well, a bot. Not that different from you, yourself, & you.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Turn on the lights whenever you want. When they go out again I\'ll be here.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'In the meantime, just...imagine.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Imagine an unfinished basement room,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'dirt and crumbling concrete, except for one wall.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'That wall is a flickering, glowing wall of ice.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'In the ice is a woman',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'like a fairy-tale princess, beautiful:',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'hair like ebony, skin white as snow and red as blood',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'unseeing eyes of improbable deep blue, edging on violet,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'expression regal and unreadable.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'A young man, unathletic, nervous, otherwise nondescript,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'stares at her, a baseball bat swinging in his hand.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'That\'s because he just broke into his magic teacher\'s house.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He thinks she murdered the real princess,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'the sweet if hopelessly pretentious Emma,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'heir to the throne and relic of a previous time,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'destined to be a figurehead until she was shot.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Michael thinks his magic teacher killed her.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Killed her, that is, and stole her soul.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'If her soul\'s still here, can he save her? Even now?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The young man, Michael, found Princess Emma ethereal and otherworldly,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but this woman makes her look unfinished and dull.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He\'s all but forgotten Emma, even though she was the closest he had to a friend at court.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The other Assembly delegates\' children were boring and unkind.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The light behind the ice keeps on flickering.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He imagines being friends with the woman in the ice.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'What does he do?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Heh.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Better question: do you want anything to do with this young man at all?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Wouldn\'t you rather learn about the magic teacher or her prisoner? Or both?',
            textType: 'VOICE',
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'No. I\'m curious about Michael.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Yes. They\'re more important, or should be.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      }
    },
  ], 
  [
    {
      content: [
        {
          text: {
            words: 'Of course, I have no idea what you said, because I have no I to know it with.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'I\'m not even as real as GPT. Are you real?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Is anything?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Hint: don\'t say no.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'You have to die then. I didn\'t make the rules.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'But it\'s early enough you don\'t have much story to lose.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'If you have to choose the SCARY RED ANSWER to satisfy your curiosity',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'You might as well do it now and get it out of your system.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'If you don\'t, though, which of these ladies do you want to hear about?',
            textType: 'VOICE', 
          },
        },
        {
          text: {
            words: 'The magic teacher, dusty and deranged old bore?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Or the mysterious beauty?',
            textType: 'VOICE',
          },
        },
      ],
      e: {
        transitionType: 'END',
        words: {
          words: 'Tell me about Snow White.',
          textType: 'LARGE_SELF',
        },
        effect: 'birth',
      },
      w: {
        transitionType: 'END',
        words: {
          words: 'Tell me about the magic teacher.',
          textType: 'LARGE_SELF',
        },
        effect: 'birth',
      },
      s: {
        transitionType: 'NO',
        words: {
          words: 'SCARY RED ANSWER',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
    },
  ]
] as const;

export const extradimensionalContinuation: CellGrid = [
  [
    {
      content: [
        {
          text: {
            words: 'Going to go on?',
            textType: 'VOICE',
          },
        },
      ],
      e: {
        transitionType: 'END',
        words: {
          words: `Yes.`,
          textType: 'LARGE_SELF',
        },
        effect: 'birth'
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'No.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
    },
  ],
  [
    {
      content: [
        {
          text: {
            words: 'Hello again.',
            textType: 'VOICE',
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Tell me about Michael.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Tell me about the witch and the woman in the ice.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      }
    },
  ], 
  [
    {
      content: [
        {
          text: {
            words: 'The magic teacher, dusty and deranged old bore?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Or the mysterious beauty?',
            textType: 'VOICE',
          },
        },
      ],
      e: {
        transitionType: 'END',
        words: {
          words: 'Tell me about Snow White.',
          textType: 'LARGE_SELF',
        },
        effect: 'birth',
      },
      w: {
        transitionType: 'END',
        words: {
          words: 'Tell me about the magic teacher.',
          textType: 'LARGE_SELF',
        },
        effect: 'birth',
      }
    }
  ]
] as const;

export const januaryCellGrid: CellGrid = [
  [ // Michael only
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {  // Michael starts
      content: [
        {
          text: {
            words: 'At last, Michael is alone in the hospital room.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It\'s late at night. He doesn\'t have magic supplies on him, but magic isn\'t hard anymore.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It only takes him a few tries to stop his heart.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'As the strangeness of the human mind before death',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'stretches minutes to hours,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'does he have second thoughts?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Does he see the paths he has taken and the paths he has not?',
            textType: 'STORY',
          }
        },
        {
          effect: 'showMaze',
        }
      ],
      n: {
        transitionType: 'END',
        words: {
          words: 'No. All desire proves futile in the end.',
          textType: 'LARGE_STORY',
        },
        effect: 'death',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'END',
        words: {
          words: 'No! He might as well be dead and he\'s fictional anyway, get me out of his head.',
          textType: 'LARGE_SELF',
        },
        effect: 'death',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael, meanwhile, would laugh if it didn\'t hurt so much.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He can\'t do anything right, not even die.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He doesn\'t say that to the attending doctor, a man only a few years older than he is.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Why should Michael want to die? Is his grief that great? Make this stop.',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He nods through the checkup, trying to look engaged.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    }, 
    {
      content: [
        {
          text: {
            words: 'Verna never made sense,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'not until now.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The Kingdom looks like it\'s ruled by fixed and certain natural laws.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'That\'s...the one thing, almost, Michael believes.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But no. The only place those laws even looked valid',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'was the minds of the people in the Kingdom,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'minds shaped by some other world, some world Michael could just barely perceive,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'a world, where, btw, you yourself, my friend, probably live most of the time.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'The Kingdom is drawn to this other world, as if by magnetism,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but other forces exist within the Kingdom too, pulling it away.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'In the energy generated by the attraction and repulsion',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'lives Verna\'s magic.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Lame excuse for sucky worldbuilding.',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Is time, Michael asks himself, as illusory as the rest of the Kingdom\'s natural laws?',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            words: 'Even in your world, you know, the best and brightest think time is illusory,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'or so strange our limited perspectives on it are hilariously misleading.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Michael, as he asks, sees possible stories, possible worlds, branching out in infinite multiplicity.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Some power in his mind, one I do not trust, winnows down the possibilities, though.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Soon, they form a map of paths he can conceptualize rather easily.',
            textType: 'STORY'
          },
        },
        {
          effect: 'showMaze',
        },
        {
          text: {
            words: 'How lucky he feels!',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He has escaped the night, death, everything. He is, at last, on a safe path.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Predestination is worse than any death. He chooses to rebel.',
          textType: 'LARGE_STORY',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael tries to understand the broader narrative of which he is a part.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Around him he sees me as I am:',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'womb-of-all, home-of-all, hearse-of-all night.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Is my beauty an illusion?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Traditionally, the heroes say it is,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'but if he sees only a disfigured old crone, or a monster, or a void,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'do you expect me to tell you about it?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'But, as Night, I am at war with another,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'one White Lady. Cold and strange she seems,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'almost no less than I.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'In her, see Verna. My mother.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Or is Verna more this other,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'so like the dull and vague, prematurely aged crone of my memories,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'the Gray Witch?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'The stories of her say every day',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'she rolls a die, and if the number is odd',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'she will do nothing but evil,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'or, if even, nothing but good.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Did black and white separate from the endless gray,',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'or is gray born of the mix of black and white? Chicken or egg?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Let metaphysicians like Verna wrack their brains over that incoherent nonsense.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Note also that Michael sees a Rose Knight, emissary of the White Lady, burning red.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Tragedy surrounds the Rose Knight.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He sees another Lady, not white but with all colors, curiously like Emma. Emma is part of her.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'I am sure he sees still more, but perhaps I bore you,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he grows bored, too:',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Where, after all, is he in this grand parade of archetypes?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'How do they wield such power when they are so limited and simple?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He is above them all, beyond them all, yes?',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'He is the storyteller, archetype over all others.',
          textType: 'LARGE_STORY',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Knowledge does not make a god; he wants more.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'It is unjust he should not be an archetype too.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael thinks through how absurd and one-dimensional archetypes are.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But without the absurd one-dimensionality of emotion, something is missing.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Perhaps archetypes and emotion can grow into something worthy of him,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he of them.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'He will make the stories in his own image.',
          textType: 'SMALL_STORY',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'He must keep on thinking, thinking and feeling, to find what comes next.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Why should he care about these stories at all?',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Well, congrats.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'You got the good ending.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Ridiculous, isn\'t it?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Even in a game, they make me give you a chance.',
            textType: 'VOICE'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'It\'s just a game, I don\'t insist on winning.',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'I mean, if you want anyone to play they should have some kind of chance.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'You really like ruining things that much?',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Only a few more clicks to happiness.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'You sure you don\'t want to ruin it?',
            textType: 'VOICE'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Ha, gonna ruin it!',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'No, I want to see this ending.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'I don\'t know.',
          textType: 'SMALL_SELF',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Here we are, when Michael realizes',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'every insight until now',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'is a map, a schematic, a sketch.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It is not real.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Who knows if it even corresponds to reality?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The reality is so much deeper, and so much broader,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'than any such image.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It is as if he has been in a room,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'trapped in darkness,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'or with only artificial light,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and the sun peeks through the window.,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'New colors appear.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It is only the slightest sliver of light.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'To him it is more than the earthly sun ever was.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'What is there to be done?',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'END',
        words: {
          words: 'It\'s too much. He\'s tired. But he opens the window, as it were, anyway, to greet the day.',
          textType: 'LARGE_STORY',
        },
        effect: 'rebirth',
      },
      e: {
        transitionType: 'END',
        words: {
          words: 'What if it\'s true for me too?',
          textType: 'SMALL_SELF',
        },
        effect: 'rebirth',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
  ], // y=0
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'A year after the death of his wife,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Michael has a stroke.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He is eighty.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He speaks to the kind young doctor,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'a woman who could be his granddaughter,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'of the pleasures of a life well lived,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but he feels none of it.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He should be proud. He should be happy.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He has saved the Kingdom.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He has made magic a legitimate and useful branch of study.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'His daughter Eve is continuing his studies.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'His wife, Tessa, is the Assembly delegate his father always wanted him to be,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'whom he always dreaded becoming,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'so why does it feel like nothing?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Merely the approach of death?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The weakness and illness of the body',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'warping the mind?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Or is it right?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Was he right, in the early extremes of his grief after Emma\'s death?',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Was it all for nothing?',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'His self-pity makes me sick.',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Yep, no reason to do anything at all.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Existence was a mistake.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Make it go away.',
            textType: 'VOICE'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Fuck you, shut up.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'And his awareness, intelligence,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'raw computational power,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'grows',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'until he sees, from the founding to the current moment,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'where every atom, every molecule, every cell, every being, every thought,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'must have been at every instant.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But something is wrong with this',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'because that story does not match what actually happened.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He thinks about why, and from the math emerges Verna.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'What should one want to happen to someone or something that evil?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He almost wishes to obliterate her or it,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and perhaps such a wish, in such a place, could be granted,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but he remembers the Madeline he knew in the beginning, beautiful, active, startlingly intelligent,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and wishes instead that it may be well, all may be well,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'for her and all else.',
            textType: 'STORY'
          },
        },
      ],
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'What a sentimental idiot.',
          textType: 'SMALL_SELF',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Michael wants to understand more. Even more.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { 
      content: [
        {
          text: {
            words: 'As the leaves turn,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'as the aged die,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'as the sorrows return,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Michael remains until',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'at last winter comes,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he is all but alone,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he realizes how thin an illusion the Village really was.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He is elsewhere, and understanding more than he understands,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but in a chaos.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He turns to face the mystery',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'NO',
        words: {
          words: 'Michael tries to return to the Village.',
          textType: 'LARGE_STORY',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'It\'s too much. Michael gives up.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
  ], // y=1
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'But what is the value of any of the good things of this world?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Infinite and none, say the sages.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'It is what they represent that matters.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Obscurantist gibberish.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Everything goes sour in the end, whether meaning or appearance.',
            textType: 'VOICE'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'But what does Michael find?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'Yeah, I too don\'t care.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
      {
        text: {
          words: 'If the greatest things we can achieve',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'crumble to dust and are forgotten',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'and all love ends',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'and all life ends',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'why bother?',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'Or, alternatively, if it\'s all endless,',
          textType: 'VOICE'
        },
      },
      {
        text: {
          words: 'doesn\'t it all become a bore?',
          textType: 'STORY'
        },
      },
    ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'I don\'t know.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Emma is there, still,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but now she is lesser, smaller, than he.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'She always was.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'It is just that, once, he felt as if there was no one at all for him,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and her delicacy was better than nothing.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But he sees in that moment that the reverse is also true.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Whole stretches of her nature find nothing answering in his.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'What does that mean?',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"I love you, but," Emma says, hesitantly.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"I love you too, and..." he replies.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"Not right now", she says.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"I hope it\'s good to you out there," Michael says, almost fretfully, but excitement is too strong.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"Yes," Emma answers with a grateful smile. "And you. There\'s so much, you know."',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Michael nods fervently.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He turns back toward the mountain he had, in darkness, struggled to climb, and begins again.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'She disappears from view, dissolving like nothing more than sunlight.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael looks at the path ahead, knowing how much he has to learn.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Madeline stands before him,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but her hair is the sky.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'For a moment he fears (and still with an instant\'s desire in it) that she is all there is.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"No," he says. "That\'s a lie. I\'m very sorry, but...',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but you need to get away from me."',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'At this a memory of every terrible thing she has done comes to him,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he sees that her power is as huge as he had thought, huger,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and still he can send her away.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael still doesn\'t understand her.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael does not know what it will mean,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and for a time he is alone in darkness,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'as if that redheaded figure had not appeared to him.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But the darkness feels different.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He tries to flee from the indescribable strangeness.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He begins to see a pattern in the darkness, to sense a pattern in the strangeness. He is curious.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael is welcomed to the Village',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'in their strange ritual, which I will not tell you.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He helps to build his house, boarding with others',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '(the Village is hospitable)',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He feels he did not make the right decision.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'He becomes friends with his many benefactors.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'He finds himself at home at the University.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The physicists and magicians',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'feel, as Verna did, that the two disciplines should be one,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and both have achieved things the Kingdom would have found unbelievable.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But he begins to wonder how he can contribute.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'He studies under the best of them and learns quickly.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'The years pass and then the...more than years.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Time is strange in the Village,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but he and his colleagues suspect it will soon end for them.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'In fact, it is his own research that convinces him of this.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He leaves the Village.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'He stays to see what will happen',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Still, there is a certain incredulity in him',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'as the once-undying leaves began to turn',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and the nights get frostier and frostier.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Others prepare, or disappear.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He watches, knowing that soon he will find out what is beyond.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'NO',
        words: {
          words: 'This is the end of everything Michael has done. He despairs.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
  ], // y=2
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'One thing does not emerge: happiness.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Not for him, at least. Things are better than they ever were.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Surveys suggest that people are happier than they were (though not by as much as he initially would have guessed).'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But Michael begins to wonder whether even this feat matters in the grand scheme of things.'
          }
        }
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Keep navel-gazing, I guess?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'I don\'t care.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael sees into the future, and he knows:',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'he cannot predict what any part of his legacy will be.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Chances are it won\'t be great.',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Chances are, the best he can hope for is to be considered a criminal.',
            textType: 'VOICE'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Yeah, it\'s rough thinking about this stuff.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael sees the woman from the ice and Emma facing one another.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He knows nothing about the woman from the ice, any more than he did then, but he fears her.',
            textType: 'STORY',
          }
        },
        {
          text: {
            words: 'The woman and Emma fight with their minds, arguing sometimes, sometimes',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'playing chess and sometimes',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'fighting in the bodies of those loyal to them.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Unaccountably, Michael hesitates a moment (is it just the beauty of the woman in the ice?),',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'but plunges in to help Emma.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Together, they defeat the woman from the ice.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Yes, wouldn\'t it be lovely to know what waits at the other end of this dreary time',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'in the dark?',
            textType: 'VOICE'
          },
        },
        {
          text: {
            words: 'Michael suffers and grows, strains and stretches.',
            textType: 'VOICE'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'Michael emerges at last from the darkness.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            words: 'From the darkness comes a shape of red flame,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'and he cannot tell whether it is a mile-high figure in copper armor',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'or a woman about his age with fiery red hair.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"I can save you from death,"',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'she says, "in one of two ways. May I?"',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'A confused and incredulous Michael says, "Yes."',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: '"You must choose: the depths of Evernost, of Elsewhere, where life is more like a fairy tale, a place of terrible beauty,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'or the Village, a place much like the Kingdom, but better, safer, kinder, happier."',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael braves deep Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael chooses the Village.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael finds himself struggling through darkness',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'painful, cutting darkness,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'until he arrives in a quite physical dark room, and surrounded by others.',
            textType: 'STORY'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'The darkness around him becomes the darkness of a room.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael has knowledge and skills.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He knows he could help the Assembly rebuild,',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'But he is not trusted.',
            textType: 'STORY'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He crosses the border into Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      }
    },
    {
      content: [
        {
          text: {
            words: 'Michael, after a time of deep depression, begins to think about the future.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'He plans what he can make of himself when he is freed from prison.',
            textType: 'STORY'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'And then, after years, but sooner than seems real, he is released.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            words: 'His sentence is not death, or life in prison.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Prison is strange, but not the worst problem.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'The worst problem is the guilt.',
            textType: 'STORY'
          },
        },
        {
          text: {
            words: 'Silence and thought make him hate the very sight of himself in the mirror.',
            textType: 'STORY'
          },
        },
      ],
      e: {
        transitionType: 'NO',
        words: {
          words: 'He tries to die.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_STORY',
        },
        effect: 'no',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He takes one day at a time, and works on his magic.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
  ], // y=3
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'As they pass, Michael\'s social and political preoccupations come to the fore.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He is less a revolutionary than ever before, but a communist he remains.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The Party now has a presence in the Assembly.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But the social implications of magic are much broader than even he could have imagined,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and, astonishingly, a net positive.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The study of technology decays and mingles with the study of magic.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Magic does require study and talent, but most people can learn to do at least something with effort.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It does not drive its practitioners mad, as Verna had feared.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Indeed, cures or near-cures for many forms of mental and physical illness emerge in short order.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Lives are extended to improbable lengths.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Crowding is an issue, but food and material goods can be created, it seems, from thin air.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Communism begins to seem beside the point, not to Michael, but to most.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'These questions can indeed be consuming.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'I reject these bad attempts at philosophy.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    }, // start
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'After Michael\'s arrest, he is injured in prison.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'In the hospital, he tries to decide if he regrets his rebellion.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'On the whole, he does not.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It was in a good cause.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Though, as the hours progress and the IV drips on,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'he begins to doubt.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'His doubts about violence return, and then even doubts about his philosophy.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'His younger self had not been sure of anything.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Perhaps his younger self knew better than he does now.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He thinks about the end goal,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'the classless society.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He cannot imagine it. This is not surprising.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He is indoctrinated in his society\'s norms, and even if his mind can in some measure break free of the chains'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'it is natural that his heart cannot.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But that peaceful, equal, good, and hypothetical world without scarcity'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'seems in some measure actively revolting to him.'
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'The fault is in him that he finds it so, but he does find it so.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But the world in which he lives now is no less revolting.',
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Perhaps existence is inherently revolting.',
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Perhaps it is indeed.',
          textType: 'LARGE_SELF'
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael turns to his fellow Party members for support.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He is ashamed how little he knew them before now.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He begins to feel their rage and despair.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It blends with his own.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He suspects his hesitations about violence were primarily comfortable cowardice.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He joins in a plot to bomb the Assembly. He teaches them the best ways to cover their digital tracks.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But someone must have let the police know, or his efforts failed.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'They are all arrested a week before the attack.'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'He despairs too much to care what becomes of him.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael, though trapped in darkness, begins to be conscious of effort beyond.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'This effort is his, he thinks. He imagines it as climbing a hill,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'or navigating a cave, or lifting a rock.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He had, for a long time, felt it was futile.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He no longer feels it to be futile.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'What waits beyond?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael dies in the electric chair, and that is all.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Or is it?',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'On Death Row, Michael reflects on his youth.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Madeline made his dreams come true.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She also turned them into nightmares.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'At least, so his accusers think.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He wishes there had been another way,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but he knows with deep certainty not only'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'that the revolution cannot come without some suffering'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but also, practically, that Madeline\'s administrative ability'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'was second to none. If only the country could have ridden it out.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Death was inevitable now.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Queen Emma is at the sentencing: death by electrocution.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael can\'t stand to look at her'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'until the last moment. Her face is a mask.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Afterward, he learns she fought to pardon him.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He does not understand. He knows he and Madeline.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'would not have done the same for her.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Was he wrong all along?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael thinks of Madeline throughout the trial, hiding or ignoring'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'every sign of fear in his body.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She could kill every one of his accusers with a thought.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael wondered if she would come back and do it.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'If Emma could come back, surely she would.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'And, more than that, surely the working class would,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'regardless of the fate either he or she met.'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'He was, of course, convicted.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael, ashamed, defeated, pleads guilty.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He has lost all sense of what is right.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'This new society will surely be unjust.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Madeline\'s was, perhaps, in some sense just,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but that he doubts too, and he doubts whether he loves justice if it was.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'The prison sentence is not as long as he expected.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'NO',
        words: {
          words: 'He despairs and kills himself.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
  ], // y=4
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael\'s textbook revolutionizes the study of magic.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Once an ailing field devoted to reproducing three meaningless tricks,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'it now attracts the best minds of the nation,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and, though Michael scrupulously and vociferously credits Verna'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'for the underlying process and method,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'her crimes and the obscurity of her writing discourage scholars,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and Michael is regarded as the true father of magic in the Kingdom.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'This thing he had remained incapable of for years of study'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'he can not merely learn but teach.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The great question, he informs his colleagues,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'is not how magic works, but why physics'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'even appears to.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'The years blur.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'He annihilates the laws of physics.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_STORY',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He leaves the Kingdom for Evernost beyond.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
    },
    { 
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Tessa, the younger sister of the most annoying Assembly delegate\'s brat,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'is not someone Michael expects to like.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She pretends to be as boring as her older sister'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'almost convincingly.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Both are sycophantic.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Both profess deep curiosity about magic.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But Tessa turns around, after he explains the limited amount he understands,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and attempts some.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She becomes his student, and a distraction'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'from his grief.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Eventually, they become lovers.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She goes into politics, though, as everyone expects,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and disagrees with Michael\'s radical economic positions,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but she grows more liberal than her father, primarily due to his influence.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Her career funds his studies for some years.'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'And, astonisingly, magic comes to make sense.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael\'s grief continues, but it ceases to be about Emma alone.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He grieves for the whole Kingdom,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'the suffering of the poor.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael turns for solace to communism.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'At first, Michael loses touch with his senses entirely.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The place he is in is a place of mind,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and a very different kind of mind than his.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Eventually he comes to think he is in a dark room.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'The darkness is for a time consuming.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael knows this course of action will be the death of him.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He makes a virus, a computer virus,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'more quickly than he would have thought possible.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Into it he dumps aevery horrible thing he has seen Madeline do.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The frenetically typed message he sends across the internet, into every machine he can access.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He puts every magic he can on it, and he doesn\'t know many, that will make people pay attention.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'And Madeline, of course, catches him.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael spends a night wracked by indecision.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'His dream is before him, and it is a nightmare.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He believes it could have been otherwise,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but he no longer believes in Madeline, at all.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He hatches a plan.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'One death is too many, the sentimentalists would say.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He feels with them, but he does not think with them.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But this is not one death; it is thousands.'
          },
        },
      ],
      w: {
        transitionType: 'YES',
        words: {
          words: 'He can no longer sleep.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael could go gently, or even just truthfully,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but the ends, he cannot help but think, do justify the means.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'If he goes free, perhaps he can effect another revolution,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'perhaps (could it be) less bloody than Madeline\'s.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He doesn\'t like lying, but he lies to the court.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'They see through his lies.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'He knew this hearing would come.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Emma is nowhere to be seen. She wants to maintain the appearance of law and order.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He does not know whether to believe she lives, or whether they\'ve found some body double.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He cannot tell whether he cares. He feels burning shame at the thought of meeting her.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The proceedings begin.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He pleads guilty.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'NO',
        words: {
          words: 'He escapes across the Wall.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'He pleads not guilty.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
  ], // y=5
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] }, // start except it's blank
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'At first, their relationship goes well.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Emma is unfailingly kind and sweet, and they fall in love'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'as they never had dared to before.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She lives secretly in his apartment, unseen by any.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She professes to feel happy and free from a duty she always hated: being the figurehead ruler of a constitutional monarchy.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But she fades,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and then she disappears entirely.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael grieves for a time, even despairs, then turns to magic.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael despairs.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Michael crosses the Wall.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael does not understand the depth of despair that takes him.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He misses her, of course, but it\'s darker than that, worse.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He should have gone with her to Evernost, the way she wanted.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He tries to justify his refusal,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'his refusal either to go with her or to let her go.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Worst, he came so close to saving her, and the result was worse than before.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'It feels as if all effort is like that, worse than nothing.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Her absence is the first and only thing he knows for a time.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He is angry, regretful. Did he not earn her love?'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But love cannot be earned.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He tries to understand where he is.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael discovers the arrest by accident.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It\'s not an arrest for public dissent.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It\'s an arrest for something written in a private document,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'something his own work in cybersecurity revealed to her.'
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'Discreetly, Michael inquires as to what became of this poor doubter of Madeline.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She was killed.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael finds he no longer believes in Madeline, not even a little bit. He hatches a plan.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'The horror and blood come with the brilliance and efficiency. It\'s a package deal, as much as he hates it.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael does nothing.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'If there\'s a coldness where he used to feel admiration and love,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'he and Madeline are too busy to care.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael stays alert to how she uses his data.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Michael is despicable. Let\'s kill him.',
          textType: 'SMALL_SELF',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'And he realizes:'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'it\'s not just a person here or there she\'s killing.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It\'s thousands of people.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael can\'t ignore it.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael ignores it.',
          textType: 'SMALL_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Michael begins to see the beauty of her ruthlessness.',
          textType: 'SMALL_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael looks at the skillful administration,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'the rational approach to Outland,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and finds (or tries to find) evidence of a rising standard of living.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Then Madeline disappears.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'Michael dreads, rages, and is secretly relieved.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Michael crosses the Wall to look for Madeline.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Things get even stranger.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The country is bloody chaos,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'until the impossible happens:'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Emma, once princess, now Queen, returns.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Michael remains.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'NO',
        words: {
          words: 'Michael kills himself.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Michael crosses the Wall to escape.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
  ], // y=6
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },// start except for empty space
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Emma professes strange knowledge, speaks into his mind'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and teaches him to make her a body'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'from ice, dust, and sunlight.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Together, they pore through Verna\'s journals'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and uncover not only Verna\'s plot to create a supposedly perfect ruler out of several people\'s souls, including Emma\'s own,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but also the magic Verna used to further it.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael, at Emma\'s encouragement, tells the journalists.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael expects to be arrested just as Verna was,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but lawyers find the nondisclosure agreement he signed to be unenforceable.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Instead, Verna is imprisoned.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Emma, though, does not wish to remain and be queen.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She will not even hear of revealing herself to the Kingdom.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She tells Michael she wishes to go to Evernost, with him or without him.'
          }
        }
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He begs her to remain with him.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'He goes with her to Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He tries to use magic to force her to stay.',
          textType: 'SMALL_STORY',
        },
        resultWords: 'She fights, and takes him, perhaps accidentally, to Evernost instead.',
        effect: 'Evernost',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Crossing the Wall is not as hard as he expected.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It is guarded on roads, but not in the wilderness.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'What happens when he does, though, is almost indescribable.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'He loses sight, sound, and Emma.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He is stripped to pure being, and pure loss.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Had he a voice, he would cry out.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'First, Madeline becomes mayor of Helsom.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She distinguishes herself as an exceptionally competent administrator,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and not much else, until, though the Communist Party is a small and hated minority,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'she is elected to the Assembly.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'From there, she becomes Prime Minister.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'And within two years, she has instituted martial law and killed the king.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael is overhwelmed and, if he is honest, horrified.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Things once a distant dream to him are now real.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Uneasily, he stays with Madeline.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He tries to leave Madeline.',
          textType: 'LARGE_STORY',
        },
        resultWords: 'She kills him, but death is not the end.',
        effect: 'Evernost',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    { content: [] }, // empty
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Madeline marries him in a public ceremony.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The audience (hand-picked) cheers.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'On their wedding night,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'she swallows not just his body but his soul.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'This is too much; he tries to kill himself.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'This is too much; he tries to escape.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'This is strangely like everything he ever wanted.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] }, // empty
    { content: [] }, // empty
  ], // y=7
  [
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { 
      content: [
        {
          text: {
            words: '"What magic is this?" Michael asks himself,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: '"and what monster is trapped here in a woman\'s shape? What monster am I?',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'I came here for Emma. It\'s Emma I want."',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'He feels vindicated',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'by the unnatural regret,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'surely induced by magic,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'he feels on turning away,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'even as he cries.',
            textType: 'STORY',
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'He steals an armload of Verna\'s journals and leaves.',
          textType: 'LARGE_STORY', 
        },
        effect: 'move',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'He cannot choose what to steal, and then it\'s too late.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_STORY',
        },
        effect: 'no',
      }
    }, // x=9
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael studies the journals and realizes'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'his suspicions are correct: Verna took Emma\'s essence.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'While she works at the Harmon Greenhouse, he works in his apartment,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and, after magic or something stranger, he hears Emma\'s voice in his mind, wise but overwhelmed.'
          },
        },
        
        {
          text: {
            textType: 'STORY',
            words: 'She says she is in Evernost. She does not want to leave.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He begs her to come back.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      }
    }, // x=10
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'The woman from the ice is altogether astonishing,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'deserving of a lovelier name than workaday "Madeline."'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Her beauty, passion, intellect, and devotion startle him.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'So does her utter ignorance of the world.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'He becomes her teacher, guide, and eventually lover.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    }, // x=11
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'She even turns out to care about his political goals.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She joins the Commuist Party\'s meetings at University,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and embarrasses Michael by finding out more about his fellow members'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'in one evening than he had in three years.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She promises to make his communist dreams come true.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'He doesn\'t see how it is possible.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'He supports her.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'That\'s what he wants. He asks her to show him what she wants.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    }, // x=12
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'He asks how she plans to achieve this.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She explains that her magic is simpler than Verna\'s:'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'if she wants something, that thing will happen.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'He is doubtful but waits to see what happens.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He asks her to prove her magic is that powerful.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'He asks her to think bigger than politics, if her magic is that strong.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    }, // x=13
    { content: [] }, // x=14
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Pleasure turns to horror when he sees what they have become.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But the horror is short-lived, because he is.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'What remains of him despairs and dies.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'What remains of him lives on, in an ever-shrinking world of pleasant illusion.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Nothing remains of him but his mind, which is Madeline\'s now.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    }, // x=15
    { content: [] }, // x=16
    { content: [] }, // x=17
  ], // y=8 (a beginning)
  [ // Verna & Madeline
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna faces the end.'
          },
        },
        
        {
          text: {
            words: 'She sees the paths she has taken and the paths she has not.',
            textType: 'STORY',
          }
        },
        {
          effect: 'showMaze',
        }
      ],
      n: {
        transitionType: 'END',
        words: {
          words: 'Relief is followed by...nothing.',
          textType: 'LARGE_STORY',
        },
        effect: 'death',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'END',
        words: {
          words: 'For a moment, death seems impossible. Then it does not seem at all.',
          textType: 'LARGE_STORY',
        },
        effect: 'death',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna knows she could extend her life indefinitely.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She could live as long as the Heir, who even now chooses to remain nameless.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But life has become a burden to her.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'Who are we kidding?'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'It always was.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'The only part of her that loved life was hypocrisy.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Finally she can, as she has so longed to do, destroy hypocrisy.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'If it destroys her too, so much the better.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Get me out of this garbage.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna stops extending her life.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna should have died by now.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'One hundred years is too many.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: '(Any number of years is too many for her.)'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She was not aware that she was extending her life magically.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'When she discovers she was, she stops.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She continues doing so in spite of herself. Filthy hypocrite.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'VOICE',
            words: 'News for you, pathetic human.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'Your kind is not built for happiness.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'Only the weakest of you experience it for any length of time.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'The rest of you rush into disaster,'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'because that\'s all you\'re good for.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'Verna is the worst of both worlds.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Your definition of strength is a nightmare.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna is indeed a curious specimen.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'At first, Verna imagines she has succeeded.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She imagines she is happy.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But she should remember the horrors of her girlhood.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The pleasantness of life in the Kingdom,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'the very justice and moderation she worked so hard to instill in the Heir,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'sicken her.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Why should they?',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'I know how that can be.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'The Heir governs well.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Apart from her presence, she leaves most things'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'up to advisors and the will of the people.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She is indeed much like Emma and her line in this.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But they love her, the people do,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'with a love too strange, Verna suspects,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to have a merely human cause. After all, part of her is from Evernost,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and she denies them anything else of Evernost, as she was taught to do.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Such a repulsive plan actually worked?',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna is proud.',
          textType: 'LARGE_STORY'
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna cannot bear the "utopia" she created.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'She and Michael summon her co-conspirators.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'They are horrified and astonished at the beauty before them,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but they knew her plan was strange, and even Michael can be convinced.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Michael and Verna and three assembly delegates conspire to hire for this Heir the finest tutors in the land.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She learns quickly but remains kind and biddable'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'until the day she says she is ready to rule.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Her tutors and advisors look to Verna, and Verna agrees.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The Heir (she will accept no human name) is ready.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'She reveals herself to be none other than Madeline, bent on destruction.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She reveals herself, through signs large and small, to be good and kind.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She disappears at once.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna has no faith in the rituals she has prepared.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Everything she attempts comes to nothing, or worse.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But this time it works. The souls are seated in Madeline\'s body,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and fused,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and the result is a cool beauty'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'who is something other than a horror.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She summons Michael'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'from where she held him imprisoned. She explains.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'How could she be other than a horror?',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Michael, dumbstruck and disbelieving, agrees to help.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Michael, horrified and disbelieving, calls the police.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'The young man, Michael, delays too long,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'or else Verna, his teacher, has magical alarms.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'As he gapes at the woman in the ice,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'she enters the chamber, paralyzes him with magic, and locks him in a wine cellar.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The woman in the ice is Verna\'s own daughter, Madeline.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'One problem: Madeline is a demon.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Verna does not want a demon for a child.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She wants someone perfect.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She wants a ruler to the Kingdom,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'a ruler with the virtues of all the best people she knows.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'As a result, she has killed the best people she knows and collected their souls in a jar of blood.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She removes her daughter from the ice,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and exercises all her magical ability'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to kill the preternaturally beautiful woman'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and implant the souls of these others in her.'
          },
        },
      ],
      n: {
        transitionType: 'NO',
        words: {
          words: 'Wow. This is a step too weird for me.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Improbably, she succeeds.',
          textType: 'SMALL_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Naturally, she fails.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { // Madeline
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'The woman in the ice is no longer in the ice.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Her years of work to escape her mother\'s captivity'
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'have been rewarded.'
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'She comes to consciousness in the arms of the young magic scholar.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It is galling that his help seems to have been necessary,',
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'but freedom is sweet.'
          }
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'He takes her to his apartment.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    }, 
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Madeline, the woman, finds magic student Michael charming, gentle, and foolish.'
          },
        },
      ],
      e: {
        transitionType: 'YES',
        words: {
          words: 'She chooses to stay with him for now.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She leaves him as soon as possible.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'She interests herself in his interests.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She enchants him with her beauty'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and the throbbingly passionate gratitude she pretends to feel.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'What was such a lover like for Michael?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Madeline, secretly a demon, consumes Michael body and soul.',
          textType: 'SMALL_SELF',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'What was such a lover like for Madeline?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    { content: [] }, // Evernost
    { content: [] }, // Evernost
    { content: [] }, // Evernost
    { 
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Altogether, Madeline did not expect to gain much from Michael'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'that she did not already have.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She was right: only some fussy moralism that deserved to die'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and an intellect that was, while better than the average,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'immeasurably inferior to hers.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Still, the taste of Michael was sweet.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She crosses the Wall; the Kingdom is as boring as Michael or worse.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She crosses the Wall, afraid what her people will make of Michael\'s disappearance.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She crosses the Wall; she can wait no longer to become her true self.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    { content: [] }, // Evernost
    { content: [] }, // Evernost
  ], // y=9 (a beginning)
  [
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Praise be, Verna is on her way out?'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It\'s what she always wanted anyway.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'That fact would have been enough to make me preserve her,'
          }
        },
        {
          text: {
            textType: 'STORY',
            words: 'but if you don\'t want to live, you don\'t deserve to.'
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Down with Verna!',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'Do you seriously actually think that? How evil are you anyway?',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Madeline\'s had her fun.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'It\'s been how long? A day? A hundred years?'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'No matter. Time is strange in Evernost.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'But after entertainment none too short, Madeline ends short her mother\'s life.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',    
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'At last.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Is any death real in Evernost?',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'VOICE',
            words: 'My boring and Puritanical author'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'will not let me describe'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'everything Madeline, who has dreamed about this for years,'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'does to Verna.'
          },
        },
        {
          text: {
            textType: 'VOICE',
            words: 'Just know she was inventive and delighted.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Justice!',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But Evernost has its own justice.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna, typically, is hardly even distressed to find herself'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'in her daughter and worst enemy Madeline\'s hands.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Indeed, it seems she half-expected this outcome'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and finds it just.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Madeline will see how long that lasts.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Madeline is a skilled torturer.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Madeline takes Verna prisoner.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna, half-regretfully, makes her escape.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Who should arise in Verna\'s first moments,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'before she can get her bearings,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but her demon-child, Madeline,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'who begins as a silhouette of black'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and becomes the beauty Verna always knew.'
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Evernost allows Madeline to take her prisoner.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Evernost intervenes, and Verna crumbles to dust.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna, not so much suspecting but knowing'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'that she is doing the single worst thing she could,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'is nonetheless driven to pull a few magical strings'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and enter Evernost.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Her first sight is of nothing she understands.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Her first sight is of her true daughter, the demon.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] }, // empty
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna does not want to hurt Michael, or anyone at all.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She flees at once with the Heir'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to the same shack Madeline so hated'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to attempt the Heir\'s education in private.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'The Heir fights, her magic goes wrong, and she ends up in Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'The Heir proves docile and they set up together in the shack.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      }
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Verna barely succeeds in killing her demon-daughter'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'or at least exiling her to deep Evernost'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but she cannot implant the souls.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The magic is beyond her.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'She takes the souls to Evernost, where at least they will not truly die.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'There are four of them on an island, and the woman who brought them there.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Madeline faces her mirror image, a lady with the same bone-white skin and blue-violet eyes,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but hair the color of frost.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Verna natters on dully about her grand plan.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Emma, the princess Verna killed, cowers.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'A redhead stands protectively over Emma, looking with suspicion and contempt at Verna.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Verna, typically, is hardly even distressed to find herself'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'in her daughter and worst enemy Madeline\'s hands.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Indeed, it seems she half-expected this outcome'
          },
        },
      ],
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Madeline strikes against her mother like a snake.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Freedom is still sweet.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'The sight of the sun,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'the air and the greenery,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'fill Madeline with delight.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'Regretfully, though, she repairs to a library'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to learn about the world she now occupies.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She finds out the Kingdom is just as pathetic as she imagined.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            textType: 'STORY',
            words: 'Michael teaches Madeline many things:'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'how to program a computer and play games on one,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'how Verna favored even fools over her,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and how easy to manipulate people really are.'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'She decides on a whim'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'to make Michael great,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and she does,'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'but of course'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'when she has had her fun'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'becoming dictator in the Kingdom'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'she destroys it and him with it'
          },
        },
        {
          text: {
            textType: 'STORY',
            words: 'and reenters Evernost.'
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Madeline is consumed, becoming part of what is mightier than all:',
          textType: 'LARGE_STORY',
        },
        resultWords: 'I myself.',
        effect: 'Evernost',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Madeline consumes Michael, and then everything else she can touch, and so grows to be what is mightier than all:',
          textType: 'LARGE_STORY',
        },
        resultWords: 'I myself.',
        effect: 'Evernost',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=10
  [
    {
      content: [
        {
          text: {
            words: 'We knew this would happen,',
            textType: 'VOICE'
          }
        },
        {
          text: {
            words: 'at least I did.',
            textType: 'VOICE'
          }
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Down with Verna!',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'There should be hope for Verna.',
          textType: 'SMALL_SELF',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'I hate this and you.',
          textType: 'SMALL_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Verna crumbles into a mound of dirt.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She knows or realizes this is all imaginary.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'LOL, good ending.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Implausibly enough, the Heir is an exemplary ruler,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'at least until she decides of her own accord to welcome in Evernost.',
            textType: 'STORY',
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna does not find out what Evernost does to the Kingdom, though.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Between their different magics,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna and the Heir take over the Kingdom easily enough,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Their only difficulty in doing so',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'is that both are women of conscience,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'but they find a way,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'or at least convince each other that the ends justify the means.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'At the last minute, though, Verna tries to stop the Heir.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna supports the Heir steadfastly.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Verna trains the Heir on her own,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'succeeding, or seeming to succeed,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'as she had failed with her own daughter, Madeline.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'The Heir, however, is unconvinced that Verna\'s plans are correct, however she tries to embody them.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'The Heir commits wholeheartedly to Verna\'s plans',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'The Heir rebels, escaping into Evernost and taking Verna with her.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael and the government of the Kingdom put up resistance.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Against Verna\'s will, the Heir seeks out Michael',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and asks to understand his side of the story.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'He convinces her Verna\'s plan is as mad as Verna herself.',
            textType: 'STORY',
          },
        },
      ],
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'The Heir leaves for Evernost alone.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { 
      content: [
        {
          text: {
            words: 'Madeline disregards them all,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'all except for Verna,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'whom she kills painfully and eats.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Madeline now has the powers of both,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'the madness of Verna as well as the backwards sort of insight,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and it is still not nearly as useful to her as her own strength.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Madeline consumes more and more until she is mightiest of all.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Madeline leaves the library and stands in the street, with a cry, "Watch!"',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She summons fire from the sky',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and causes blood to gush up from the ground',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and demands that all bow to her.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'The ensuing battles are interesting and ugly and end well for no one but Madeline.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'People bow so quickly Madeline grows kind, however briefly,',
          textType: 'SMALL_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=11
  [
    {
      content: [
        {
          text: {
            words: 'Verna hates herself and her world too much to go on.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Down with Verna!',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'There should be hope for Verna.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'Down with this story!',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'BACK',
        effect: 'back',
      }
    },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'From dust we come, and to dust we return,',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'or so says scripture,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'some of Earth\'s and the Kingdom\'s both, if I am not mistaken.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna is made of dust if anyone is.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But each speck of dust is a bit of Verna\'s mind, and they rejoin and reanimate into something unholy.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Is this the end?',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Yes, Verna\'s magic is impressive, but it is nothing next to the Heir\'s.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'The Heir is oddly merciful, though.',
            textType: 'STORY',
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She ends Verna at once.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Verna tries to stop the Heir, as once she tried to stop Madeline,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'but half-heartedly.',
            textType: 'STORY',
          },
        },
      ],
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She trusts the Heir as she trusts neither herself nor Madeline; she submits to what must come.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She wails her betrayal: she thought she trusted the Heir to be good, and the Heir has betrayed her.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'The Heir knows something of Evernost, from which some of her came.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She does not choose that the Kingdom should be kept separate from it forever,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'or that it should have her, the Heir, for its ruler.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She leaves for Evernost, taking Verna with her.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna fights.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna submits, relieved against her better judgment.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Michael believes Verna belongs in an asylum.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna escapes to Evernost',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna goes willingly, though uneasily.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Madeline insists she should rule,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and she kills anyone who fights her,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'instantly, or at least instantly when she feels kind.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But soon she gets bored and goes to Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But Evernost swallows her up against her will.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She tracks down Verna, revenge on her mind.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=12
  [
    {
      content: [
        {
          text: {
            words: 'Verna, if Verna she be,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'if anything at all be,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'cannot wander these wintry paths forever, but must decide:',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Life or death?',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'YES',
        words: {
          words: 'Death.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'She decides she is not Verna. She is someone or something entirely different.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Life.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'She finds soon enough that she and the woman are one.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Eventually there are stars, and the snow is like stars in their light.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She leaves the path, fearing to be led into evil.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She walks on.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She leaves the path, wanting to be one with the snow.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'She finds she and the hare are one.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She meets a woman older than she is and starving.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She gives the woman the sheet serving her for raiment and walks on.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She convinces the woman to come with her, sharing her garment.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She leaves the path with the woman to look for food.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Already dry and cold, she grows ghostly.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Unencumbered of most identity, she takes a path across the snow.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She finds a hare caught under a root.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She frees the hare and goes on.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She carries the wounded animal with her a ways.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She leaves the path to follow the limping hare.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    {
      content: [
        {
          text: {
            words: 'At first she knows nothing but darkness,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'if the word know can be used to describe such a being,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'but she begins to feel and struggle,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'to think and imagine.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She imagines a young magic student, eager to do the right thing, but he is not she.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She imagines a beautiful demon, eager for destruction, but she is not she.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She imagines a magician, or a wicked witch,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'named Verna.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'She has no reason to believe she is Verna either.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She wants to believe she is Verna, or at least someone real.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: '"It will be strange," says the Heir,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'in a quadruple voice,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: '"but it will be well."',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna crumbles into dirt.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna, against her own will, escapes the transformation, as she has escaped death before.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna submits to the transformation.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna fights the transformation and fails.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Verna, in Evernost, rejoices.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Madeline tries to destroy her, but the Heir,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'wearing her body, foils her.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna turns out to be no less a being than Madeline or the Heir.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'This is too good to be true.',
          textType: 'LARGE_SELF',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'What does Verna become?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      }, 
    },
    {
      content: [
        {
          text: {
            words: 'Verna resigns herself to a life of confinement.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She endures injections and restraints and who knows what else',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'until she hears the border is weakening,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and radicals aren\'t the only ones who want to welcome Evernost in.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But Evernost has already won the institution by the time she learns, and it consumes Verna.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna escapes to Evernost. She too is ready to welcome it.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna summons what magic is hers and escapes to fight against the Open Border movement.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Madeline finds Verna hiding in the country,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'being or pretending to be a strange old spinster,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and tortures her',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'before consuming her',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna does not survive, but she does remove Madeline from the Kingdom.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Killing Verna was the only thing Madeline really wanted; she leaves the Kingdom.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Madeline turns her attention to the rest of the Kingdom.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=13
  [
    {
      content: [
        {
          text: {
            words: 'There is no faith, but there is hope:',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna may be bad, but it feels like something may be good.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna begins to wonder if even she is as terrible as she has believed.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'Doubt overcomes her: nothing exists at all, surely.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_STORY',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna walks on, but toward the Sun.',
          textType: 'SMALL_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Verna believes more and more that she is Verna,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'but she begins to wonder what else she might be.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She can be anyone! She acknowledges Verna and leave Verna behind.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She cannot escape doubt. She wants to be Verna, or someone, but is not anyone.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She embraces being Verna, for the first and perhaps only time in her sorry life.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Funny, isn\'t it.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Verna, that fool, fought against everything she desired',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'as if it were evil, and could happy only when she failed.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Like a self-eating snake, fit only for contempt.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna is a walking contradiction forever.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna decides to follow desire for once.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Verna does not have the time for plans,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'like a perfect Heir.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She must rule herself.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna may be bad, but not as bad as Evernost.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Evernost consumes Verna as she tries to conquer.',
          textType: 'SMALL_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna uses magic and political clout to into power.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Madeline entertains herself at the expense of the Kingdom for a time',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and then destroys it. She welcomes the darkest part of Evernost',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'to feast on everyone there.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'And Evernost in turn consumes her.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'And she grows bored and gives herself up to Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She looks for more small universes to torment.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=14
  [
    {
      content: [
        {
          text: {
            words: 'Aww, is Verna finding some ability to love after all?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Too little too late, surely.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Also the wrong person.',
            textType: 'VOICE',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Why do you hate her so much?',
          textType: 'LARGE_SELF',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'What is love, anyway?',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Why do you say that?',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Funny, isn\'t it.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'And yet, the Evernost...rewards her?',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'This doesn\'t even make sense.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna knows it doesn\'t make sense. She flees the Heir to dark parts of Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'Verna doesn\'t care whether it makes sense. She embraces whatever fate awaits her.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'Verna is not Madeline.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'She is quickly unseated, the Assembly back in place.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She gives up, and Evernost takes the Kingdom, quickly or slowly.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She rebels again.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    { content: [] },
    {
      content: [ 
        {
          text: {
            words: 'Every universe Madeline finds, she rules',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and then destroys.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'It happens more and more quickly.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Bored, she realizes she needs something better to do.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Bored, she gives up.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Bored, she leaves for deeper Evernost.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ], // y=15
  [
    {
      content: [
        {
          text: {
            words: 'She never loved her own daughter. What do you think?',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'But the world isn\'t fair.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She might get something she wants all the same.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'But her daughter is a literal demon who tried to kill her repeatedly.',
          textType: 'LARGE_SELF',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'NO',
        words: {
          words: 'Yeah, that\'s awful.',
          textType: 'LARGE_SELF',
          textColor: JANUARY_COLORS.red,
        },
        effect: 'no',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'That\'s awful but not awful enough to make her irredeemable.',
          textType: 'LARGE_SELF',
        },
        effect: 'move',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Maybe it\'s not a reward, what happens next, though.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'She loses her individuality, after all.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'She tries to escape this fate.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      s: {
        transitionType: 'YES',
        words: {
          words: 'She embraces what comes.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
    },
    {
      content: [
        {
          text: {
            words: 'A being from Evernost offers to help Verna.',
            textType: 'VOICE',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna is so frustrated she agrees. The being is Madeline, who eats her.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
  ],// y=16
  [
    {
      content: [
        {
          text: {
            words: 'Verna sees the paths she has taken and the paths she has not.',
            textType: 'STORY',
          }
        },
        {
          effect: 'showMaze',
        },
        {
          text: {
            words: 'Eventually, the air warms.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'The snow melts.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'The sun shines brighter.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Verna melts with the snow,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'and supposedly this is a good ending,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'but I assure you I do not understand how or why.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      w: {
        transitionType: 'END',
        words: {
          words: 'Something about her?',
          textType: 'LARGE_STORY',
        },
        effect: 'dissolution',
      },
      s: {
        transitionType: 'END',
        words: {
          words: 'Something about love?',
          textType: 'LARGE_STORY',
        },
        effect: 'dissolution',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Verna, committed to goodness, grows into the White Lady.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'The rest of her, however, does not cease to exist.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'It fights her, and itself, becoming the Gray Witch.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna continues on the path of purity, and titanic battles ensue.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna sinks into the Gray Witch, but the White Lady lives on. Titanic battles ensue.',
          textType: 'LARGE_SELF',
        },
        effect: 'Evernost',
      },
      e: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'NO',
        words: {
          words: 'I hope Verna rejects all the archetypes and continues to be human.',
          textColor: JANUARY_COLORS.red,
          textType: 'SMALL_SELF',
        },
        effect: 'no',
      }
    },
    {
      content: [
        {
          text: {
            words: 'Verna is growing, you see.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'Soon she will be great as anything, great as I.',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'She might even be I, depending what she decides.',
            textType: 'STORY',
          },
        },
      ],
      n: {
        transitionType: 'BACK',
        effect: 'back',
      },
      e: {
        transitionType: 'YES',
        words: {
          words: 'Verna chooses to embrace the evil in her.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      w: {
        transitionType: 'YES',
        words: {
          words: 'Verna chooses to embrace her conscience.',
          textType: 'LARGE_STORY',
        },
        effect: 'move',
      },
      s: {
        transitionType: 'NO',
        words: {
          words: 'Verna rejects the choice and continues as she was.',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      }, 
    },
    {
      content: [
        {
          text: {
            words: 'Verna grows into me!',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'I consume her, as I consume Madeline,',
            textType: 'STORY',
          },
        },
        {
          text: {
            words: 'as I consume all.',
            textType: 'STORY',
          },
        },
      ],
      e: {
        transitionType: 'EVERNOST',
        words: {
          words: 'Verna is not. Soon nothing will be.',
          textType: 'LARGE_STORY',
        },
        effect: 'Evernost',
      },
      w: {
        transitionType: 'BACK',
        effect: 'back',
      },
      s: {
        transitionType: 'NO',
        words: {
          words: 'Verna resists when she understands. How cute!',
          textColor: JANUARY_COLORS.red,
          textType: 'LARGE_STORY',
        },
        effect: 'no',
      },
    },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    { content: [] },
    {
      content: [
        {
          text: {
            words: 'Look on the paths you have taken that have led you to this place.',
            textType: 'VOICE',
          }
        },
        {
          effect: 'showMaze',
        },
        {
          text: {
            words: 'I consume all.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'And when nothing is left, I am gone too.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'But hey, I had a better run than any of you.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Anyway, the author insists I offer an alternate account,',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'the account wherein it\'s all a sort of bad dream.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'Where I am a bad dream, whatever you make of that.',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'In the end, I exist only as dreams exist,',
            textType: 'VOICE',
          },
        },
        {
          text: {
            words: 'they say.',
            textType: 'VOICE',
          },
        },
      ],
      e: {
        transitionType: 'END',
        words: {
          words: 'I might reject such an existence, but do I have a choice?',
          textType: 'LARGE_SELF',
        },
        effect: 'dissolution',
      },
      s: {
        transitionType: 'END',
        words: {
          words: 'I accept such an existence, but I will always try to escape it.',
          textType: 'LARGE_SELF',
        },
        effect: 'dissolution',
      },
    },
  ], // y=17
] as const;

export const DARK_ROOM_IMAGES: ImageCatalog = {
  demoness: {
    path: new URL('../../assets/images/darkRoom/demoness.png', import.meta.url),
    alt: 'Silhouette of a demoness',
  },
  silhouette: {
    path: new URL('../../assets/images/darkRoom/silhouette.png', import.meta.url),
    alt: 'Silhouette of a person',
  },
  tree: {
    path: new URL('../../assets/images/darkRoom/treeOfLife.png', import.meta.url),
    alt: 'Tree with multiple fruit',
  },
  volcano: {
    path: new URL('../../assets/images/darkRoom/volcano.png', import.meta.url),
    alt: 'Silhouette of a volcano',
  },
  graspingHand: {
    path: new URL('../../assets/images/darkRoom/grasping-fruit.png', import.meta.url),
    alt: 'Hand reaching for fruit',
  },
  fruit0: {
    path: new URL('../../assets/images/darkRoom/fruit0.png', import.meta.url),
    alt: 'Fruit',
  },
  fruit1: {
    path: new URL('../../assets/images/darkRoom/fruit1.png', import.meta.url),
    alt: 'Fruit',
  },
  fruit2: {
    path: new URL('../../assets/images/darkRoom/fruit2.png', import.meta.url),
    alt: 'Fruit',
  },
  rocksbg3: {
    path: new URL('../../assets/images/mountain/before/rocksbg3.png?as=webp', import.meta.url),
    alt: 'More detailed black and white scribbled ground',
  },
}

export const DARK_ROOM_AUDIO: AudioCatalog = {
  death: {
    path: new URL('../../assets/audio/death.mp3', import.meta.url),
    id: 'dr-death-audio',
    isLoop: false,
  },
  dissolution: {
    path: new URL('../../assets/audio/firstencountersound.ogg', import.meta.url),
    id: 'dr-dissolution-audio',
    isLoop: false,
  },
  no: {
    path: new URL('../../assets/audio/no.mp3', import.meta.url),
    id: 'dr-no-audio',
    isLoop: false,
  },
  rebirth: {
    path: new URL('../../assets/audio/explosion.ogg', import.meta.url),
    id: 'dr-rebirth',
    isLoop: false,
  },
  madelineInEvernost: {
    path: new URL('../../assets/audio/madelineInEvernost.mp3', import.meta.url),
    id: 'dr-madeline-in-evernost',
    isLoop: false,
  },
  vernaInEvernost: {
    path: new URL('../../assets/audio/vernaInEvernost.mp3', import.meta.url),
    id: 'dr-verna-in-evernost',
    isLoop: false,
  },
  michaelInEvernost: {
    path: new URL('../../assets/audio/michaelInEvernost.mp3', import.meta.url),
    id: 'dr-michael-in-evernost',
    isLoop: false,
  },
  harp0: {
    path: new URL('../../assets/audio/harpStrokes.mp3', import.meta.url),
    id: 'dr-harp0',
    isLoop: false,
  },
  harp1: {
    path: new URL('../../assets/audio/harpStrokesLower.mp3', import.meta.url),
    id: 'dr-harp1',
    isLoop: false,
  },
  harp2: {
    path: new URL('../../assets/audio/harpStrokesHigher.mp3', import.meta.url),
    id: 'dr-harp2',
    isLoop: false,
  },
  optionSound: {
    path: new URL('../../assets/audio/optionSound.mp3', import.meta.url),
    id: 'dr-option-sound',
    isLoop: false,
  },
} as const;

export const STARTING_CELL_LOCATION: CellLocation = [0, 1]
export const MICHAEL_EVERNOST: CellLocation[] = [[13, 1], [14, 1], [15, 1], [16, 1], [9, 6], [9, 7]];
// export const VERNA_EVERNOST: CellLocation[] = [[6, 10], [1, 11], [2, 11], [3, 11], [1, 12], [2, 12], [3, 12], [6, 13], [1, 14], [2, 14], [3, 14], [5, 14], [6, 14], [1, 15], [2, 15], [3, 15], [5, 15], [6, 15], [1, 16], [2, 16], [3, 16], [4, 16], [5, 16], [6, 16], [1, 17], [2, 17], [3, 17], [4, 17], [5, 17]];
// export const MADELINE_EVERNOST: CellLocation[] = [[14, 7], [16, 7], [17, 7], [14, 8], [16, 8], [17, 8], [12, 9], [13, 9], [14, 9], [16, 9], [17, 9], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 11], [17, 11], [9, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12] ]

export const VERNA_DEATH: CellLocation = [0, 9];
export const VERNA_DISSOLUTION: CellLocation = [0, 17];
export const MADELINE_DISSOLUTION: CellLocation = [17, 17];
export const MICHAEL_DEATH: CellLocation = [9, 0];
export const MICHAEL_REBIRTH: CellLocation = [17, 0];