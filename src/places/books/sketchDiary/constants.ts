import { ImageCatalog, SHARED_IMAGES } from "../../../shared/constants";
import { Chapters } from "../reader.constants";

export const SKETCH_DIARY_IMAGES: ImageCatalog = {
  ambassador0: {
    path: new URL('../../../assets/images/books/mereReality/ambassador0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Light sketch of man with beard; click to go forward',
    shouldHide: true,
  },
  ambassador1: {
    path: new URL('../../../assets/images/books/mereReality/ambassador1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard; click to go backward',
    shouldHide: true,
  },
  ambassador2: {
    path: new URL('../../../assets/images/books/mereReality/ambassador2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, dark browns added; click to go forward',
    shouldHide: true,
  },
  ambassador3: {
    path: new URL('../../../assets/images/books/mereReality/ambassador3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, mid-brown skin tones added; click to go backward',
    shouldHide: true,
  },
  ambassador4: {
    path: new URL('../../../assets/images/books/mereReality/ambassador4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, dark browns added for hair; click to go forward',
    shouldHide: true,
  },
  ambassador5: {
    path: new URL('../../../assets/images/books/mereReality/ambassador5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, mid-brown skin tones added; click to go backward',
    shouldHide: true,
  },
  ambassador6: {
    path: new URL('../../../assets/images/books/mereReality/ambassador6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, lighter brown skin tones added; click to go forward',
    shouldHide: true,
  },
  ambassador7: {
    path: new URL('../../../assets/images/books/mereReality/ambassador7.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked sketch of man with beard, light skin and background tones added; click to go backward',
  },
  niobe0: {
    path: new URL('../../../assets/images/books/mereReality/niobe0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked blue sketch of woman looking down; click to go forward',
    shouldHide: true,
  },
  niobe1: {
    path: new URL('../../../assets/images/books/mereReality/niobe1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked blue sketch of woman looking down, black facial feature outlines added; click to go backward',
    shouldHide: true,
  },
  niobe2: {
    path: new URL('../../../assets/images/books/mereReality/niobe2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked blue sketch of woman looking down, further black ink shading; click to go forward',
    shouldHide: true,
  },
  niobe3: {
    path: new URL('../../../assets/images/books/mereReality/niobe3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked blue sketch of woman looking down, splash of dull gold highlight across face; click to go backward',
    shouldHide: true,
  },
  niobe4: {
    path: new URL('../../../assets/images/books/mereReality/niobe4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Inked blue sketch of woman looking down, light paper tones added; click to go forward',
  },
  creep0: {
    path: new URL('../../../assets/images/books/mereReality/creep0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale sketch of man with watch; click to go backward',
    shouldHide: true,
  },
  creep1: {
    path: new URL('../../../assets/images/books/mereReality/creep1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Darker sketch of man with watch; click to go forward',
    shouldHide: true,
  },
  creep2: {
    path: new URL('../../../assets/images/books/mereReality/creep2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of man with watch, darker taupe skin tones added; click to go backward',
    shouldHide: true,
  },
  creep3: {
    path: new URL('../../../assets/images/books/mereReality/creep3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of man with watch, pale blue hat added; click to go forward',
    shouldHide: true,
  },
  creep4: {
    path: new URL('../../../assets/images/books/mereReality/creep4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of man with watch, pink skin tones added; click to go backward',
    shouldHide: true,
  },
  creep5: {
    path: new URL('../../../assets/images/books/mereReality/creep5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of man with watch, ivory and yellowish tones added; click to go forward',
    shouldHide: true,
  },
  creep6: {
    path: new URL('../../../assets/images/books/mereReality/creep6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Colored marker sketch of man with watch, completed; click to go forward',
  },
  beau0: {
    path: new URL('../../../assets/images/books/mereReality/beau0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch animal eye; click to go forward',
    shouldHide: true,
  },
  beau1: {
    path: new URL('../../../assets/images/books/mereReality/beau1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch dog\'s head, completed; click to go forward',
    shouldHide: true,
  },
  beau2: {
    path: new URL('../../../assets/images/books/mereReality/beau2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch of dog\'s head and collar; click to go forward',
    shouldHide: true,
  },
  beau3: {
    path: new URL('../../../assets/images/books/mereReality/beau3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch of dog\'s torso and front leg; click to go forward',
    shouldHide: true,
  },
  beau4: {
    path: new URL('../../../assets/images/books/mereReality/beau4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch of dog with two legs showing; click to go forward',
    shouldHide: true,
  },
  beau5: {
    path: new URL('../../../assets/images/books/mereReality/beau5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black sketch of dog with all legs showing; click to go forward',
    shouldHide: true,
  },
  beau6: {
    path: new URL('../../../assets/images/books/mereReality/beau6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Complete black sketch of dog with all legs and tail; click to go forward',
  },
  knitter0: {
    path: new URL('../../../assets/images/books/mereReality/knitter0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue ink beginnings of drawing of woman bending her head over; Click to go forward',
    shouldHide: true,
  },
  knitter1: {
    path: new URL('../../../assets/images/books/mereReality/knitter1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue ink beginnings of drawing of woman with black glasses added; Click to go forward',
    shouldHide: true,
  },
  knitter2: {
    path: new URL('../../../assets/images/books/mereReality/knitter2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue and black ink drawing of woman in glasses with brown shades added; Click to go forward',
    shouldHide: true,
  },
  knitter3: {
    path: new URL('../../../assets/images/books/mereReality/knitter3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue, black, and brown ink drawing of woman in glasses with red knitting project added; Click to go forward',
    shouldHide: true,
  },
  knitter4: {
    path: new URL('../../../assets/images/books/mereReality/knitter4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Ink drawing of woman knitting with pencil texture added; Click to go forward',
    shouldHide: true,
  },
  knitter5: {
    path: new URL('../../../assets/images/books/mereReality/knitter5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Ink and pencil drawing of woman knitting with paper color added; Click to go forward',
    shouldHide: true,
  },
  knitter6: {
    path: new URL('../../../assets/images/books/mereReality/knitter6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Completed ink and pencil drawing of woman knitting something red; click to go forward',
    shouldHide: true,
  },
  wrestle0: {
    path: new URL('../../../assets/images/books/mereReality/wrestle0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale sketch of woman and boy wrestling; click to go forward',
    shouldHide: true,
  },
  wrestle1: {
    path: new URL('../../../assets/images/books/mereReality/wrestle1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Darker ballpoint pen sketch of woma and boy wrestling; click to go forward',
    shouldHide: true,
  },
  wrestle2: {
    path: new URL('../../../assets/images/books/mereReality/wrestle2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of woman and boy wrestling with lighter blue of woman\'s jeans and jacket added; click to go forward',
    shouldHide: true,
  },
  wrestle3: {
    path: new URL('../../../assets/images/books/mereReality/wrestle3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of woman and boy wrestling with olive green of boy\'s hoodie added; click to go forward',
    shouldHide: true,
  },
  wrestle4: {
    path: new URL('../../../assets/images/books/mereReality/wrestle4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of woman and boy wrestling with woman\'s red hair added; click to go forward',
    shouldHide: true,
  },
  wrestle5: {
    path: new URL('../../../assets/images/books/mereReality/wrestle5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of woman and boy wrestling with yellowish skin tones added; click to go forward',
    shouldHide: true,
  },
  wrestle6: {
    path: new URL('../../../assets/images/books/mereReality/wrestle6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Sketch of woman and boy wrestling with paper tones added; click to go forward',
    shouldHide: true,
  },
  wrestle7: {
    path: new URL('../../../assets/images/books/mereReality/wrestle7.jpg?as=webp&height=820', import.meta.url),
    alt: 'Complete sketch of woman and boy wrestling; click to go forward',
  },
  swans0: {
    path: new URL('../../../assets/images/books/mereReality/swans0.jpg?as=webp&width=640', import.meta.url),
    alt: 'Light outline of one swan biting another; click to go forward',
    shouldHide: true,
  },
  swans1: {
    path: new URL('../../../assets/images/books/mereReality/swans1.jpg?as=webp&width=640', import.meta.url),
    alt: 'Darker outline of one swan biting another with park in background in dark greens; click to go forward',
    shouldHide: true,
  },
  swans2: {
    path: new URL('../../../assets/images/books/mereReality/swans2.jpg?as=webp&width=640', import.meta.url),
    alt: 'One swan biting another in a park with red of turning trees and red-brown of dirt added; click to go forward',
    shouldHide: true,
  },
  swans3: {
    path: new URL('../../../assets/images/books/mereReality/swans3.jpg?as=webp&width=640', import.meta.url),
    alt: 'One swan biting another in a park with green grass and trees added; click to go forward',
    shouldHide: true,
  },
  swans4: {
    path: new URL('../../../assets/images/books/mereReality/swans4.jpg?as=webp&width=640', import.meta.url),
    alt: 'One swan biting another in a park with gray mountains added; click to go forward',
    shouldHide: true,
  },
  swans5: {
    path: new URL('../../../assets/images/books/mereReality/swans5.jpg?as=webp&width=640', import.meta.url),
    alt: 'One swan biting another in a park with purple highlights added to the mountains; click to go forward',
    shouldHide: true,
  },
  swans6: {
    path: new URL('../../../assets/images/books/mereReality/swans6.jpg?as=webp&width=640', import.meta.url),
    alt: 'One swan biting another in a park with blue sky added',
    shouldHide: true,
  },
  swans7: {
    path: new URL('../../../assets/images/books/mereReality/swans7.jpg?as=webp&width=640', import.meta.url),
    alt: 'Completed marker drawing of one swan biting another in a park',
  },
  blue0: {
    path: new URL('../../../assets/images/books/sketchDiary/blue0.jpg?as=webp&width=640', import.meta.url),
    alt: 'Light blackish-blue sketch of woman with messy hair',
    shouldHide: true,
  },
  blue1: {
    path: new URL('../../../assets/images/books/sketchDiary/blue1.jpg?as=webp&width=640', import.meta.url),
    alt: 'Blackish-blue sketch of woman with messy hair with lighter blue shading',
    shouldHide: true,
  },
  blue2: {
    path: new URL('../../../assets/images/books/sketchDiary/blue2.jpg?as=webp&width=640', import.meta.url),
    alt: 'Darker blackish-blue sketch of woman with messy hair',
    shouldHide: true,
  },
  blue3: {
    path: new URL('../../../assets/images/books/sketchDiary/blue3.jpg?as=webp&width=640', import.meta.url),
    alt: 'Completed blue ballpoint sketch of woman with messy hair',
  },
  goldcat0: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black strokes of paint suggesting a cat',
    shouldHide: true,
  },
  goldcat1: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black strokes of paint suggesting a cat with reddish highlights',
    shouldHide: true,
  },
  
  goldcat2: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Red, black, and tan painted sketch of a cat',
    shouldHide: true,
  },
  goldcat3: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Painting of yellow-gold cat',
    shouldHide: true,
  },
  goldcat4: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Painting of yellow-gold cat with light blue highlights',
    shouldHide: true,
  },
  goldcat5: {
    path: new URL('../../../assets/images/books/sketchDiary/goldcat5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Completed painting of yellow-gold cat',
  },
  haircut0: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Red stripe extending almost halfway across a white background',
    shouldHide: true,
  },
  haircut1: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Red stripe on stylized black outline of woman getting haircut',
    shouldHide: true,
  },
  haircut2: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Woman getting haircut with gray cape beside gray and red box',
    shouldHide: true,
  },
  haircut3: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Woman getting haircut with gray cape beside gray and red box on green counter',
    shouldHide: true,
  },
  haircut4: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Woman getting haircut from strawberry blonde',
    shouldHide: true,
  },
  haircut5: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Drawing of woman getting haircut in her house with pale blue background and peach light coming in through window',
    shouldHide: true,
  },
  haircut6: {
    path: new URL('../../../assets/images/books/sketchDiary/haircut6.JPG?as=webp&height=820', import.meta.url),
    alt: 'Completed drawing of woman getting haircut in her house'
  },
  indigo0: {
    path: new URL('../../../assets/images/books/sketchDiary/indigo0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue-black sketch of light radiating from white center',
    shouldHide: true,
  },
  indigo1: {
    path: new URL('../../../assets/images/books/sketchDiary/indigo1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue-black sketch of light radiating from humanoid white center',
    shouldHide: true,
  },
  indigo2: {
    path: new URL('../../../assets/images/books/sketchDiary/indigo2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Blue-black sketch of light radiating from white human figure with dark patterns',
    shouldHide: true,
  },
  indigo3: {
    path: new URL('../../../assets/images/books/sketchDiary/indigo3.png?as=webp&height=820', import.meta.url),
    alt: 'Completed blue-black sketch of light radiating from white human figure',
  },
  knitterAbstract0: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized black sketch of woman looking down in chair',
    shouldHide: true,
  },
  knitterAbstract1: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized black sketch of woman looking down in chair with blue outlines',
    shouldHide: true,
  },
  knitterAbstract2: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized black sketch of woman looking down in chair colored over with blue marker.',
    shouldHide: true,
  },
  knitterAbstract3: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized black sketch of woman looking at red knitting in chair colored over with blue marker',
    shouldHide: true,
  },
  knitterAbstract4: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized sketch of woman looking at red knitting with peach light coming through glass bricks',
    shouldHide: true,
  },
  knitterAbstract5: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Stylized sketch of woman looking at red knitting with peach and yellow light coming through glass bricks',
    shouldHide: true,
  },
  knitterAbstract6: {
    path: new URL('../../../assets/images/books/sketchDiary/knitter-abstract6.jpg?as=webp&height=820', import.meta.url),
    alt: 'Completed stylized sketch of woman who blends into blue background with red knitting and light coming through glass bricks',
  },
  orange0: {
    path: new URL('../../../assets/images/books/sketchDiary/orange1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Curving lines of dark orange dots',
    shouldHide: true,
  },
  orange1: {
    path: new URL('../../../assets/images/books/sketchDiary/orange2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Curving lines of dark orange dots outlining yellow gold roundish shapes',
    shouldHide: true,
  },
  orange2: {
    path: new URL('../../../assets/images/books/sketchDiary/orange3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Abstract orange-outlined half-peeled orange',
    shouldHide: true,
  },
  orange3: {
    path: new URL('../../../assets/images/books/sketchDiary/orange4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Abstract half-peeled orange with olive green shadow',
    shouldHide: true,
  },
  orange4: {
    path: new URL('../../../assets/images/books/sketchDiary/orange5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Completed marker sketch of half-peeled orange',
  },
  pins0: {
    path: new URL('../../../assets/images/books/sketchDiary/pins1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Rounded grid of red marker lines with dots and squiggles above',
    shouldHide: true,
  },
  pins1: {
    path: new URL('../../../assets/images/books/sketchDiary/pins2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Black safety pin and threaded needle in red pincushion with red dots representing pinheads above',
    shouldHide: true,
  },
  pins2: {
    path: new URL('../../../assets/images/books/sketchDiary/pins3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pincushion with red and yellow pinheads, threaded needle, and safety pin',
    shouldHide: true,
  },
  pins3: {
    path: new URL('../../../assets/images/books/sketchDiary/pins4.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pincushion with red, yellow, and blue pinheads, threaded needle, and safety pin',
    shouldHide: true,
  },
  pins4: {
    path: new URL('../../../assets/images/books/sketchDiary/pins5.jpg?as=webp&height=820', import.meta.url),
    alt: 'Completed stylized marker sketch of pincushion with colorful pinheads, safety pin, and threaded needle',
  },
  suncat0: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat0.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale yellow marker-light shining on tan ledge; suggestion of white cat outline in negative space',
    shouldHide: true,
  },
  suncat1: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat1.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale yellow marker streaks down onto darker tan wood ledge; white cat outline in negative space',
    shouldHide: true,
  },
  suncat2: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat2.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale yellow marker streaks down onto darker tan wood ledge; green-eyed white cat outline in negative space',
    shouldHide: true,
  },
  suncat3: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat3.jpg?as=webp&height=820', import.meta.url),
    alt: 'Pale yellow marker streaks down onto darker tan wood ledge with black outline of a cat',
    shouldHide: true,
  },
  suncat4: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat4.jpg?as=webp&height=820', import.meta.url),
    alt: 'green-eyed cat outlined in black on wooden ledge with red accents',
    shouldHide: true,
  },
  suncat5: {
    path: new URL('../../../assets/images/books/sketchDiary/suncat5.JPG?as=webp&height=820', import.meta.url),
    alt: 'completed marker sketch of green-eyed cat outlined in black on wooden ledge with red accents',
  },
};
export const SKETCH_DIARY_CHAPTERS: Chapters = [
  [
    {
      heading: 'Knitter',
      text: `Her love was what she made and not herself: in this case, the grandson for whom she knit the sweater. (Jennie understood. Jennie loves herself, yes, but next to — that? Why even bother!?)`,
      leftImage: SKETCH_DIARY_IMAGES.knitter0,
      rightImage: SKETCH_DIARY_IMAGES.knitter0,
    },
    {
      text: `When Debbie met Jennie’s eyes, she saw at first some kid who would make a mess, one of her son or grandson’s friends. Even this inspired friendly humor, but she realized Jennie was quiet and not a material being, given that Jennie stood in front of her armchair where she sat with her beer and her cozy mystery and her knitting and had not entered the room in any way.`,
      leftImage: SKETCH_DIARY_IMAGES.knitter1,
      rightImage: SKETCH_DIARY_IMAGES.knitter1,
    },
    {
      text: `This was not as concerning as she would have expected. She concluded she was dreaming, and Jennie produced something of her own, something more immaterial than she, Jennie — like a painting or a window into another world in the shape of a garment, a robe shining with color and light. Debbie saw it was and was for another object of devotion, and they exchanged sly smiles.`,
      leftImage: SKETCH_DIARY_IMAGES.knitter2,
      rightImage: SKETCH_DIARY_IMAGES.knitter2,
    },
    {
      text: `Jennie let Debbie go back to work — but as she went splashed light on the sweater and the woman’s hand, and it was revealed as the same kind of thing Jennie was making.`,
      leftImage: SKETCH_DIARY_IMAGES.knitter3,
      rightImage: SKETCH_DIARY_IMAGES.knitter3,
    },
    {
      text: `Her grandson would value these knitted sweaters and hats, wearing them with an affectionate, self-deprecating grin well into adulthood, and this flame-red one would be his daughter’s favorite when she was nine, even though her parents and friends found it — loud, ungraceful, ungirly, and, of course, there was a hole in it by that point.`,
      leftImage: SKETCH_DIARY_IMAGES.knitter4,
      rightImage: SKETCH_DIARY_IMAGES.knitter4,
    },
    {
      text: `She wore it when she was feeling sad for two years, and when she outgrew it she kept it — her own son would not understand the fuss until one twilight when it almost seemed to glow, and he saw in it — his mother as a girl, and then his grandfather as a boy, and then his great-great-grandmother knitting, and then an ageless flash of yellow-gold light that parted the world.`,
      leftImage: SKETCH_DIARY_IMAGES.knitter5,
      rightImage: SKETCH_DIARY_IMAGES.knitter5,
    },
    {
      text: `(The original grandson, later grandfather, would have chosen as his favorite a different sweater, one from later years, a baggy, sturdy navy blue creation that he wore out hiking with their dog — a sweet red dog, not unlike Ruff from Jennie’s childhood — and their daughter).`,
      leftImage: SKETCH_DIARY_IMAGES.knitter6,
      rightImage: SKETCH_DIARY_IMAGES.knitter6,
    },
  ], // knitting
  [
    {
      heading: 'Richert',
      text: `The worst of James Richert is also the best: he’s a lecher, and lechery paints more beautiful and terrible images in even his unimaginative mind than any number of golf tournaments or conservative quips or mildly sleazy business practices.`,
      leftImage: SKETCH_DIARY_IMAGES.creep0,
      rightImage: SKETCH_DIARY_IMAGES.creep0,
    },
    {
      text: `The conservative quips — once they were something you said for the sake of saying something. But now the second-worst of him is the second-best — conservative politics are a conviction, one that even  stretches to concern for his teenage daughter, who’s saying she’s lesbian. Though she hates him even more when he frames it as worry than when he just snorts and sneers. `,
      leftImage: SKETCH_DIARY_IMAGES.creep1,
      rightImage: SKETCH_DIARY_IMAGES.creep1,
    },
    {
      text: `He glanced over to the other picnic table, at ten-year-old Jennie and her hot dog. “One little piggy.” His colleague, an older gentleman in an impeccable suit, made no reply, more inclined to wonder where the girl's parents were and why she looked so sad. Both men glanced again, and she caught them with dull brown eyes.`,
      leftImage: SKETCH_DIARY_IMAGES.creep2,
      rightImage: SKETCH_DIARY_IMAGES.creep2,
    },
    {
      text: `The colleague was relieved. He’d been wondering if he should offer to call someone for her. Her smile makes him think maybe he did, maybe he helped her find a parent or a teacher. He had a sense of ineffable warmth remembering her for years to come.`,
      leftImage: SKETCH_DIARY_IMAGES.creep3,
      rightImage: SKETCH_DIARY_IMAGES.creep3,
    },
    {
      text: `Richert looked down, trapped in something gluey and burning. Look up again — there's Jennie, finishing up her hot dog, bits of iceberg lettuce scattered on the wood picnic table. She glanced at him, snorted like a pig. There were pictures in the scalding. She was there too, though she’s sort of smiling, middle aged. And a flash of perfect beauty.`,
      leftImage: SKETCH_DIARY_IMAGES.creep4,
      rightImage: SKETCH_DIARY_IMAGES.creep4,
    },
    {
      text: `Such sights upset everything in a life. Richert broke up with his wife, apologized in tears to his daughter (who told him to go to hell in so many words and almost meant it), and nearly blew his brains out. Twenty years later, living alone, writing reams about the meaning of life, he's sure Jennie was the luckiest thing that ever happened to him.`,
      leftImage: SKETCH_DIARY_IMAGES.creep5,
      rightImage: SKETCH_DIARY_IMAGES.creep5,
    },
    {
      text: `He explains this to his visiting colleague, who thinks he’s lost his mind. He thinks the colleague’s gains were ill-gotten and they should both give their remaining net worth to some charity or other, and the colleague is offended. The daughter and her mother never call, and Richert thinks that's more or less fair. He hopes someday they’ll see what he saw.`,
      leftImage: SKETCH_DIARY_IMAGES.creep6,
      rightImage: SKETCH_DIARY_IMAGES.creep6,
    },
  ], // creep
  [
    {
      heading: '6/13 - Orange',
      text: `“Needles and pins, needles and pins, when a man marries his troubles begin”: nursery rhyme`,
      leftImage: SKETCH_DIARY_IMAGES.pins0,
      rightImage: SKETCH_DIARY_IMAGES.orange0,
    },
    {
      text: `Abstractifying random objects. I like the orange, the layers and strangeness of color, green and gold, domestic sunlight, half-peeled, half-identifiable. The pincushion, schematic and child-bright, all primary colors, is not as interesting.`,
      leftImage: SKETCH_DIARY_IMAGES.pins1,
      rightImage: SKETCH_DIARY_IMAGES.orange1,
    },
    {
      heading: '8/11',
      text: `I didn't think these meant anything other than an exercise. I didn't think of the golden fruit and the needles. The fruit — the fruit I ate elsewhere (am eating), sweet and burning and full of innumerable subtle flavors. But — turned into a watery thing seen through glass, all about distortion and the tension between wild desire and mundane reality.`,
      leftImage: SKETCH_DIARY_IMAGES.pins2,
      rightImage: SKETCH_DIARY_IMAGES.orange2,
    },
    {
      text: `Re needles, a poem... 
Needles bind soft smooth silk or blotched pink skin. 
Exquisite, gold-wrought, white-hot needles pierce 
where the eye falls, too fine to see or stop.
That’s how the seamstress marks our lives on us.`,
      leftImage: SKETCH_DIARY_IMAGES.pins3,
      rightImage: SKETCH_DIARY_IMAGES.orange3,
    },
    {
      text: `Debbie looked next upon the citrus fruit. Jennie, opposite her, said — “I’m eating it — it’s fine — you should have a bite too.”
“Who are you?” Debbie asked.`,
      leftImage: SKETCH_DIARY_IMAGES.pins4,
      rightImage: SKETCH_DIARY_IMAGES.orange4,
    },
  ], // orange
  [
    {
      heading: 'Ambassador',
      text: `A soul of earth. Geoff spent the past few years with a nonprofit teaching drama. Loves his girlfriend, whiskey connoisseur. He has admirers, friends and coworkers and students. Warmth combined with vision will do that for a person.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador0,
      rightImage: SKETCH_DIARY_IMAGES.ambassador0,
     },
     {
      text: `He sees beyond — that's why he's in theater in the first place. I mean, the drama and artificiality, the humor, too. But desire took in him the shape of a longing for size and great deeds. As a kid, he wanted to change the world.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador1,
      rightImage: SKETCH_DIARY_IMAGES.ambassador1,
     },
     {
      text: `Jennie was — maybe a dream. Maybe not. If he was asleep he’d be damned, but if it made any sense at all, he’d be damned to hell and back. Jennie was a fat, mousy little white girl. He wanted her to come out of her shell, but she had stage fright, or something. "C'mon," he said. "You can be the princess. The prince. The bad guy. Anyone." Her refusal was absolute.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador2,
      rightImage: SKETCH_DIARY_IMAGES.ambassador2,
     },
     {
      text: `“That’s for you,” she said. “Not for me.” A trace of sadness in it, but also humor. Her dull brown puppy eyes met his, then, and he saw — a fantasy world, with magic and heroes and villains, the kind of thing he’d dreamed about as a bookworm boy.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador3,
      rightImage: SKETCH_DIARY_IMAGES.ambassador3,
     },
     {
      text: `She was multitudes, like him, except it was real.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador4,
      rightImage: SKETCH_DIARY_IMAGES.ambassador4,
     },
     {
      text: `They walked along the edge of a corn field under a hot blue sky, overhanging trees protecting him from the sun. (She walked in it, glanced over at it without squinting.) He found she loved his smiles and his roles too, but she wanted more from him, and he didn’t have more to offer.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador5,
      rightImage: SKETCH_DIARY_IMAGES.ambassador5,
     },
     {
      text: `He had more. He writhed and yelled when more hit him, for an instant — where it came from he was not sure, then or later. She smiled ever so slightly, for the first time, and he literally bit his tongue to keep from cursing her out.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador6,
      rightImage: SKETCH_DIARY_IMAGES.ambassador6,
     },
     {
      text: `Awe overcame him, and she smiled again and pointed to what he thought was a bird but turned out to be a sunset, fiery golds and reds, but still somewhat winged in shape, and set out toward it, and it grew for a time before fading.`,
      leftImage: SKETCH_DIARY_IMAGES.ambassador7,
      rightImage: SKETCH_DIARY_IMAGES.ambassador7,
     },
  ], // ambassador
  [
    {
      heading: 'Wrestle',
      text: `Jacqueline and Dave had never been on a beach, but Jacqueline had wanted to for a long time. Why did she finally find herself on a beach in weather like this, though, where she couldn’t even try out her aging bikini body (though she was not as old as she had once been)? It was windy, almost intolerable.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle0,
      rightImage: SKETCH_DIARY_IMAGES.wrestle0,
    },
    {
      text: `Dave was not as fond of Jacqueline as she was of him — she scared him, and what she saw as play he regarded as enmity, being a child. He looked to the side of people, even Jennie, though he was fonder of Jennie than of most. Mom was part of the world, a part of the world he could not (practically or emotionally) do without, but rarely a relevant or interesting part.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle1,
      rightImage: SKETCH_DIARY_IMAGES.wrestle1,
    },
    {
      text: `Jennie was nowhere in sight. He wanted to find her. Jacqueline did not remember her.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle2,
      rightImage: SKETCH_DIARY_IMAGES.wrestle2,
    },
    {
      text: `Right now Jacqueline could not understand what Dave was insisting on, thought it was part of an elaborate game of make-believe. Dave was, as far as she knew, an only child.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle3,
      rightImage: SKETCH_DIARY_IMAGES.wrestle3,
    },
    {
      text: `Jennie sneaked up behind them, gave Dave a wink and a thumbs-up. He wriggled free and ran up the gray beach, his bare feet making puddles in the sand, disregarding rocks and jellyfish Mom and Jennie both would rather he attend to, but luck was with him. Still, Jennie was too far away to reach easily.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle4,
      rightImage: SKETCH_DIARY_IMAGES.wrestle4,
    },
    {
      text: `Jennie reached him easily — for her. They were together almost at once, in a sunny green field. But he ran across miles of beach, then climbed into rocky caves, up sheer slopes, and into shallow water. When the tide came in, and he dove into it, and eventually he arrived at a green space, lit by sun, where she was.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle5,
      rightImage: SKETCH_DIARY_IMAGES.wrestle5,
    },
    {
      text: `They told each other stories: Dave of death-defying feats among the rocks, of the octopus he may or may not have seen, Jennie of a firebird and the stars. He asked her to come back. She refused. It was too far, too dull — she would be like a trapped seabird. He was like a trapped seabird. He asked to join her.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle6,
      rightImage: SKETCH_DIARY_IMAGES.wrestle6,
    },
    {
      text: `She told him to go dig a hole. Digging the hole would be finishing his life on earth, and when he was done, he could come back.`,
      leftImage: SKETCH_DIARY_IMAGES.wrestle7,
      rightImage: SKETCH_DIARY_IMAGES.wrestle7,
    },
  ], // wrestling
  [
    {
      heading: 'Friend',
      text: `Beau was so glad to see Jennie there were no words. Not that Beau knew many words — mostly the relevant ones, like “walk,” “heel,” “sit,” “lie down,” and, naturally, “Beau.” Beau was so glad he leaped up on her and she smiled and gave him a shy little hug.  Before that — there'd been no one who smelled human or doglike or even catlike or squirrellike.`,
      leftImage: SKETCH_DIARY_IMAGES.beau0,
      rightImage: SKETCH_DIARY_IMAGES.beau0,
    },
    {
      text: `He’d shared his old house with a cat. The cat had not liked him, nor he her, but they’d gotten to care about each other, he hoped. They had, Jennie reassured him. The cat had found comfort in Beau, even if he was annoying and loud and jumpy and licky and a dog. Jennie conveyed as much of this as she could, and he laughed. He was all those things and felt a little bad about it.`,
      leftImage: SKETCH_DIARY_IMAGES.beau1,
      rightImage: SKETCH_DIARY_IMAGES.beau1,
    },
    {
      text: `Beau had met Jennie and liked her — met her as an adult, that was. They hadn’t interacted much. She’d been in her own world, not interested in anyone. He understood her now, and, through her, more. He followed her off on a path somewhere brighter than he’d ever followed his real humans, no leash. Jennie was a quiet kid, not like David and Holly’s three girls.`,
      leftImage: SKETCH_DIARY_IMAGES.beau2,
      rightImage: SKETCH_DIARY_IMAGES.beau2,
    },
    {
      text: `He felt he had to be polite to her, and to wherever they were going. Courtesy, solemnity — or something — came over him. He did not want to go further at some point and left — wandered off into a green field. She said, “Come back when — it’s time.” And he would. He and That could wait for each other.`,
      leftImage: SKETCH_DIARY_IMAGES.beau3,
      rightImage: SKETCH_DIARY_IMAGES.beau3,
    },
    {
      text: `He chased a bee. The bee stung him, but it didn’t hurt. It almost tickled. He followed the bee into a thicket where he saw a ghost sadder than he had been, under trees so thick the sun could not come through. He tried to play with the ghost, lick it. It could not see him. He returned to the field and found David — but David was younger now, Jennie’s age if even that.`,
      leftImage: SKETCH_DIARY_IMAGES.beau4,
      rightImage: SKETCH_DIARY_IMAGES.beau4,
    },
    {
      text: `Young David did not at first know the strange dog — this was the wrong dog. The right dog was a curly, sweet golden retriever. But the new dog was faster, better at catch, than Ruff ever had been, and besides, he started to feel he should know this dog. Eventually he remembered his adulthood in a strange, small world, and remembered wishing he and Beau could have played when he was a child.`,
      leftImage: SKETCH_DIARY_IMAGES.beau5,
      rightImage: SKETCH_DIARY_IMAGES.beau5,
    },
    {
      text: `It occurred to David he could find Ruff too. He called Beau to heel (Beau, as usual, didn’t, exactly, a quality David had always admired in him, but he did follow). Beau realized he was trying to go the way Jennie had gone but could not find it. Beau was not sure he could find it any better than David could, but he could at least smell where Jennie had been.`,
      leftImage: SKETCH_DIARY_IMAGES.beau6,
      rightImage: SKETCH_DIARY_IMAGES.beau6,
    },
  ], // beau
  [
    {
      heading: '2/8 - Yellow',
      text: `Prickly claws are all the needles and biting allowed here, like the leaves of a thistle. The Narnian cat in The Horse and His Boy who is really Aslan — this cat carries that gravity. She watches the spider crossing the bathroom floor and the small moth the spider stalks.`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat0,
      rightImage: SKETCH_DIARY_IMAGES.goldcat0,
    },
    {
      text: `The moth knows something of webs but not how to spot them when climbing the walls of a bathroom. Both lived their lives in a human house, benignly neglected, as a spider and a fly should be. The cat loves all life by now, though there is in both her attitude and her posture a temptation to pounce.`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat1,
      rightImage: SKETCH_DIARY_IMAGES.goldcat1,
    },
    {
      text: `The fluttering moth would do best, according to some ways of thinking, to get caught and killed by this spider and recreate themselves with knowledge of death and peril. The moth had not known death, not even on earth — the moth had fluttered free from the cocoon and flown — wildly, wildly — up, up, and up to the screen.`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat2,
      rightImage: SKETCH_DIARY_IMAGES.goldcat2,
    },
    {
      text: `The humans caught the moth and set them free into the sky, and flying up brought the moth here, there, elsewhere, Evernost, not through the gate of death but through the gate of joy and cluelessness.`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat3,
      rightImage: SKETCH_DIARY_IMAGES.goldcat3,
    },
    {
      text: `No, the spider must not eat this moth, the cat decides, twitching her tail. She tenses her body, and the spider seeing, or sensing, scuttles under the wainscotting, which did not exist until the spider had need of it. Someone is going to have to kill that spider. Give the spider a body that might teach something more than hunger. (Spiders — even spiders — can do quite a lot if they care enough, but this one does not.)`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat4,
      rightImage: SKETCH_DIARY_IMAGES.goldcat4,
    },
    {
      text: `My reference is, I think, an Abyssynian, there's a gold light about it, actual gold paint (I love sparkly and metallic colors immoderately), and many colors within the yellow-gold. All the color and chaos safely within the bounds of a cat.`,
      leftImage: SKETCH_DIARY_IMAGES.goldcat5,
      rightImage: SKETCH_DIARY_IMAGES.goldcat5,
    },
  ], // yellow
  [
    {
      heading: '10/2 - Green',
      text: `The story I want to finish now is stranger than some of mine. Stupid and cold, some would say, genre fiction. And — the greatness and power come from without, not within, and from above, not beside. That's supposed to be a bad thing, but I think it's just a way I process reality.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `I got the idea in high school — a thirsty wooden grasshopper burst from the chest of a woman whose soul was as faded as mine before or worse, and she chased it into the forest of deep elsewhere, Evernost.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `The end just ripped itself out of me in a torrent like the one in which the antiheroine finds herself immersed, having been transformed into a tree root.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `I call this story Green, but green means more to me than that. It means, well — take my fae bigender favorite author D, wild and enormous, able to go deep and dark as anything but most easily humorous — with a humor that could destroy cities, creator of fictions that people sometimes took seriously and poems that only I know by heart.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `I learned more from D than from any other author about how to think and love visible reality. Once, I unilaterally hated its meaningless sorrow and dull detail. D taught me to see color and meaning, and to love the dark and odd hints of reality through the idealized lights and darks of fiction. `,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `And elsewhere contains the darkness, the melancholy wildness, D sees in it. I believe D has been elsewhere, seen it with their own deep eyes. Though D would just say elsewhere is a metaphor for the imagination.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `This can be agreeable at times. But elsewhere is more distant, beyond even the wildest imaginings, though there's little (if anything — precisely nothing, I sometimes think) the imagination contains that elsewhere does not.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `But how was that ok, considering how horrific the imagination can be? Even just my imagination?`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
  ], // Green
  [    
    {
      heading: '11/10 - Blue',
      text: `Why did I buy this dress?`,
      leftImage: SKETCH_DIARY_IMAGES.blue0,
      rightImage: SKETCH_DIARY_IMAGES.blue0,
    },
    {
      text: `Spaghetti-strap royal blue velvet dress with the chintzy gold trim from the very back of Goodwill. I have nowhere to wear it.`,
      leftImage: SKETCH_DIARY_IMAGES.blue1,
      rightImage: SKETCH_DIARY_IMAGES.blue1,
    },
    {
      text: `Used to be vegetarian. Now I know plants are people too, and I just try to honor everything I eat with a thought as I eat it.`,
      leftImage: SKETCH_DIARY_IMAGES.blue2,
      rightImage: SKETCH_DIARY_IMAGES.blue2,
    },
    {
      text: `Maybe the more I honor the personhood of what I eat, the more I like the objecthood of the meat I am. At least, if you're to go by this ridiculous garment.`,
      leftImage: SKETCH_DIARY_IMAGES.blue3,
      rightImage: SKETCH_DIARY_IMAGES.blue3,
    },
  ], // blue
  [
    {
      heading: `Niobe`,
      text: `The woman was old and sad and elsewhere. She was not a single, literal woman from our world; at least, if she was, for whatever reason I cannot give you a name and a story. She sat like a rock. Strong and leathery, she was no storied queen. She saw a formless gray, but with the superficial features of a city.`,
      leftImage: SKETCH_DIARY_IMAGES.niobe0,
      rightImage: SKETCH_DIARY_IMAGES.niobe0,
     },
    {
      text: `Jennie saw no city. She saw a mountainside in May, covered in grass and wildflowers, and a rock overlooking it halfway up, a spring under the rock. At first Jennie did not see the woman on the rock, eyes fixed on her folded hands, incongruous and misplaced Pietà.`,
      leftImage: SKETCH_DIARY_IMAGES.niobe1,
      rightImage: SKETCH_DIARY_IMAGES.niobe1,
     },
     {
      text: `Jennie, grave-eyed child, gave her a hug. Then, Jennie giggled, pointed up, and darted off. The hug had changed something. This giggle did not change a single muscle in the woman’s face. It was — a strange giggle. Almost cruel. But not quite, because Jennie was almost certain it would be all right. Was all right.
`,
      leftImage: SKETCH_DIARY_IMAGES.niobe2,
      rightImage: SKETCH_DIARY_IMAGES.niobe2,
     },
     {
      text: `The woman did not look up. But the sun looked down, and began asking her about her troubles. Eventually perhaps she found a word in her to reply and then another, until she stormed at the sun and his sister the moon and received gnomic responses. She cried out that truth without mercy was no truth at all, that the hardness of the universe was a crime.`,
      leftImage: SKETCH_DIARY_IMAGES.niobe3,
      rightImage: SKETCH_DIARY_IMAGES.niobe3,
     },
     {
      text: `Jennie was long gone. She was finite and had many places to be. But the Sun was not so simple or singular. Perhaps the woman was to mourn forever — there were those who believe mourning is central to reality — Jennie was not one of them, and she thought the sun would win. She did not ask whether the sun might be the culprit.`,
      leftImage: SKETCH_DIARY_IMAGES.niobe4,
      rightImage: SKETCH_DIARY_IMAGES.niobe4,
     },
  ], // Niobe
  [
    {
      heading: '10/19 - Indigo',
      text: `“Enough fear and floundering,” said the voice, a high voice with something of bells about it. Jennie threw open the curtain to her basement room and saw not the Man in the Moon but — Celeste, the star from Evernost Verna had caught? No — names like Celeste were the thin and stupid nonsense — `,
      leftImage: SKETCH_DIARY_IMAGES.indigo0,
      rightImage: SKETCH_DIARY_IMAGES.indigo0,
    },
    {
      text: `“I am something of what you seek, yes,” said that high voice, and the glass was filled with singing light for a moment before the being sat smiling at the foot of her bed. Jennie could tell the figure spoke the truth, held the goodness and beauty of elsewhere. “What would you have of me? You have work. You have creation. You have your family.”`,
      leftImage: SKETCH_DIARY_IMAGES.indigo1,
      rightImage: SKETCH_DIARY_IMAGES.indigo1,
    },
    {
      text: `Jennie almost begged, though she was still dull and quiet and sleepy, a little thin and false and disconnected, to go back with the light. But either her unspoken promise to remain — or the dullness and sleepiness and falsity of her — stayed her tongue. Instead, she reached out to the light, and light took her in its arms, held her to its wild heart.`,
      leftImage: SKETCH_DIARY_IMAGES.indigo2,
      rightImage: SKETCH_DIARY_IMAGES.indigo2,
    },
    {
      text: `“Just stay,” she begged the figure of light. “Stay a little longer. I love you. I love you more than the rest of this.” But it only danced in her blood, and around her room, and kissed her, and flew. She did not even have something to put on her altar, and she was told at once she would forget, this was too good, too good to be true, too good to be allowed.`,
      leftImage: SKETCH_DIARY_IMAGES.indigo3,
      rightImage: SKETCH_DIARY_IMAGES.indigo3,
    },
  ], // indigo
  [
    {
      text: `Coworker Sonia's pretty. Blonde. Thinnish. Very, very kind and strong-hearted in the moral convictions of her time — liberal and disgusted with abuse and dishonesty and sexism. Started shy and anxious, but the others had brought her out of her shell. She tries to bring me out of my shell, and was consistently kind.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `I dreamed last night of Sonia caught in vines. I tried to look for the forest spirit, up and down and everywhere, and to rebuke the vines growing into Sonia’s skin, and not to look at Sonia, whose clothes were ripped to shreds. If I'd ripped the vines free, I might have killed Sonia. “I am sorry,” I said, but Sonia was dreaming too deep to hear.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `At work today Sonia said she’d had a lovely dream. Lovely. But embarrassing to talk about, apparently — she blushed and would say no more. I was shaking before I even drank my tea.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
  ], // sonia
  [
    {
      heading: '6/11 - Violet',
      text: `Sonia at work just dyed her hair purple for Pride Month.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `I wonder if I should, and then I get upset. Too upset. I don't get it.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `The love I need is over the hills and far away. Love is beautiful in every form, and painful.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
    {
      text: `Supposedly I need to annoy my mother by dyeing my hair a ridiculous color.`,
      leftImage: SHARED_IMAGES.noImage,
      rightImage: SHARED_IMAGES.noImage,
    },
  ], // violet
  [
    {
      heading: 'Swans',
      text: `“Keep your beak to yourself,” said the photographer, a watercolor painter in her 50s and snapped a shot: one swan bit another in a sunny October park. I have never been a swan, though Jennie has. I can write about color and reflected light— crisp cold air of oncoming autumn — and I halt at the birds.`,
      leftImage: SKETCH_DIARY_IMAGES.swans0,
      rightImage: SKETCH_DIARY_IMAGES.swans0,
    },
    {
      text: `Say they’re a mated couple quarreling in the way of married couples. Patient, calm, unhappy, she looks away. He bites the feathers of her neck. He wants something from her. I find this interaction no more pleasant in swans than in humans. I want to erase it. Turn to the beauty of courtship and disown the anticlimactic ending. I think I’m right in rejecting this as an ending.`,
      leftImage: SKETCH_DIARY_IMAGES.swans1,
      rightImage: SKETCH_DIARY_IMAGES.swans1,
    },
    {
      text: `But we must go deeper. Perhaps I have the genders wrong. Perhaps bird genders don’t map onto human genders (birds’ sex chromosomes are the reverse of mammals’, two of the same for the supposed gentlemen and two different for the ladies). What is the history of this spat? Are they happy, with the occasional storm? Or do they want to be free from one another?`,
      leftImage: SKETCH_DIARY_IMAGES.swans2,
      rightImage: SKETCH_DIARY_IMAGES.swans2,
    },
    {
      text: `The bitten swan sees, elsewhere, a human child running in a torn green bridesmaid’s dress. The biter wants the mate back from sunlight and alien drama. Jennie approaches, sleepy, glances at the running girl, smiles as she catches a strain of unearthly music, and plops onto a park bench, opens a loaf of white store-bought bread and tears off a piece for the attacking swan.`,    leftImage: SKETCH_DIARY_IMAGES.swans3,
      rightImage: SKETCH_DIARY_IMAGES.swans3,
    },
    {
      text: `He’s distracted, takes it, and both pester Jennie for more, biting her sneakers and jeans. Jennie looks into the lowering sun unflinching and leaves the remaining two thirds of the loaf strewn about the concrete for the swans and the seagulls descending. She becomes a shape of light and flies away.`,
      leftImage: SKETCH_DIARY_IMAGES.swans4,
      rightImage: SKETCH_DIARY_IMAGES.swans4,
    },
    {
      text: `Inside the longing swan, only mildly confused by Jennie’s transformation, there is a split. Something breaks loose, a thing of pale white light, wintry, longing for sun and distance. It breaks loose within only, only in the inner sky does it fly up, a shape of light. It meets the sun, the clouds — but only within.`,
      leftImage: SKETCH_DIARY_IMAGES.swans5,
      rightImage: SKETCH_DIARY_IMAGES.swans5,
    },
    {
      text: `In the background a boy in a red shirt kicks a soccer ball, alone and bored. Jennie stills the breeze a moment to let through the sun’s warmth. He does not see her. His heart leaps with the next gust of wind into her wildness. He kicks the ball straight into the tree he was aiming for. It bounces back at him. He runs to catch it, barely misses.`,
      leftImage: SKETCH_DIARY_IMAGES.swans6,
      rightImage: SKETCH_DIARY_IMAGES.swans6,
    },
    {
      text: `The other park-goers pay no attention, except for the nice mother with her twins in their stroller, knowing that with predators in the park you have to be careful, so she watches him kick the ball — it’s hypnotic— until dusk arrives and his own exhausted mom pulls up in the parking lot after her shift to pick him up. A seagull flies in his mind, dividing it from itself.`,
      leftImage: SKETCH_DIARY_IMAGES.swans7,
      rightImage: SKETCH_DIARY_IMAGES.swans7,
    },
  ], // swans
  [
    {
      heading: '5/12 Red',
      text: `When the woman and her knitting returned, I was doing stylized art and I laughed at my compunctions — allegory was of elsewhere, stylization was of elsewhere, any hint of creativity or meaning was of elsewhere? What had been wrong with me as I feared all of that? But they are, I saw then. At least, what's the value of double layers of meaning if the second is not somehow — greater, lovelier, more important, deeper, than the visible surface of reality?`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract0,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract0,
    },
    {
      text: `Forgetting stitches, the knitter Debbie remembers Jennie as — a child, a shape of light, a friend, someone who broke fall twilight and set day dawning. Deborah is, apparently, at her daughter’s house, with the distorting glass bricks, not her own cozy one-story house. Next to light and grandchildren, she is a shadow, a bit of furniture, but her outline is the central clarity.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract1,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract1,
    },
    {
      text: `I said she gave that sweater to her grandson, but I am not sure she finished it at all. She may have fallen ill, a heart attack or a stroke or a car accident. Her grandson cherished the remains of the sweater for the rest of his days — unless the parents and aunts and uncles, clearing out the house, threw it away and donated her yarn. It wasn’t like they didn’t have finished hats and sweaters and scarves to remember her by.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract2,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract2,
    },
    {
      text: `Light turned the Purgatorial walls of the house to stained glass before dissolving them, meeting light in red gift and light in schematic outline and whole that is the old woman. The three lights meet and join, and the boy will wear the radiant red sweater.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract3,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract3,
    },
    {
      text: `It was shortly after Jennie’s arrival that the light began to come through, washing out the details and strengthening shapes and outlines. Pinks and yellows and blues and greens, the grandmother’s daughter’s favorite colors, before she grew up and had children of her own for Deborah to teach new forms of solitaire.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract4,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract4,
    },
    {
      text: `Deborah is solving still, puzzles and card games, but as she sits she loses focus. She’ll see them again soon. Not just children and grandchildren but parents and grandparents and who knows who else.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract5,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract5,
    },
    {
      text: `This time I drew schematically, emphasizing the allegory. Gray-blue background, including the woman as if she were as much furniture as the chair, red knitting, and — to the side — light! yellow light, pink light, warming the room and the woman and the scene. It was like stained glass — the glass and color existed to capture the light, to render it visible and tangible.`,
      leftImage: SKETCH_DIARY_IMAGES.knitterAbstract6,
      rightImage: SKETCH_DIARY_IMAGES.knitterAbstract6,
    },
    {
      text: `And a haircut. The brightest thing is the barber's own orangey hair.  Behind them — a mirror. Or a window. Mirrors are windows. Or could it be a painting, obscured by light reflecting, a mirror and a window both?`,
      leftImage: SKETCH_DIARY_IMAGES.haircut5,
      rightImage: SKETCH_DIARY_IMAGES.haircut5,
    },
    {
      text: `Into the abyss of light, higher and deeper and stronger every second, steps not a daughter or a grandson but — someone to cut Debbie’s hair.`,
      leftImage: SKETCH_DIARY_IMAGES.haircut4,
      rightImage: SKETCH_DIARY_IMAGES.haircut4,
    },
    {
      text: `The light suffuses all despite this officious barber who in this light can only be greeted with a smile.`,
      leftImage: SKETCH_DIARY_IMAGES.haircut1,
      rightImage: SKETCH_DIARY_IMAGES.haircut1,
    },
    {
      text: `The air cleaner hums on the counter. (Her daughter has asthma; daughter must be near — and the cats — but she’s at her daughter’s house— she hopes Melody, the daughter, got someone to feed the cats.)`,
      leftImage: SKETCH_DIARY_IMAGES.haircut0,
      rightImage: SKETCH_DIARY_IMAGES.haircut0,
    },
    {
      text: `The cat is a more distinct personage than any human. The sun flows across the back of the cat, begging to be filled by images (I refused, for I was still striving for negative space) and constituting the cat's sinews.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat0,
      rightImage: SKETCH_DIARY_IMAGES.suncat0,
    },
    {
      text: `Deborah is pleased to see Gus: a good cat, manifestly pleased to see her, though unlikely to get up. There are, she understands from this, more cats. There are very many cats indeed, every cat she has ever known, but right now Gus is enough.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat1,
      rightImage: SKETCH_DIARY_IMAGES.suncat1,
    },
    {
      text: `Gus, she remembers, died. She never put him to sleep, he crawled out of the house and was never seen again. Some raccoon or crows feasted on his carcass. Here he is, mildly and pleasantly surprised by light, by her, ghostly in the way of everything in this place, more outline than flesh.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat2,
      rightImage: SKETCH_DIARY_IMAGES.suncat2,
    },
    {
      text: `Gus is, for a while, worrisome. Melody does not like cats, and she is allergic enough they could kill her. Debbie still can't find a way to ask Melody why Gus is here, or whether it is ok, and where they could send him.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat3,
      rightImage: SKETCH_DIARY_IMAGES.suncat3,
    },
    {
      text: `Then Melody appears one morning and looks at Gus, her blonde hair arranged around her head, without seeing him, though Gus sees her with his not wholly friendly green-gold eyes. Melody dissolves into light, as if she were the ghost. So Debbie stops worrying.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat4,
      rightImage: SKETCH_DIARY_IMAGES.suncat4,
    },
    {
      text: `Gus begins to seem like a small joke on Melody, who can fuss rather, but perhaps one she will not mind when she finds out, if she finds out. Melody, however, begins to concern Debbie even more. Debbie does not see her again in the following — weeks, she wants to say, but the sun only ever grows brighter, unsetting.`,
      leftImage: SKETCH_DIARY_IMAGES.suncat5,
      rightImage: SKETCH_DIARY_IMAGES.suncat5,
    },
    {
      heading: 'That\'s all.',
      effect: () => {
        localStorage.removeItem('showRainbow')
        localStorage.setItem('sketch-diaryChapterIndex', '0');
        localStorage.setItem('sketch-diaryTextIndex', '0');
        localStorage.setItem('mere-realityChapterIndex', '0');
        localStorage.setItem('mere-realityTextIndex', '0');
      },
      leftImage: SKETCH_DIARY_IMAGES.suncat5,
      rightImage: SKETCH_DIARY_IMAGES.suncat5,
    }
  ], // red
];
