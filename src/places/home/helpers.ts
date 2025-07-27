import { createDivWithElements } from "../../shared/helpers";

export function createItem(image: HTMLImageElement, id: string, clickHandler?: () => void): HTMLDivElement {
  const item = createDivWithElements([image], ['home', 'item'], id);
  if (clickHandler) {
    item.classList.add('active');
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        clickHandler();
      }
    });
  }
  return item;
}