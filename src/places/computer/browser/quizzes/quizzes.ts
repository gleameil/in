import { removeByClassName } from "../../../../shared/helpers";
import { createBrowserTabWithText } from "../../computer.helpers";
import { quizzesInitial } from "./quizzes.helpers";
import './quizzes.css'

export function showQuizzesTabName(): HTMLButtonElement {
  return createBrowserTabWithText('✨ Quizzes ✨', ['browser'], 'quizzes-tab')
}

export function leaveQuizzesTab() {
  document.getElementById('computer-browser-quiz-container')?.remove();
  document.getElementById('quizzes-tab')?.classList.remove('browser-tab-active')
}

export function switchToQuizzesTab() {
  const all = document.getElementsByTagName('html')[0];
  document.getElementById('quizzes-tab')?.classList.add('browser-tab-active');
  const quizContainer = document.createElement('div');
  quizContainer.id = 'computer-browser-quiz-container';
  quizContainer.classList.add('browser');
  all.append(quizContainer);
  quizzesInitial();
}