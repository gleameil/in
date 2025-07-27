import { ImageCatalog } from "../../../shared/constants";
import { Chapters } from "../reader.constants";

export const LOON_IMAGES: ImageCatalog = {
  doodleLeft: {
    path: new URL('../../../assets/images/books/loonOfLunes/doodle1.jpg', import.meta.url),
    alt: 'go back',
  },
  doodleRight: {
    path: new URL('../../../assets/images/books/loonOfLunes/doodle1.jpg', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
}

export const LOON_OF_LUNES_CHAPTERS: Chapters = [
  [
      {
          heading: 'loon of lunes',
          text: '13 ways of looking at a shitty doodle',
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight,
      },
      {
          text: 'The lune is a poetic form created by poet Robert Kelly as an English-language equivalent of the haiku. Its only requirements are that there should be three lines, the first with five syllables, the second with three, and the third with five again. This is a lune/loon of lunes in that it is a series of five lunes, followed by three lunes, followed by another five lunes. The subtitle, naturally, refers to Wallace Stevens’s poem “Thirteen Ways of Looking at a Blackbird.” ',
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `ice wounded by fire —
purity
cracks into color.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `fire, round, in cracked ice —
boxed god, gemmed —
or the light’s beyond.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `yellow, blue, glitter,
neon, red:
icy ink, ink flame —`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `color, contend — swirl —
hatched layers
sought depth, chaos found.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight

      },
      {
          text: `if it doesn’t work,
stay on and
get off somewhere else.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight

      },
      {
          text: `the white glitter pen
spreads each hue
it is scribbled on;`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `theological,
navy proves
light by means of dark.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `“you’re laughing at us,”
you fret. i
do not think i am.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `huh, damnable joke,
bargain god —
neon ink scribbles.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `hue, neon, glitter,
blank paper:
vying lights’ concord.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `why shitty? dunno,
visionless
in complexity.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `pure anachronism,
sweet beauty;
i draw with gel pens.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight
      },
      {
          text: `this cardstock tile
shouts, misused:
no window, though I tried.`,
          leftImage: LOON_IMAGES.doodleLeft,
          rightImage: LOON_IMAGES.doodleRight,
      },
  ],
]