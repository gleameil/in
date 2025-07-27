import { QuestionType, QUESTION_TYPES, Quiz, QUIZZES, RankQuestion, SliderQuestion } from "./quizzes.constants";


function removeAllChildren(element: HTMLElement) {
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

function show(element?: HTMLElement | null) {
  element?.classList.remove('invisible');
}

function hide(element?: HTMLElement | null) {
  if (!element?.classList.contains('invisible')) {
      element?.classList.add('invisible');
  }
}

function setUpQuizHeader(quiz) {
  show(document.getElementById('quiz')! as HTMLElement);
  const quizHeader = document.getElementById('quizHeader');
  const quizTitle = document.createElement('h3');
  quizTitle.innerText = quiz.title;
  const quizDescription = document.createElement('p');
  quizDescription.innerText = quiz.description;
  const returnToQuizList = document.createElement('button');
  returnToQuizList.innerText = 'Return to quiz list';
  returnToQuizList.addEventListener('click', () => {
      const result = document.getElementById('result')! as HTMLElement;
      removeAllChildren(result);
      hide(result);
      hide(document.getElementById('quiz') as HTMLElement);
      show(document.getElementById('quizzes') as HTMLElement);
      for (let i = 0; i < quiz.possibleResults.length; i++) {
          quiz.possibleResults[i].score = 0;
      }
  });
  
  removeAllChildren(quizHeader!);
  quizHeader!.append(quizTitle);
  quizHeader!.append(quizDescription);
  quizHeader!.append(returnToQuizList);
  show(quizHeader!);
}

function setUpQuestionText(text: string, forId: string) {
  const questionText = document.createElement('label');
  questionText.innerText = text;
  questionText.setAttribute('for', forId);
  return questionText;
}

// function setUpColorPicker(question:) {
//   const questionText = setUpQuestionText(question.question, 'colorPicker');
//   const pickerInput = document.createElement('input');
//   pickerInput.id = 'colorPicker';
//   pickerInput.type = 'color';
//   const colorPicker = document.getElementById('colorPicker');
//   colorPicker.append(questionText);
//   colorPicker.append(pickerInput);
//   show(colorPicker);
// }

// function setUpFreeAnswer(question) {
//   const questionText = setUpQuestionText(question.question, 'textInput');
//   const textInput = document.createElement('textarea');
//   textInput.id = 'textInput';
//   textInput.rows = 8;
//   const freeAnswer = document.getElementById('freeAnswer');
//   freeAnswer.append(questionText);
//   freeAnswer.append(textInput);
//   show(freeAnswer);
// }

// typescript ow
function acceptDrop(draggedElement: HTMLElement | null, event: DragEvent) {
  if (draggedElement === null) {
    return;
  }
  event.preventDefault();
  if ((event.target as Node)?.isSameNode(draggedElement.parentNode) || (event.target as Node)?.parentNode?.isSameNode(draggedElement.parentNode)) {
      return;
  } else if ((event.target as HTMLElement)?.classList.contains('droptarget')) {
      if ((draggedElement.parentNode as HTMLElement)?.id !== 'optionContainer') {
          (draggedElement.parentNode as HTMLElement).classList.add('droptarget');
      }
      (draggedElement.parentNode as HTMLElement).removeChild(draggedElement);

      (event.target as HTMLElement)?.append(draggedElement);
      if ((event.target as HTMLElement).id !== 'optionContainer') {
          (event.target as HTMLElement).classList.remove('droptarget');
      }
  } else if (((event.target as HTMLElement)?.parentNode as HTMLElement)?.classList.contains('droptarget')) {
      if ((draggedElement.parentNode as HTMLElement).id !== 'optionContainer') {
          (draggedElement.parentNode as HTMLElement).classList.add('droptarget');
      }
      (draggedElement.parentNode as HTMLElement).removeChild(draggedElement);
      ((event.target as HTMLElement)?.parentNode as HTMLElement)?.append(draggedElement);
      if (((event.target as HTMLElement)?.parentNode as HTMLElement)?.id !== 'optionContainer') {
          ((event.target as HTMLElement)?.parentNode as HTMLElement).classList.remove('droptarget')
      }
  }
}

function setUpRank(question: RankQuestion) {
  let elementBeingDragged: HTMLDivElement | null = null;

  const rankQuestionContainer = document.createElement('div');
  rankQuestionContainer.id = 'rankQuestionContainer';
  const questionText = document.createElement('p');
  questionText.id = 'questionText';
  questionText.innerText = question.question;
  const instructions = document.createElement('p');
  instructions.id = 'instructions';
  instructions.innerText = 'Rank any options that apply: click and drag the option to a slot that represents how important it is. Top is most important, bottom least.'
  const optionContainer = document.createElement('div');
  optionContainer.id = 'optionContainer';
  optionContainer.classList.add('droptarget');
  optionContainer.addEventListener('dragover', event => event.preventDefault());
  optionContainer.addEventListener('drop', event => acceptDrop(elementBeingDragged, event));
  const choiceContainer = document.createElement('div');
  choiceContainer.id = 'choiceContainer';
  rankQuestionContainer.append(optionContainer);
  rankQuestionContainer.append(choiceContainer);
  for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement('div');
      option.id = `option${i}`;
      option.classList.add('option', 'optionOrChoice')
      option.innerText = question.options[i].text;
      option.draggable = true;
      option.addEventListener('dragstart', () => elementBeingDragged = option)
      optionContainer.append(option);
      const choice = document.createElement('div');
      choice.id = `choice${i}`;
      choice.classList.add('choice', 'optionOrChoice', 'droptarget');
      choice.addEventListener('dragover', event => {
          if ((event.target as HTMLElement)?.classList.contains('droptarget')) {
              event.preventDefault()
          }
      });
      choice.addEventListener('drop', event => acceptDrop(elementBeingDragged, event));
      choiceContainer.append(choice);
  }
  const rank = document.getElementById('rank');
  (rank as HTMLDivElement).append(questionText);
  (rank as HTMLDivElement).append(instructions);
  (rank as HTMLDivElement).append(rankQuestionContainer);
  show(rank);
}

