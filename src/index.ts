import { comeHome } from "./places/home/home";
import { startTime } from "./shared/time/time";
import { createSpan, expectLetters, removeByClassName } from  './shared/helpers';

const LETTERS = 'jennie';

function comeIn() {
  removeByClassName('under-construction');
  // Docmentation in `startTime` itself, but it's remarkably fun
  // Finding concrete ways to embody my insistence that "time is strange in Evernost"
  startTime();
  // Whatever the console may say, January and February (the only months in existence as yet)
  // are not the most welcoming months in my metaphorical Year
  // any more than they are in the literal year (in the northern hemisphere, where I'm based)
  // with the cold, the dirty snow, holidays past
  console.log('Welcoming you In.')
  comeHome();
}

// Don't need this now but may off and on
function underConstruction() {
    console.log('If for mysterious reasons you want to see the broken & incomplete version of my internet art, you can probably figure out how by reading the code <3')
    const constructionSign = createSpan('UNDER CONSTRUCTION :)', ['under-construction'], 'under-construction');
    document.getElementsByTagName('html')[0].append(constructionSign);
    // Leaving a few of these in place as easter eggs
    document.addEventListener('keydown', e => expectLetters(e, 0, LETTERS, comeIn), { once: true })
}

// You can take off the **first** layer of the onion in the console,
// but to go deeper, you check out the code.
window.onload = () => {
  comeIn();
}