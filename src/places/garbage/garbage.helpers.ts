import { SHARED_IMAGES } from "../../shared/constants";
import { createDivWithElements, createImage, createSpan } from "../../shared/helpers";
import { GARBAGE, GARBAGE_IMAGES } from './garbage.constants';

export function anyModal() {
  const modal = document.createElement('div');
  modal.classList.add('garbage-modal');
  const xContainer = document.createElement('div');
  xContainer.classList.add('garbage-x');
  const x = createImage(SHARED_IMAGES.x, [], 'garbage-x-image');
  xContainer.append(x);
  modal.append(xContainer);
  return modal;
}

export function close() {
  document.querySelectorAll(".garbage-modal").forEach(item => (item as HTMLElement).style.display = "none");
}

export function ope(modalId: string) {
  close();
  const modal = document.getElementById(`garbage-${modalId}`) as HTMLDivElement;
  modal.style.display = GARBAGE.displayFlex.includes(modalId) ? 'flex' : 'block';
  !!modal.dataset?.log && console.log(modal.dataset.log);
}

export function makeGarbageModal(index: number, garbageNumber: number): HTMLDivElement {
  const imagePath = GARBAGE_IMAGES[`garbage${garbageNumber}`];
  const modal = anyModal()
  modal.id = `garbage-modal${index}`;
  modal.classList.add('garbage-modal');
  const mainImage = createImage(imagePath, ['garbage-image'], `garbage-main-image${index}`);
  modal.append(mainImage);
  modal.dataset.log = imagePath.alt;
  return modal
}
export function createPaperBalls() {
  const dumpedPaper = document.createElement('div');
  dumpedPaper.id = 'garbage-dumped-paper';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      const paper = document.createElement('div');
      const id = i === 0 ? `garbage-paper${j}` : `garbage-paper${i}-${j}`;
      const classes = ['garbage-paper'];
      if (i > 0) {
        classes.push(`garbage-paper${j + 1}`);
      }
      const paperImage = createImage(SHARED_IMAGES.paper, classes, id);
      paper.append(paperImage);
      // add all the event listeners <3
      dumpedPaper.append(paper);
    }
  }
  return dumpedPaper;
}
function introductionHeader() {
  const header = document.createElement('h2');
  header.classList.add('garbage-strikethrough');
  header.innerText = 'Introduction';
  return header;
}
export function createKnotModal() {
  const modal = anyModal();
  modal.id = 'garbage-knot-modal';
  const title = document.createElement('h2');
  title.innerText = 'Knot';
  const stanza0 = document.createElement('p');
  stanza0.append(
    createSpan('Untie', ['garbage-bold'], 'garbage-untie-0'),
    createSpan(' your shoelaces — or, with great struggle, the rope around your wrists. Penelope by night. Night turns to day, caught and bound again, always. Cross the strands, loop under, pull: ', [], 'garbage-knot-body-0'),
    createSpan('tie', ['garbage-bold'], 'garbage-tie-0'),
  );

  const stanza1 = document.createElement('p');
  stanza1.append(
    createSpan('Free', ['garbage-bold'], 'garbage-free-1'),
    createSpan(' to steal upon the sleeping enemy and loose the prisoner’s bonds. The suitors tricked, dead. The key found and the labyrinth dissolved as if it never had been: keep your hand on the left wall, it reduces to nothing. But one puzzle leads only to a harder. Old love would devour you again, and the carnivorous vines outside the enemy camp ', [], 'garbage-knot-body-1'),
    createSpan('entangle', ['garbage-bold'], 'garbage-entangle-1'),
  );

  const stanza2 = document.createElement('p');
  stanza2.append(
    createSpan('Divide', ['garbage-bold'], 'garbage-divide-2'),
    createSpan(' truth from seeming, dead end from clear path, and at last from those who mean you ill. With your army, or with your senses, and with true love ', [], 'garbage-knot-body-2'),
    createSpan('unite', ['garbage-bold'], 'garbage-unite-2'),
  );

  const stanza3 = document.createElement('p');
  stanza3.append(
    createSpan('Untie', ['garbage-bold'], 'garbage-untie-3'),
    createSpan(' the winding way so that the path lies straight, the vows that held you to your company, no longer needed, the shoe — again — and then cross the strands, loop under, pull. Without a cause, without a maze, what now? So ', [], 'garbage-knot-body-3'),
    createSpan('tie', ['garbage-bold'], 'garbage-tie-3'),
  );

  const stanza4 = document.createElement('p');
  stanza4.innerText = 'And — "Enough!" He hacks it apart. Rope litters the floor.';

  const contentToAppend = [
    title,
    stanza0,
    stanza1,
    stanza2,
    stanza3,
    stanza4,
  ];
  modal.append(...contentToAppend);
  return modal;
}