function setUpSlider(question) {
  const questionText = setUpQuestionText(question.question, 'slider');
  const sliderContainer = document.createElement('div');
  sliderContainer.id = 'sliderQuestionContainer';
  const minimum = document.createElement('div');
  minimum.innerText = question.left;
  const maximum = document.createElement('div');
  maximum.innerText = question.right;
  const sliderInput = document.createElement('input');
  sliderInput.id = 'sliderInput';
  sliderInput.name = 'slider';
  sliderInput.type = 'range';
  sliderInput.min = '-1';
  sliderInput.max = '1';
  sliderInput.value = '0';
  sliderInput.step = '0.1';
  sliderContainer.append(minimum);
  sliderContainer.append(sliderInput);
  sliderContainer.append(maximum);
  let questionEnd;
  if (question.questionEnd) {
      questionEnd = document.createElement('div');
      questionEnd.innerText = question.questionEnd;
  }
  const slider = document.getElementById('slider');
  slider?.append(questionText);
  slider?.append(sliderContainer);
  !!questionEnd && slider?.append(questionEnd);
  show(slider);
}

function makeResult(result, parent) {
  const title = document.createElement('h2');
  title.innerText = `YOUR RESULT: ${result.title}`;
  const description = document.createElement('p');
  description.innerText = result.description;
  parent.append(title);
  parent.append(description);
}

