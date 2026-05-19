import { createImage } from "../../../shared/shared.helpers";
import { BOOKS_IMAGES } from "../books.constants";

export function oracleBox(): HTMLImageElement {
  return createImage(BOOKS_IMAGES.oracleBox, ['cover'], 'oracle-box');
}

export function oracle(goBack: () => void) {}
