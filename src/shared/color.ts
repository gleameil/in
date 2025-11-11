export class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  // Regex <3
  static rgbPattern = /rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)/
  static rgbaPattern = /rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*[0,1]\.?\d*\)/
  static rgbValuePattern = /(?<=\D)\d{1,3}(?=\D)/g
  static alphaValuePattern = /\D[0,1](\.\d+)?(?=\))/
  static hexPattern = /#([a-f,\d]{2}){3,4}/

  static fromString(colorString: string): Color {
    if (colorString = 'initial') {
      return new Color(255, 255, 255, 1);
    }

    const rgb = colorString.match(Color.rgbPattern)?.[0];
    const rgba = colorString.match(Color.rgbaPattern)?.[0];
    const hex = colorString.match(Color.hexPattern)?.[0];

    if (rgba) {
      const colorValues = rgba.match(Color.rgbValuePattern)?.map(val => parseInt(val)).filter(val => !Number.isNaN(val));
      const alphaValue = parseFloat(rgba.match(Color.alphaValuePattern)?.[0] ?? 'no');
      if (!colorValues || colorValues.length !== 3 || Number.isNaN(alphaValue)) {
        throw new Error(`Something wrong here: ${colorString}`);
      }
      return new Color(colorValues[0], colorValues[1], colorValues[2], alphaValue);
    }

    if (rgb) {
      const colorValues = rgb.match(Color.rgbValuePattern)?.map(val => parseInt(val)).filter(val => !Number.isNaN(val));
      if (!colorValues || colorValues.length !== 3) {
        throw new Error(`Something wrong here: ${colorString}`);
      }
      return new Color(colorValues[0], colorValues[1], colorValues[2]);
    }

    if (hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const a = (parseInt(hex.slice(7), 16) || 255) / 255;

      if ([r, g, b, a].some(val => Number.isNaN(val))) {
        throw new Error(`Something wrong here: ${colorString}`);
      }
      return new Color(r, g, b, a);
    } 
    throw Error(`No parsing implemented for color format of string ${colorString}`);
  }

  constructor(r: number, g: number, b: number, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  rgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  makeTransparent(byHowMuch: number) {
    return new Color(this.r, this.g, this.b, this.a - byHowMuch);
  }

  isEqualTo(color: Color) {
    return (this.r === color.r) && (this.g === color.g) && (this.b === color.b) && (this.a === color.a);
  }
}

interface Colors {
  [name: string]: string;
}

export interface MonthColors extends Colors {
  violet: string;
  indigo: string;
  blue: string;
  cyan: string;
  green: string;
  yellow: string;
  gold: string;
  orange: string;
  red: string;
  white: string;
  black: string;
  gray: string;
  lightGray: string;
}

export interface ColorSet {
  [name: string]: Color
}

export interface MonthColorSet extends ColorSet {
  violet: Color;
  indigo: Color;
  blue: Color;
  cyan: Color;
  green: Color;
  yellow: Color;
  gold: Color;
  orange: Color;
  red: Color;
  white: Color;
  black: Color;
  gray: Color;
  lightGray: Color;
}
export const JANUARY_COLORS: MonthColors = {
  violet: 'rgb(161, 84, 161)',
  dullViolet: 'rgb(149, 128, 149)',
  paleViolet: 'rgb(252, 243, 252)',
  indigo: 'rgb(60, 45, 122)',
  cyan: 'rgb(70, 220, 255)',
  blue: 'rgb(53, 149, 210)',
  gold: 'rgb(233, 194, 30)',
  yellow: 'rgb(255, 255, 224)',
  dullGreen: 'rgb(183, 183, 83)',
  green: 'rgb(0, 128, 0)',
  red: 'rgb(211, 50, 66)',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  gray: 'rgb(128, 128, 128)',
  lightGray: 'rgb(220, 220, 220)',
  orange: 'rgb(246, 138, 53)',
  dullOrange: 'rgb(220, 166, 117)',
} as const; 

export type JanuaryColor = typeof JANUARY_COLORS[keyof typeof JANUARY_COLORS];

export const FEBRUARY_COLORS: MonthColors = {
  violet: 'rgb(111, 82, 120)',
  dullViolet: 'rgb(169, 147, 169)',
  indigo: 'rgb(98, 98, 153)',
  cyan: 'rgb(82, 107, 124)',
  blue: 'rgb(189, 211, 246)',
  green: 'rgb(80, 108, 88)',
  gold: 'rgb(131,123, 88)',
  yellow: 'rgb(220, 196, 143)',
  orangeBrown: 'rgb(52, 29, 0)',
  orange: 'rgb(208, 179, 156)',
  darkRed: 'rgb(90, 30, 40)',
  red: 'rgb(199, 64, 70)',
  pink: 'rgb(203, 162, 170)',
  white: 'rgb(252, 245, 229)', // parchment here: https://htmlcolorcodes.com/colors/,
  black: 'rgb(70, 50, 60)',
  gray: 'rgb(128, 128, 128)',
  lightGray: 'rgb(220, 220, 220)',
} as const;

export type FebruaryColor = typeof FEBRUARY_COLORS[keyof typeof FEBRUARY_COLORS];

export const OUT_COLORS: Colors = {
  almostWhite: 'rgb(240, 240, 240)',
  lightGray: 'rgb(211, 211, 211)',
  gray: 'rgb(128, 128, 128)',
  redderGray: 'rgb(137, 135, 135)',
  greenerGray: 'rgb(143, 144, 143)',
  purplerGray: 'rgb(141, 140, 144)',
  gold: 'rgb(233, 194, 30)',
  lightYellow: 'rgb(255, 255, 224)',
  red: 'rgb(211, 50, 66)',
}

export type OutColor = typeof OUT_COLORS[keyof typeof OUT_COLORS]

export type DesignColor = JanuaryColor | FebruaryColor | OutColor;

export function makeColorTransparent(rgbOrRgbaString: string, byHowMuch: number): string {
  if (!rgbOrRgbaString) {
    throw new Error('rgba string absent');
  }
  if (rgbOrRgbaString.startsWith('rgba')) {
      const currentAlpha = rgbOrRgbaString.match(/\d\.?\d*(?=\)$)/)?.[0] ?? '1';
      const newAlpha = parseFloat(currentAlpha) - byHowMuch;
      return rgbOrRgbaString.replace(/\d\.?\d*(?=\)$)/, newAlpha.toString());
  } else if (rgbOrRgbaString.startsWith('rgb(')) {
      const newAlpha = 1 - byHowMuch;
      return rgbOrRgbaString
        .replace(')', `, ${newAlpha})`)
        .replace('rgb(', 'rgba(');
  } else if (rgbOrRgbaString === 'initial') {
    return new Color(255, 255, 255, 1).rgbaString();
  } else {
    throw new Error('Cannot parse rgba string ' + rgbOrRgbaString);
  }
}


function colorSetFromColorStrings(colors: Colors): ColorSet {
  let cs: ColorSet = {};
  Object.keys(colors).forEach(color => cs[color] = Color.fromString(colors[color]));
  return cs;
}

export const JANUARY_COLOR_SET: MonthColorSet = colorSetFromColorStrings(JANUARY_COLORS) as MonthColorSet;
export const FEBRUARY_COLOR_SET: MonthColorSet = colorSetFromColorStrings(FEBRUARY_COLORS) as MonthColorSet;
export const OUT_COLOR_SET: ColorSet = colorSetFromColorStrings(OUT_COLORS);