function scoreRank(question: RankQuestion, quiz: Quiz) {
  for (let i = 0; i < question.options.length; i++) {
      const optionElement = document.getElementById(`option${i}`);
      const optionParentIdRank = parseInt((optionElement?.parentNode as HTMLElement)?.id?.slice(-1));
      const multiplier = !Number.isNaN(optionParentIdRank) ? 2 ** (-optionParentIdRank) : 0;
      for (let j = 0; j < quiz.possibleResults.length; j++) {
          quiz.possibleResults[j].score += (question.options[i].particular[j] ?? 0) * multiplier;
      }
      // for (const key of Object.keys(SELVES.subdivided)) {
      //     for (const part of PARTS) {
      //         SELVES.subdivided[key][part].salience += (question.options[i].general?.[key]?.[part]?.salience ?? 0) * multiplier;
      //         if (question.options[i].general[key]?.[part]?.contents) {
      //             SELVES.subdivided[key][part].contents += question.question + question.options[i].text;
      //         }
      //         if (question.options[i].general[key]?.[part]?.aesthetic?.associations) {
      //             SELVES.subdivided[key][part].aesthetic.associations += question.question + question.options[i].text;
      //         }
      //     }
      // }
      // for (const key of Object.keys(SELVES.single)) {
      //     SELVES.single[key].salience += (question.options[i].general[key]?.salience ?? 0) * multiplier;
      //     if (question.options[i].general[key]?.contents) {
      //         SELVES.single[key].contents += question.question + question.options[i].text;
      //     }
      //     if (question.options[i].general[key]?.aesthetic?.associations) {
      //         SELVES.single[key].aesthetic.associations += question.question + question.options[i].text;
      //     }
      // }
  }
}

function scoreSlider(question: SliderQuestion, quiz: Quiz) {
  let sliderValue = parseFloat((document.getElementById('sliderInput') as HTMLInputElement)?.value);
  if (question.particular?.leftIsPositive) {
      sliderValue *= -1;
  }

  if (quiz.title === 'Do you really exist?') {
      if ([0, 1, -1].includes(sliderValue)) {
          // most of these are ridiculous all or nothing questions. If you really think you're ALL x or y you may not exist; and if you didn't move the slider at all, there's also a decent chance you don't exist
          quiz.possibleResults[1].score += 0.5;  
      }
  }

  quiz.possibleResults[question.particular.result].score += sliderValue;
  // for (const key of Object.keys(SELVES.subdivided)) {
  //     for (const part of PARTS) {
  //         if (question.general[key]?.[part]) {
  //             if (question.general[key][part].salience) {
  //                 SELVES.subdivided[key][part].salience += slider.value * question.general[key][part].salience // should be 1 or -1
  //             }
  //             if (question.general[key][part].contents) {
  //                 SELVES.subdivided[key][part].contents += question.question + (question.questionEnd ?? '') + (question.general[key][part].contents === -1 ? question.left : question.right);
  //             }
  //             if (question.general[key][part].aesthetic?.associations) {
  //                 SELVES.subdivided[key][part].aesthetic.associations += question.question + (question.questionEnd ?? '') + (question.general[key][part].contents === -1 ? question.left : question.right);
  //             }
  //         }
  //     }
  // }
  // for (const key of Object.keys(SELVES.single)) {
  //     if (question.general[key]?.salience) {
  //         SELVES.single[key].salience += slider.value * question.general[key].salience;
  //     }
  //     if (question.general[key]?.contents) {
  //         SELVES.single[key].contents += question.question + (question.questionEnd ?? '')
  //     }
  //     if (question.general[key]?.aesthetic?.associations) {
  //         SELVES.subdivided[key].aesthetic.associations += question.question + (question.questionEnd ?? '') + (question.general[key].contents === -1 ? question.left : question.right);
  //     }
  // }
}

function scoreQuestion(question, quiz) {
  switch (question.type) {
      case QUESTION_TYPES.rank:
          scoreRank(question, quiz);
          break;
      case QUESTION_TYPES.slider:
          scoreSlider(question, quiz);
          break;
  }
}

function scoreQuiz(quiz) {
  hide(document.getElementById('submit'));
  const sortedResults = quiz.possibleResults.toSorted((a, b) => b.score - a.score);
  const resultDiv = document.getElementById('result');
  makeResult(sortedResults[0], resultDiv);
  show(resultDiv);
}

