import { createImage } from "../../../shared/helpers";
import { BOOKS_IMAGES } from "../constants";

export function oracleBox(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.oracleBox, ['cover'], 'oracle-box');
}

export function oracle(goBack: () => void) {}
