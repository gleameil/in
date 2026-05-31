import { ImagePathAndAltText } from "../../shared/shared.constants";

export interface Page {
  title?: string;
  heading?: string;
  text?: string;
  log?: string;
  rightImage: ImagePathAndAltText;
  leftImage: ImagePathAndAltText;
  canShow?: () => boolean;
  effect?: () => void;
}

export type Chapter = Page[];
export type Chapters = Chapter[];