export function createTrivialModal() {
  const modal = anyModal();
  modal.id = 'garbage-trivial-modal';
  const header = introductionHeader();
  const paragraph0 = document.createElement('p');
  paragraph0.innerText = 'The universe is unfortunately full of shit. Most of what we know makes no sense, is irrelevant, is boring, is stupid. Our brains learn to filter out a lot of the noise and even what remains is enough to drive some sensitive people to despair. A lot of what I want to do with this book, ultimately, is to stand up against that, to suggest that there are worlds that aren’t full of garbage and are full of meaning, to suggest that even if there aren’t we’d damn well better imagine them because those imaginations themselves are better than 80% if not more of the real world.';
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = 'So why do I include the shit here? Why have I included the depressing facts (or "facts," wouldn’t you like to know, neener neener) of my life, the veritable lists of weird shit that passes through our brains, the whining? Two reasons:';
  const list = document.createElement('ol');
  const first = document.createElement('li');
  first.innerText = 'We are a hell of a lot better at depicting and understanding the real world than we are things we come up with, whether better or worse. The things we invent tend to be phantoms, beautiful or horrible, but insubstantial. Perhaps, perhaps, I can construct some substance for even my phantoms by allowing the real world in in some ways.';
  const second = document.createElement('li');
  second.innerText = 'More important, though, I believe, I hope, and I want (thank heavens, in literature that last is all that’s necessary—I’m a goddess here and everything I want to be can be, and I can ask you to ignore the parts of it that make no sense) that the whole range of human experience and human capacity must be a part of Heaven. I fancy (I’m sure Christians aren’t the only ones who’d call me a heretic for it) it’s not Heaven if any little tiny thing, let alone anyone, has to be really thrown out. I think—I think, sufficiently rigorously taken—that means that all that exists is heaven. We just don’t understand how. Some of us will, someday—the elect? Maybe. I am trying, let us say, to understand in my small way how it is that the shit I’m trying to escape from is also Heaven.';
  list.append(first, second);

  const contentToAppend = [
    header,
    paragraph0,
    paragraph1,
    list,
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createAbstractModal() {
  const modal = anyModal();
  modal.id = 'garbage-abstract-modal'
  modal.append(
    createImage(GARBAGE_IMAGES.chrome, [], 'garbage-chrome-abstract-image'),
  );
  return modal;
}
export function createCslModal() {
  const modal = anyModal();
  modal.id = 'garbage-csl-modal'
  const title = document.createElement('h2');
  title.innerText = 'To C.S. Lewis from 3 a.m.';

  const emojis = document.createElement('span');
  emojis.append(
    createSpan('with a', [], 'garbage-csl-with-a'),
    createSpan('<3 <3 <3', ['garbage-bold'], 'garbage-csl-heart'),
  )

  const moreEmojis = document.createElement('span');
  moreEmojis.append(
    createSpan('and a', [], 'garbage-csl-and-a'),
    createSpan(':) o_o :3', ['garbage-bold'], 'garbage-csl-emojis-other'),
  )

  const contentToAppend = [
    title,
    document.createElement('br'),
    createSpan('You\'re cuuuuuuuuuuuuuuuuuute,', [], 'garbage-csl-cute'),
    document.createElement('br'),
    createSpan('not too smart', [], 'garbage-csl-too-smart'),
    document.createElement('br'),
    createSpan('to love planetary angels', [], 'garbage-csl-planetary-angels'),
    document.createElement('br'),
    createSpan('+ fanfic', [], 'garbage-csl-fanfic'),
    document.createElement('br'),
    document.createElement('br'),
    createSpan('Shameless, your devotion', [], 'garbage-csl-shameless-devotion'),
    document.createElement('br'),
    createSpan('so squee in the wee hours', [], 'garbage-csl-squee'),
    document.createElement('br'),
    emojis,
    document.createElement('br'),
    moreEmojis,
    document.createElement('br'),
    createSpan('it\'s ok (maybe)', []),
    document.createElement('br'),
    createSpan('for an undereducated, jeans-clad', []),
    document.createElement('br'),
    createSpan('girl, but a renowned and aging scholar?', []),
    document.createElement('br'),
    document.createElement('br'),
    createSpan('Your books feel all', []),
    document.createElement('br'),
    createSpan('Giotto, Bosch at times, shocking', []),
    document.createElement('br'),
    createSpan('in the extent and richness of their invention,', []),
    document.createElement('br'),
    createSpan('short on perspective.', []),
    document.createElement('br'),
    document.createElement('br'),
    createSpan('I mock you because they mock you.', []),
    document.createElement('br'),
    createSpan('I mock you because I own you,', []),
    document.createElement('br'),
    createSpan('and I mock everything I own.', []),
    document.createElement('br'),
    createSpan('I\'m not too smart to love, just too', []),
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createJazzModal() {
  const modal = anyModal();
  modal.id = 'garbage-jazz-modal';
  const title = document.createElement('h2');
  title.id = 'garbage-jazz';
  title.append(
    createSpan('Ja', []),
    createSpan('z', ['garbage-red']),
    createSpan('z', []),
  );
  const stanza0 = document.createElement('p');
  stanza0.id = 'garbage-jazz1';
  stanza0.append(
    createSpan('lotioned snarl \'n', []),
    document.createElement('br'),
    createSpan('leopard print slap', []),
    document.createElement('br'),
    createSpan('on red lipstick', []),
    document.createElement('br'),
    createSpan('steel champagne not', []),
  );

  const stanza1 = document.createElement('p');
  stanza1.id = 'garbage-jazz2';
  stanza1.append(
    createSpan('weirdpretty (to', []),
    document.createElement('br'),
    createSpan('intellects less', []),
    document.createElement('br'),
    createSpan('syncopated', []),
    document.createElement('br'),
    createSpan('swooping discord.', []),
  );

  const stanza2 = document.createElement('p');
  stanza2.id = 'garbage-jazz3';
  stanza2.append(
    createSpan('July Sunday', []),
    document.createElement('br'),
    createSpan('flash New Year grins', []),
    document.createElement('br'),
    createSpan('panic zap! scrubs', []),
    document.createElement('br'),
    createSpan('mauve violins', [])
  );

  const stanza3 = document.createElement('p');
  stanza3.id = 'garbage-jazz4';
  stanza3.append(
    createSpan('showtime crash re-', []),
    document.createElement('br'),
    createSpan('boot illusion', []),
  );

  const jacqueline = createImage(GARBAGE_IMAGES.jacqueline, [], 'garbage-jacqueline');

  const contentToAppend = [
    title,
    stanza0,
    stanza1,
    stanza2,
    stanza3,
    jacqueline,
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createPoemModal() {
  const modal = anyModal();
  modal.id = 'garbage-poem-modal';
  const andLustThatDried = document.createElement('span');
  andLustThatDried.append(
    createSpan('and ', []),
    createSpan('lust ', ['garbage-red']),
    createSpan('that dried', []),
  );

  const toDullInside = document.createElement('span');
  toDullInside.append(
    createSpan('to ', []),
    createSpan('dull ', ['garbage-italic']),
    createSpan('inside', []),
  );

  const myMightToTrue = document.createElement('span');
  myMightToTrue.append(
    createSpan('my ', []),
    createSpan('might ', ['garbage-italic']),
    createSpan('to ', []),
    createSpan('true.', ['garbage-italic']),
  );

  const mySoulToTrue = document.createElement('span');
  mySoulToTrue.append(
    createSpan('my soul to ', []),
    createSpan('true.', ['garbage-italic']),
  );

  const whereMyWill = document.createElement('span');
  whereMyWill.append(
    createSpan('where my will, ', []),
    createSpan('that sluggish, saw-toothed', []),
  );

  const beastRollsOverInItsSleep = document.createElement('span');
  beastRollsOverInItsSleep.append(
    createSpan('beast', ['garbage-red']),
    createSpan(', rolls over in its sleep.', [])
  );

  const contentToAppend = [
    createDivWithElements(
      [
        createSpan('snow still falling', [])
      ],
      ['garbage-fresh-start', 'garbage-center-poem'],
    ),
    createDivWithElements(
      [
        createSpan('illdomybestreally.', [])
      ], 
      ['garbage-fresh-start', 'garbage-right-poem', 'italic']
    ),
    createDivWithElements(
      [
        createSpan('The new year\'s a field of snow,', []),
        document.createElement('br'),
        createSpan('a baby', ['garbage-red'])
      ],
      ['garbage-fresh-start', 'garbage-left-poem']
    ),
    createDivWithElements(
      [
        createSpan('The year is new', []),
        document.createElement('br'),
        createSpan('but I am old', []),
        document.createElement('br'),
        createSpan('as din and dust', []),
        document.createElement('br'),
        andLustThatDried,
      ],
      ['garbage-fresh-start', 'garbage-right-poem']
    ),
    createDivWithElements(
      [
        createSpan('Snow turns to sludge,', []),
        document.createElement('br'),
        createSpan('and nothing', [])
      ],
      ['garbage-fresh-start', 'garbage-left-poem'],
    ),
    createDivWithElements(
      [
        toDullInside,
        document.createElement('br'),
        createSpan('the skull. For trust', []),
        document.createElement('br'),
        createSpan('in you I sold', []),
        document.createElement('br'),
        myMightToTrue,
      ],
      ['garbage-fresh-start', 'garbage-right-poem',],
    ),
    createDivWithElements(
      [
        createSpan('grows.', []),
        document.createElement('br'),
        createSpan('The baby, neglected, grows broken,', []),
        document.createElement('br'),
        createSpan('sharp.', []),
      ],
      ['garbage-fresh-start', 'garbage-left-poem'],
    ),
    createDivWithElements(
      [
        createSpan('As truth springs new,', []),
        document.createElement('br'),
        createSpan('it builds the old,', []),
        document.createElement('br'),
        createSpan('old jails of dust', []),
        document.createElement('br'),
        createSpan('and sin. Truth dried', []),
      ],
      ['garbage-fresh-start', 'garbage-right-poem'],
    ),
    createDivWithElements(
      [
        createSpan('It will smash windows.', []),
        document.createElement('br'),
        createSpan('"Get out of my life!" it will wail', []),
      ],
      ['garbage-fresh-start', 'garbage-left-poem'],
    ),
    createDivWithElements(
      [
        createSpan('to mud inside', []),
        document.createElement('br'),
        createSpan('My skull. I trust', []),
        document.createElement('br'),
        createSpan('none since I sold', []),
        document.createElement('br'),
        mySoulToTrue,
      ],
      ['garbage-fresh-start', 'garbage-right-poem'],
    ),
    createDivWithElements(
      [
        createSpan('when its parents', []),
        document.createElement('br'),
        createSpan('dare call on its birthday.', []),
      ],
      ['garbage-fresh-start', 'garbage-left-poem'],
    ),
    createDivWithElements(
      [
        createSpan('imtryingiswearimtrying.', []),
      ],
      ['garbage-fresh-start', 'garbage-right-poem', 'garbage-italic'],
    ),
    createDivWithElements(
      [
        createSpan('My voice ricochets off the walls.', []),
        document.createElement('br'),
        createSpan('I live somewhere else in my head,', []),
        document.createElement('br'),
        whereMyWill,
        document.createElement('br'),
        beastRollsOverInItsSleep,
      ],
      ['garbage-center-poem'],
    ),
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createJennyieModal() {
  const paragraph0 = document.createElement('p');
  paragraph0.innerText = 'I’m Jenny.';
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = 'That’s not my real name — I have no desire to give you my real name. But that’s the name I chose because my character Jennie’s story is the closest this all has to a center, and I want to walk in her shoes for a while. My life is none of your business. Though I’ve shared parts of it, I’ve also made up a lot (a lot) of shit to confuse you, tell a better story, etc. Good luck guessing where fiction starts and the other ends.';
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = 'Let’s review. Jenny, spelled with a y, is yours truly, your delightfully intrusive narrator, your dreamy author, ever inclined to wax philosophical, never inclined to shut her trap.';
  const paragraph3 = document.createElement('p');
  paragraph3.innerText = 'Jennie with an -ie is the small, boring and bored, scarcely real vessel for other beings, Emma, Karen, and the star. However (I forgot to mention this) she too follows Verna to Evernost in the spirit rather than the body.';
  const paragraph4 = document.createElement('p');
  paragraph4.innerText = 'She wanders drearily for a time and then encounters the firebird, who feeds her the fruit made of itself and the star. This grants reality of her own, and, in that, grants it to the Kingdom from which she comes, because Verna’s attempt to make Madeline’s body with the three souls in it into the spouse or embodiment of the Kingdom instead took on Jennie. Thus, Jennie is the stone that the builder rejected. Jennie is the cornerstone. I imagine Jennie’s fate too cruelly sometimes, too kindly others, but I want to be Jennie because of that fate.';
  const paragraph5 = document.createElement('p');
  paragraph5.innerText = 'If you live in the Kingdom (see above about real and unreal — the fact that I, Jenny, invented it in no way denies it independent existence), and this text reaches you in some form, realize this: as I, Jenny, invent, Jennie perceives, and she perceives everything — even me, in our dreadful island universe, composing this text. She perceives my writing and experience, and I invent hers. So this work of art must be seen as a collaboration between the two of us. Jennie, once she returns from Evernost, will tell the tale. The text I, Jenny, write, will be one thing she examines in writing her text. Mine will doubtless be the inferior, and yet perhaps she will deign to include some of it in hers, if only for the amusement.';

  const modal = anyModal();
  modal.id = 'garbage-jennyie-modal';
  const contentToAppend = [
    introductionHeader(),
    paragraph0,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createIntroductionModal() {
  const modal = anyModal();
  modal.id = 'garbage-introduction-modal';
  const paragraph0 = document.createElement('p');
  paragraph0.innerText = 'This is a story and the record of a story’s creation — and much else besides. The two are almost one, eventually. But right now the pieces are scattered. Nothing fits anyway, not really. It’s an illusion of art that it does. If it did in real life we’d run screaming into the grave, most of us.';
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = 'Progress, real progress (I’m not going to say completion, because I doubt it will ever be complete), on Of Evernost is my New Year’s resolution.';
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = 'Let’s be briefly linear here. Once upon a time, this wanted to be a novel: a nice, tangled, evocative fantasy novel, perhaps for children. Perhaps someday it will be that — too. I even have a draft.';
  const paragraph3 = document.createElement('p');
  paragraph3.innerText = 'But, the more I worked, the more I found I cared about Evernost — that inexpressibly marvelous beyond where a portion of the novel takes place — than I did about the Kingdom and about the odd and arbitrary plot I’d imagined for it. In Evernost, time is different, perhaps utterly illusory. Identity is vast and malleable. Evernost is, or almost is, another name for heaven, which is, or almost is, another name for God. As you can see, at this point things multiply and diverge; in form and content, the erstwhile novel becomes a whole lot more abstract than one convoluted story — more abstract and more personal at once. So the work you’ve begun with me, reader, is going to challenge both of us, but I hope you’ll bear with me, because I think what follows is worth your time and effort — and mine.';
  const paragraph4 = document.createElement('p');
  paragraph4.innerText = 'A game it is, a toy, a decoration, in the end — but so is all art, really, perhaps. And even if such things do not help us to live (they can, but I make no promises for this one), they are something many of us live for.';
  const contentToAppend = [
    introductionHeader(),
    paragraph0,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
  ];
  modal.append(...contentToAppend);
  return modal;
}
export function createPreambleModal() {
  const modal = anyModal();
  modal.id = 'garbage-preamble-modal'
  const paragraph0 = document.createElement('p');
  paragraph0.innerText = 'According to Wikipedia, astronomer Fred Hoyle wrote the chance that earth’s life emerged spontaneously is roughly “the chance that a tornado sweeping through a junk-yard might assemble a Boeing 747 from the materials therein.”';
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = 'Let’s say — after all, this is fiction — he was right. Say even that on all the quintillions of planets in our universe, there are only we and our animal cousins for intelligent life. Do you find this chillingly lonely and egocentric? I do. I almost believe it anyway.';
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = 'But — did you catch the word <i>most</i>? There are an infinite number of multiples of twenty but (I can’t help but feel) a much larger infinity of real numbers. Likewise, I feel, there are an infinite number of right ways to play a musical phrase but a much larger infinity of wrong ones. And in cosmogony, say, there are an infinite number of good universes but a much larger infinity of bad ones.';
  const paragraph3 = document.createElement('p');
  paragraph3.innerText = 'Let’s think about good universes (so distant from ours with its death and entropy and empty space). Say that some of them —  even many of them — are aware of one another, and of the bad universes — and, hence, of us. They look at us and see a miracle — but, because we all die, a tragedy.';
  const paragraph4 = document.createElement('p');
  paragraph4.innerText = 'Suppose those who dwell in the good universes create tributes to our universe — worldlets like ours. Let’s call one such worldlet the Kingdom.';
  const paragraph5 = document.createElement('p');
  paragraph5.innerText = 'Many live and die and bear children in the Kingdom, and their children live and die and bear children in it. The worlds outside the Kingdom — let’s call them, collectively, Evernost, because the citizens of the Kingdom do — becomes taboo. But the Kingdom mirrors our world not only in its natural laws but in its history. As we begin to break down taboos, so do they. And, when they find out what lies beyond their walls, almost every single citizen of the Kingdom deserts it.';
  const paragraph6 = document.createElement('p');
  paragraph6.innerText = 'So lives and dies the Kingdom — except that the will to begin it anew is as perennial as the desire to end it — and so! A cycle. All the while, our poor world is trapped out, forever and ever. There: let that be the theme of my little work — at the very least, if you’re literal-minded.'
  const contentToAppend = [
    introductionHeader(),
    paragraph0,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
  ]
  modal.append(...contentToAppend);
  return modal;
}
function ambitionFirstElevated() {
  const elevatedDiction = document.createElement('em');
  const grantMe = createSpan('Grant me to make', ['garbage-amb1']);
  const asFreshAsLong = createSpan('as fresh as long as broad as deep', []);
  const ecstasy = createSpan('ecstasy leaving nothing', ['garbage-amb2']);
  const behind = createSpan('behind', ['garbage-amb3']);
  const contentToAppend = [
    grantMe,
    document.createElement('br'),
    asFreshAsLong,
    document.createElement('br'),
    ecstasy,
    document.createElement('br'),
    behind,
  ];
  elevatedDiction.append(...contentToAppend);
  return elevatedDiction;
}
function ambitionSecondElevated() {
  const elevatedDiction = document.createElement('em');
  const grantMe = createSpan('Grant me to make', []);
  const lawsScaffolding = createSpan('law\'s scaffolding', ['garbage-amb3']);
  const jungleGym = createSpan('jungle gym  (grow', ['garbage-amb4']);
  const wings = createSpan('wings', ['garbage-amb1']);
  const escape = createSpan('escape the bars),', [])

  const contentToAppend = [
    grantMe,
    document.createElement('br'),
    document.createElement('br'),
    lawsScaffolding,
    document.createElement('br'),
    jungleGym,
    document.createElement('br'),
    wings,
    document.createElement('br'),
    escape,
  ];
  elevatedDiction.append(...contentToAppend);
  return elevatedDiction;
}
function ambitionThirdElevated() {
  const elevatedDiction = document.createElement('em');
  const grantMe = createSpan('Grant me to make', []);
  const again = createSpan('again', ['garbage-amb2']);
  const life = createSpan('life', []);
  const inComplexity = createSpan('in complexity but show', ['garbage-amb3']);
  const itIsOne = createSpan('it is one', ['garbage-amb5']);
  const dropOfWater = createSpan('drop of water in the sea', ['garbage-amb1']);
  const contentToAppend = [
    grantMe,
    document.createElement('br'),
    again,
    document.createElement('br'),
    life,
    document.createElement('br'),
    inComplexity,
    document.createElement('br'),
    itIsOne,
    document.createElement('br'),
    dropOfWater,
  ];
  elevatedDiction.append(...contentToAppend);
  return elevatedDiction;
}
export function createAmbitionModal() {
  const modal = anyModal();
  modal.id = 'garbage-ambition-modal';
  const cantEvenFind = createSpan('(can’t even find', []);
  const aFreshIrony = createSpan('a fresh irony, who am I fooling?', [])
  const sunFlowersRainbows = createSpan('(Sun, flowers, rainbows, stars,', []);
  const decentEnough = createSpan('decent enough images, trite', []);
  const triteComplaint = createSpan('is a trite complaint, but, like, just waving them at you', []);
  const doesntCutIt = createSpan('doesn\'t cut it. Why can\'t I make them live?)', []);
  const theWordComplexity = document.createElement('span');
  theWordComplexity.append(createSpan('The word ', []));
  const complexityItself = document.createElement('i');
  complexityItself.innerText = 'complexity';
  theWordComplexity.append(complexityItself);
  const showsImTooSimple = createSpan('shows I\'m too simple', []);
  const forAPoet = createSpan('for a poet. Someone realistic would say, "Grant me', []);
  const realisticAmbitions = createSpan('realistic ambitions." I\'ll say,', []);
  const lessFuckingStupid = createSpan('"Make me less fucking stupid."', []);

  const topLevelToAppend = [
    ambitionFirstElevated(),
    document.createElement('br'),
    document.createElement('br'),
    cantEvenFind,
    document.createElement('br'),
    aFreshIrony,
    document.createElement('br'),
    document.createElement('br'),
    ambitionSecondElevated(),
    document.createElement('br'),
    document.createElement('br'),
    sunFlowersRainbows,
    document.createElement('br'),
    decentEnough,
    document.createElement('br'),
    triteComplaint,
    document.createElement('br'),
    doesntCutIt,
    document.createElement('br'),
    document.createElement('br'),
    ambitionThirdElevated(),
    document.createElement('br'),
    document.createElement('br'),
    theWordComplexity,
    document.createElement('br'),
    showsImTooSimple,
    document.createElement('br'),
    forAPoet,
    document.createElement('br'),
    realisticAmbitions,
    document.createElement('br'),
    lessFuckingStupid,
  ];
  modal.append(...topLevelToAppend);
  return modal;
}
export function createFirebirdModal() {
  const modal = anyModal();
  modal.id = 'garbage-firebird-modal';
  const firebird = createImage(GARBAGE_IMAGES.firebird, [], 'garbage-firebird');
  modal.append(firebird);
  return modal;
}
export function createGarbageModals () {
  const garbageSelection = [...Array(26).keys()];
  const modals: HTMLDivElement[] = [];
  for (let i = 0; i < 12; i++) {
    const garbageNumber = garbageSelection.splice(Math.floor(Math.random() * garbageSelection.length), 1)[0];
    modals.push(makeGarbageModal(i, garbageNumber));
  }
  return modals;
}