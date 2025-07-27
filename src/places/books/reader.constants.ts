import { ImagePathAndAltText } from "../../shared/constants";

export interface Page {
  title?: string;
  heading?: string;
  text?: string;
  rightImage: ImagePathAndAltText;
  leftImage: ImagePathAndAltText;
  canShow?: () => boolean;
  effect?: () => void;
}

export type Chapter = Page[];
export type Chapters = Chapter[];