function setUpQuizQuestion(quiz: Quiz, index: number) {
  let questionSections = document.getElementsByClassName('question');
  for (let i = 0; i < questionSections.length; i++) {
      const questionType = questionSections[i];
      if (!questionType.classList.contains('invisible')) {
          removeAllChildren(questionType as HTMLElement);
          hide(questionType as HTMLElement);
      }
  }
  if (index >= quiz.questions.length) {
      scoreQuiz(quiz);
  } else {
      const question = quiz.questions[index];
      switch (question.type) {
          case QUESTION_TYPES.rank:
              setUpRank(question);
              break;
          case QUESTION_TYPES.slider:
              setUpSlider(question);
              break;
      }
      document.getElementById('submit')?.remove();
      const submitButton = document.createElement('input');
      submitButton.id = 'submit';
      submitButton.type = 'submit';
      submitButton.value = 'Submit';
      submitButton.addEventListener(
          'click',
          () => {
              scoreQuestion(question, quiz);
              setUpQuizQuestion(quiz, index + 1);
          },
          { once: true }
      );
      document.getElementById('quiz')?.append(submitButton);
  }
}

function startQuiz(quiz) {
  hide(document.getElementById('quizzes'))
  setUpQuizHeader(quiz);
  setUpQuizQuestion(quiz, 0);
}

function setUpQuizList() {
  for (let i = 0; i < QUIZZES.length; i++) {
      const quizLink = document.createElement('p');
      quizLink.innerText = QUIZZES[i].title;
      quizLink.classList.add('quizLink');
      quizLink.addEventListener('click', () => startQuiz(QUIZZES[i]));
      const quizList = document.getElementById('quizzes');
      quizList?.append(quizLink);
  }
}


export function quizzesInitial() {
  const quizContainer = document.getElementById('computer-browser-quiz-container')! as HTMLDivElement;
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.innerText = 'Quizzy Tizzy';
  const subheading = document.createElement('h2');
  subheading.innerText = 'A Quiz for Every Mood';
  const line = document.createElement('hr');
  header.append(heading, subheading, line);
  quizContainer.append(heading);

  const main = document.createElement('main');
  main.id = 'quiz-main';
  
  const quizzes = document.createElement('div');
  quizzes.id = 'quizzes';
  
  const quiz = document.createElement('quiz');
  quiz.id = 'quiz';
  quiz.classList.add('invisible');

  const quizHeader = document.createElement('div');
  quizHeader.id = 'quizHeader';
  
  const rankQuestion = document.createElement('div');
  rankQuestion.id = 'rank';
  rankQuestion.classList.add('question', 'invisible');

  const sliderQuestion = document.createElement('div');
  sliderQuestion.id = 'slider';
  sliderQuestion.classList.add('question', 'invisible');

  const result = document.createElement('div');
  result.id = 'result';
  result.classList.add('invisible');

  quiz.append(quizHeader, rankQuestion, sliderQuestion, result);

  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';
  const about = document.createElement('h2');
  about.innerText = 'About';
  const aboutContent = document.createElement('p');
  aboutContent.innerText = `Hi hi hi! I'm Quizzy Izzy of Quizzy Tizzy, and I love writing silly QUIZZES. Also yeah this thing looks like it crawled out of the  '90s but don't judge, there's only one of me and I do this for FUN and what even is CSS anyway? jk lol, I know what CSS is. How come ya think it's so prettTtttttttyyyyy? Data privacy, on the other hand... I mean, I couldn't care less what breed of dog my algorithm thinks you are, but, uh, we ARE Elsewhere, after all! And there are Those who watch these things, and sometimes They have, uh, a a little too much fun with the info people put in my quizzes. But they're nice! Mostly! At least, they really like getting to know people!`

  sidebar.append(about, aboutContent);
  main.append(quizzes, quiz, sidebar);
  quizContainer.append(main);

  setUpQuizList();
}