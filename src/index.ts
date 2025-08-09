import { comeHome } from "./places/home/home";
import { startTime } from "./shared/time/time";
import { createSpan, expectLetters, removeByClassName } from  './shared/helpers';

const LETTERS = 'jennie';

function start() {
  removeByClassName('under-construction');
  startTime();
  console.log('Welcoming you In.')
  comeHome();
}

function underConstruction() {
    console.log('If for mysterious reasons you want to see the broken & incomplete version of my internet art, you can probably figure out how by reading the code <3')
    const constructionSign = createSpan('UNDER CONSTRUCTION :)', ['under-construction'], 'under-construction');
    document.getElementsByTagName('html')[0].append(constructionSign);
    document.addEventListener('keydown', e => expectLetters(e, 0, LETTERS, start), { once: true })
}


window.onload = () => {
  start()
}