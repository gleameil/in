import { createDivWithElements } from "../../shared/helpers";
import { getTime, month } from "../../shared/time/time";
import { FEBRUARY_BACKGROUNDS } from "./home-february/home.february.constants";

export function randomFebruaryBackgroundIndex() {
  return Math.floor(Math.random() * FEBRUARY_BACKGROUNDS.length);
}

export function isValentinesDay() {
  return month() === 1 && getTime().getDate() === 14;
}

export function createItem(image: HTMLImageElement, id: string, clickHandler?: () => void): HTMLDivElement {
  let itemClassName = 'item';
  let activeClassName = 'active'
  switch (month()) {
    case 1:
      itemClassName = 'item-february';
      activeClassName = 'active-february'
      break;
    default:
      break;
  }
  const item = createDivWithElements([image], ['home', itemClassName], id);
  if (clickHandler) {
    item.classList.add(activeClassName);
    item.addEventListener('click', () => {
      if (item.classList.contains(activeClassName)) {
        clickHandler();
      }
    });
  }
  return item;
}