import { month } from '../../shared/time/time.ts';
import { createSpan } from '../../shared/helpers.ts';
import { homeJanuary } from './home-january/home.ts';
import { homeFebruary } from './home-february/home.february.ts';

export function outOfTime() {
  const constructionSign = createSpan('THIS TIME DOES NOT EXIST YET', ['under-construction'], 'under-construction');
  document.getElementsByTagName('html')[0].append(constructionSign);
  // TODO: provide a way out
}

export function comeHome() {
  switch (month()) {
    case 0:
      homeJanuary(comeHome);
      break;
    case 1:
      homeFebruary(comeHome);
      break;
    default:
      throw new Error('Invalid time; something very wrong here');
  }
}