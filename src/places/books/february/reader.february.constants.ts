import { Color, ColorSet } from "../../../shared/color";
import { AudioPath, ImagePathAndAltText, SHARED_IMAGES } from "../../../shared/constants";

export interface SpeechBubble {
    index: number;
    arrowLeft: boolean;
    arrowRight: boolean;
}
export interface PoemFragment {
  markdown: string;
  line?: number;
  stanza?: number;
  speechBubble?: SpeechBubble;
}
export type FragmentedPoem = PoemFragment[];

export interface Marginalia {
    left: ImagePathAndAltText;
    top: ImagePathAndAltText;
    right: ImagePathAndAltText;
    bottom: ImagePathAndAltText;
}

export interface StaticPage {
    markdown?: string;
    marginalia?: Marginalia;
    musicOverride?: AudioPath;
}

export interface PoemPage {
    title?: string;
    poem: FragmentedPoem;
    musicOverride?: AudioPath;
}

export type FebruaryPage = StaticPage | PoemPage;

export type FebruaryChapter = FebruaryPage[];

export interface FebruaryBook {
    /// will often be only one
    chapters: FebruaryChapter[];
    palette: ColorSet;
    arrowImage: ImagePathAndAltText;
    music?: AudioPath;
}

export interface BookColors extends ColorSet {
    white: Color;
    lightWarm: Color;
    lightCool: Color;
    midWarm: Color;
    midCool: Color;
    darkWarm: Color;
    darkCool: Color;
    black: Color;
}

// All readers:
/**
 * conspicuous but customizable right and left buttons
 * a lot of flexibility beyond that
 */

// Dei-fic types
/**
 * poem
 * speech bubbles (that it's a speech bubble is indicated by a "speaker" modifier, where it can be left or right?? left (for I) is true, right is false, disrupting right-hand supremacy lol)
 * poem-a-la-January that appears a line or fragment of a line at a time (in or out of speech bubbles; if possible, adapted from existing January work) 
 * own color scheme: yellow, magenta, white, black, and various grays
 * music
 */
// Donne types
/**
 * poem (no speech bubbles) that appears a line or fragment of a line at a time
 * animation code (different types? abstract animations? or a gif? or by click? geoJSON that gets manipulated in weird ways? geoJSON of appropriate locations?)
 * own color scheme: white, navy, a bit of gold, various browns, a red
 */