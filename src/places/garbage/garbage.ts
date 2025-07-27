import { createFirebirdModal, createAmbitionModal, createPreambleModal, createJennyieModal, createPoemModal, createIntroductionModal, createJazzModal, createCslModal, createAbstractModal, createTrivialModal, createKnotModal, createGarbageModals, createPaperBalls, close, ope } from './garbage.helpers'
import { GARBAGE } from './garbage.constants';
import { JANUARY_COLORS } from '../../shared/color';
import { createHomewardButton, setBackground, removeByClassName } from '../../shared/helpers';
import './garbage.css';

function leaveGarbage() {
  removeByClassName('garbage-miscellany');
  document.getElementById('garbage-container')?.remove();
}

export function setUpGarbage(comeHome: () => void) {
  setBackground(JANUARY_COLORS.yellow)
  const garbageContainer = document.createElement('div');
  garbageContainer.id = 'garbage-container';

  const contentToAppend = [
    createFirebirdModal(),
    createAmbitionModal(),
    createPreambleModal(),
    createIntroductionModal(),
    createJennyieModal(),
    createPoemModal(),
    createJazzModal(),
    createCslModal(),
    createAbstractModal(),
    createTrivialModal(),
    createKnotModal(),
    ...createGarbageModals(),
    createPaperBalls(),
  ];
  garbageContainer.append(...contentToAppend);
  const all = document.getElementsByTagName('html')[0]
  all.append(garbageContainer);
  all.append(createHomewardButton(
    'Enough of this garbage',
    ['garbage-miscellany'],
    () => {
      leaveGarbage();
      comeHome();
    })
  );

  for (const paper in GARBAGE.paperMatching) {
    document.getElementById(`garbage-${paper}`)?.addEventListener('click', () => ope(GARBAGE.paperMatching[paper]))
  }
  document.getElementById('garbage-paper2')?.addEventListener('click', () => {
    leaveGarbage();
    comeHome();
  })

  document.querySelectorAll(".garbage-x").forEach(item => item.addEventListener("click", close));
  console.log('Console logging for a lot of these is just the alt text, in the event you can\'t read my indistinct handwriting + actually care what they say.');
}