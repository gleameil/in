import { ImageCatalog } from "../../../shared/shared.constants";
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
      log: `loon of lunes
Book of poems, January book pile

The subtitle declared its debt to Wallace Stevens's "Thirteen Ways of Looking at a Blackbird" before the book explains itself. Whether it's homage or self-deflation — or both — the Amanuensis notes that Stevens did not call his poem thirteen ways of looking at a pretty bird.

— the Amanuensis`,
    },
    {
      text: 'The lune is a poetic form created by poet Robert Kelly as an English-language equivalent of the haiku. Its only requirements are that there should be three lines, the first with five syllables, the second with three, and the third with five again. This is a lune/loon of lunes in that it is a series of five lunes, followed by three lunes, followed by another five lunes. The subtitle, naturally, refers to Wallace Stevens\'s poem "Thirteen Ways of Looking at a Blackbird." ',
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `ice wounded by fire —
purity
cracks into color.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `fire, round, in cracked ice —
boxed god, gemmed —
or the light's beyond.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
      log: `loon of lunes
Second lune

The book's central theological choice declared in five syllables: "boxed god, gemmed —" or "the light's beyond." A contained divine, made beautiful by its frame; or something that won't fit the frame at all. The dash after "gemmed" holds both possibilities open for exactly one syllable before the alternative arrives. The doodle is either an icon or a failure to render what icons are for — and the book will spend eleven more lunes deciding which.

— the Amanuensis`,
    },
    {
      text: `yellow, blue, glitter,
neon, red:
icy ink, ink flame —`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `color, contend — swirl —
hatched layers
sought depth, chaos found.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `if it doesn't work,
stay on and
get off somewhere else.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
      log: `loon of lunes
Fifth lune

The middle line loses its two syllables of breathing room and lands on a proposition that works at several scales simultaneously: practical studio advice, a theory of revision, and — in this particular cosmology — something more literal than it sounds. Evernost is, among other things, where you go when here doesn't work. The lune is agnostic about whether "somewhere else" is escape or destination.

— the Amanuensis`,
    },
    {
      text: `the white glitter pen
spreads each hue
it is scribbled on;`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `theological,
navy proves
light by means of dark.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
      log: `loon of lunes
Seventh lune — the apophatic

"Theological" appears alone in the first line — not as adjective but as verdict, filling five syllables without needing a noun to modify. The via negativa in crayon: navy is most itself against white, just as apophatic theology holds that the divine is most legible through what it isn't. The Amanuensis finds it notable that the word required no translation into metaphor. It just showed up.

— the Amanuensis`,
    },
    {
      text: `"you're laughing at us,"
you fret. i
do not think i am.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `huh, damnable joke,
bargain god —
neon ink scribbles.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `hue, neon, glitter,
blank paper:
vying lights' concord.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `why shitty? dunno,
visionless
in complexity.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
    },
    {
      text: `pure anachronism,
sweet beauty;
i draw with gel pens.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
      log: `loon of lunes
Twelfth lune

Gel pens are a child's art supply, a hobby-store staple, deliberately un-serious. "Pure anachronism, sweet beauty" — in that order, the indictment before the defense. The semicolon is doing formal work: what follows isn't a contradiction but a consequence. The Amanuensis has noted elsewhere that the gel pen is this project's instrument of choice, and has decided not to apologize for it.

— the Amanuensis`,
    },
    {
      text: `this cardstock tile
shouts, misused:
no window, though I tried.`,
      leftImage: LOON_IMAGES.doodleLeft,
      rightImage: LOON_IMAGES.doodleRight,
      log: `loon of lunes
Thirteenth lune

The book ends where it began: a doodle that doesn't work. "Misused" and "no window" — the medium failed the intention. But the failure arrives at the end, not the beginning, and it took thirteen lunes to get here. The Amanuensis notes that "though I tried" is the most honest line in the book, and that a book this formally precise about its own imprecision is, definitionally, not a failure.

— the Amanuensis`,
    },
  ],
]