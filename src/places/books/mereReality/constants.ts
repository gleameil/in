import { ImageCatalog } from "../../../shared/constants";
import { removeByClassName } from "../../../shared/helpers";
import { playIfAllowed } from "../../../shared/sound";
import { Chapters } from "../reader.constants";

export const MERE_REALITY_IMAGES: ImageCatalog = {
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
    shouldHide: true,
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
    shouldHide: true,
  },
};

const swanStanzas: string[] = [
  `Keep your beak to yourself.
You do not love this light.
This false light shouts.
Turn away.`,
`Look at me, I dare you.
No god, no maiden, here — just animals 
biting animals; they even bore themselves.
Turn away.`,
`Turn away.
Show me real fall, real leaves.
You can’t. Show me you.
You can’t. Show me me. I dare you.`,
`Turn away.
Yes, there is light even in the knife
You are trying to cut out your heart with.
For love’s sake put down the knife.`,
`Turn to darkness,
for this is not light.
Turn the knife on me or,
for love’s sake, put it down.`,
`They mean to turn the knife on me;
they’re even right, but do not stain 
them with your blood as well as mine.
Put down the knife, for love’s sake.`,
`Keep your beak to yourself
and watch the leaves turn and the children play —
put down the knife, or maybe I’ll just let you cut you out of me
and me out of you.`,
`Keep your beak to yourself,
because, yes, I want something with you
and the leaves and the swans.
I want the gold back in the green`,
`Put the gold back in the green,
because, yes, the god is here,
the maiden is here,
I am here.`
]
export const MERE_REALITY_CHAPTERS: Chapters = [
  [
    {
      title: `Mere reality, take 200`, 
      text: `So, I'm trying to abandon elsewhere for real, but what does that leave me? This guy I'm sketching, say.`,
      leftImage: MERE_REALITY_IMAGES.ambassador0,
      rightImage: MERE_REALITY_IMAGES.ambassador0,
     },
     {
      text: `Grinning stranger, free from the Wetcanvas reference image library.`,
      leftImage: MERE_REALITY_IMAGES.ambassador1,
      rightImage: MERE_REALITY_IMAGES.ambassador1,
     },
     {
      text: `Guess I just don't care enough to get him right. Maybe that's good? Maybe attentiveness, or at least the attentiveness that yields — a sense, an impression, a love — is vision and of elsewhere. Maybe it's more than mere reality. Heh. Bad excuse.`,
      leftImage: MERE_REALITY_IMAGES.ambassador2,
      rightImage: MERE_REALITY_IMAGES.ambassador2,
     },
     {
      text: `If I believed in elsewhere I'd believe I knew something about him. I'd believe he leads a small-town drama company. Works with kids. Big personality to match his big grin. Plays the Beast in Beauty and the Beast.`,
      leftImage: MERE_REALITY_IMAGES.ambassador3,
      rightImage: MERE_REALITY_IMAGES.ambassador3,
     },
     {
      text: `That grin is so crooked it's driving me nuts. But I'm already coloring. Tooooo late.)`,
      leftImage: MERE_REALITY_IMAGES.ambassador4,
      rightImage: MERE_REALITY_IMAGES.ambassador4,
     },
     {
      text: `No, not of elsewhere. Reality is guiding my hand; reality yielded these contours (minus mistakes). Still, the impressions they leave — created or recorded? Are they visible to any eye? Does a drawing make them more visible than in a photograph? Am I bringing out something already there or creating something new?`,
      leftImage: MERE_REALITY_IMAGES.ambassador5,
      rightImage: MERE_REALITY_IMAGES.ambassador5,
     },
     {
      text: `Is the smile real? His eyes are smiling too, but you can learn to fake that.`,
      leftImage: MERE_REALITY_IMAGES.ambassador6,
      rightImage: MERE_REALITY_IMAGES.ambassador6,
     },
     {
      text: `Why, when you see people smiling in a certain kind of photo, does it always feel fake, whether it is or not? Why do I think I'm going to be staring at this awful thing all night?`,
      leftImage: MERE_REALITY_IMAGES.ambassador7,
      rightImage: MERE_REALITY_IMAGES.ambassador7,
     },
  ], // ambassador
  [
    {
      text: `A solemnity in ink. Heaviness. Like this one better though it's worse, technically speaking. Even worse.`,
      leftImage: MERE_REALITY_IMAGES.niobe0,
      rightImage: MERE_REALITY_IMAGES.niobe0,
     },
    {
      text: `Remember when I wanted to draw portraits for a living? Liked the idea of showing people their souls. Bringing them closer to elsewhere and themselves, but I didn't have the patience. Maybe I'll leave elsewhere out, and I'll be able to find the patience now?`,
      leftImage: MERE_REALITY_IMAGES.niobe1,
      rightImage: MERE_REALITY_IMAGES.niobe1,
     },
     {
      text: `Mere reality is heavy, solemn, ugly, wrong. I mean, it would be fine if mere reality were only one thing, but if it's everything I don't think I can stand it.`,
      leftImage: MERE_REALITY_IMAGES.niobe2,
      rightImage: MERE_REALITY_IMAGES.niobe2,
     },
     {
      text: 'I guess I need to learn to see joy and beauty without elsewhere? Why does that feel even worse?',
      leftImage: MERE_REALITY_IMAGES.niobe3,
      rightImage: MERE_REALITY_IMAGES.niobe3,
     },
     {
      text: `A sad, concentrated old woman. That's me in the story in my head — miserable, pensive, dull, focused on something in my hands, something small to the point of vanishing. Unless the small thing is elsewhere and the great thing is the world?`,
      leftImage: MERE_REALITY_IMAGES.niobe4,
      rightImage: MERE_REALITY_IMAGES.niobe4,
     },
  ], // Niobe
  [
    {
      text: 'Bah, more portraits. Is this even worth it? I kind of hate this dude already.',
      leftImage: MERE_REALITY_IMAGES.creep0,
      rightImage: MERE_REALITY_IMAGES.creep0,
    },
    {
      text: `If I believed in elsewhere, I'd say he's thinking, but actively, about doing something. Scheming. Awkward and rumpled, stuck inside himself. Predatory.`,
      leftImage: MERE_REALITY_IMAGES.creep1,
      rightImage: MERE_REALITY_IMAGES.creep1,
    },
    {
      text: `Some socially acceptable slimy jerk who talks about fishing and cars and makes lewd comments about the women at his office. Who feels cynical and superior to you no matter who you are.`,
      leftImage: MERE_REALITY_IMAGES.creep2,
      rightImage: MERE_REALITY_IMAGES.creep2,
    },
    {
      text: `What if he's a representaiton of me. Cold and empty, leering after beauty that is not mine?`,
      leftImage: MERE_REALITY_IMAGES.creep3,
      rightImage: MERE_REALITY_IMAGES.creep3,
    },
    {
      text: `It didn't feel like being that person — elsewhere. It was terrifying sometimes, but always glorious and not — being locked out.`,
      leftImage: MERE_REALITY_IMAGES.creep4,
      rightImage: MERE_REALITY_IMAGES.creep4,
    },
    {
      text: `I thought I refused elsewhere. But what if elsewhere refused me, because I was like that?`,
      leftImage: MERE_REALITY_IMAGES.creep5,
      rightImage: MERE_REALITY_IMAGES.creep5,
    },
    {
      text: `Of course, it's all just stereotypes. Really he's just some poor guy I know nothing about, and this drawing is making an uninformative photo into a gargoyle.`,
      leftImage: MERE_REALITY_IMAGES.creep6,
      rightImage: MERE_REALITY_IMAGES.creep6,
    },
  ], // creep
  [
    {
      text: `My brother Dave and I had a golden retriever growing up. Ruff. He died when I was seventeen. I didn't have time for him as a teenager.`,
      leftImage: MERE_REALITY_IMAGES.beau0,
      rightImage: MERE_REALITY_IMAGES.beau0,
    },
    {
      text: `Felt bad when he got cancer, though. Wanted to send him elsewhere. I thought of that every night, either healing for him or letting him go there. When Mom had him put to sleep I imagined I was talking with him.`,
      leftImage: MERE_REALITY_IMAGES.beau1,
      rightImage: MERE_REALITY_IMAGES.beau1,
    },
    {
      text: `He assured me he already was elsewhere. Offered to let me come after him. Knew that's where I belonged. I almost did.`,
      leftImage: MERE_REALITY_IMAGES.beau2,
      rightImage: MERE_REALITY_IMAGES.beau2,
    },
    {
      text: `Mom refused to get another dog. Dad kind of wanted one, but Dad had also wanted Ruff and then did basically nothing to help take care of him, so he didn't press the issue.`,
      leftImage: MERE_REALITY_IMAGES.beau3,
      rightImage: MERE_REALITY_IMAGES.beau3,
    },
    {
      text: `Dave's wild about dogs. He and his wife Holly have three. This is their lab Beau, who died a year ago. I told Dave I was drawing real things, and he wants a portrait.`,
      leftImage: MERE_REALITY_IMAGES.beau4,
      rightImage: MERE_REALITY_IMAGES.beau4,
    },
    {
      text: `Shouldn't have done it all in black. Too somber for Dave and Holly.`,
      leftImage: MERE_REALITY_IMAGES.beau5,
      rightImage: MERE_REALITY_IMAGES.beau5,
    },
    {
      text: `Just texted them the picture and got the predictable exclamations from Holly (she's so sweet and stressed) and a shy approval from Dave. I'll mail it next week.`,
      leftImage: MERE_REALITY_IMAGES.beau6,
      rightImage: MERE_REALITY_IMAGES.beau6,
    },
  ], // beau
  [
    {
      text: `Gah, this one is actually good, and it's also the most...of elsewhere...yet. I guess lots of people wouldn't see it that way, since there's nothing impossible or strange about it.`,
      leftImage: MERE_REALITY_IMAGES.knitter0,
      rightImage: MERE_REALITY_IMAGES.knitter0,
    },
    {
      text: `But elsewhere isn't just fantasy. It's second meanings, supposedly deeper but probably just made-up meanings. And the idea of loving your creation more than yourself. That your creation is more real than you are.`,
      leftImage: MERE_REALITY_IMAGES.knitter1,
      rightImage: MERE_REALITY_IMAGES.knitter1,
    },
    {
      text: `Knitter's smiling. Her glasses let her see her work.`,
      leftImage: MERE_REALITY_IMAGES.knitter2,
      rightImage: MERE_REALITY_IMAGES.knitter2,
    },
    {
      text: `Maybe this is not of elsewhere, because, even though it contains elsewhere, mere reality is more vivid. The red knitting is glowing but simple, too simple, and red is the color of evil or animality.`,
      leftImage: MERE_REALITY_IMAGES.knitter3,
      rightImage: MERE_REALITY_IMAGES.knitter3,
    },
    {
      text: `The woman, on the other hand, has depth and pattern, light and shadow. She's the real center.`,
      leftImage: MERE_REALITY_IMAGES.knitter4,
      rightImage: MERE_REALITY_IMAGES.knitter4,
    },
    {
      text: `I've almost thrown this thing away three times. But I can't.`,
      leftImage: MERE_REALITY_IMAGES.knitter5,
      rightImage: MERE_REALITY_IMAGES.knitter5,
    },
    {
      text: `Ok, it's done. It's going into a drawer and there it stays.`,
      leftImage: MERE_REALITY_IMAGES.knitter6,
      rightImage: MERE_REALITY_IMAGES.knitter6,
    },
  ], // knitting
  [
    {
      text: `More strangers, these thoroughly prosaic and un-elswhere-y.`,
      leftImage: MERE_REALITY_IMAGES.wrestle0,
      rightImage: MERE_REALITY_IMAGES.wrestle0,
    },
    {
      text: `They remind me so much of Mom and Dave when we were all younger it's scary. The woman's hair is even coppery red.`,
      leftImage: MERE_REALITY_IMAGES.wrestle1,
      rightImage: MERE_REALITY_IMAGES.wrestle1,
    },
    {
      text: `And now I'm like, but what if linking strangers to family is of elsewhere?`,
      leftImage: MERE_REALITY_IMAGES.wrestle2,
      rightImage: MERE_REALITY_IMAGES.wrestle2,
    },
    {
      text: `What does it mean that this is a scribbly mess? Just that I'm lazy? Or that I care too much about elsewhere to get this world right?`,
      leftImage: MERE_REALITY_IMAGES.wrestle3,
      rightImage: MERE_REALITY_IMAGES.wrestle3,
    },
    {
      text: `Or is the scribbly abstraction itself elsewhere? This is getting ridiculous.`,
      leftImage: MERE_REALITY_IMAGES.wrestle4,
      rightImage: MERE_REALITY_IMAGES.wrestle4,
    },
    {
      text: `I wonder what's going on. Are they playing, or is she restraining the kid?`,
      leftImage: MERE_REALITY_IMAGES.wrestle5,
      rightImage: MERE_REALITY_IMAGES.wrestle5,
    },
    {
      text: `I don't want to keep doing this. Every chicken scratch of a colored pencil is a struggle. Every sentence I write for work is a struggle.`,
      leftImage: MERE_REALITY_IMAGES.wrestle6,
      rightImage: MERE_REALITY_IMAGES.wrestle6,
    },
    {
      text: `Can't sleep.`,
      leftImage: MERE_REALITY_IMAGES.wrestle7,
      rightImage: MERE_REALITY_IMAGES.wrestle7,
    },
  ], // wrestling
  [
    {
      text: `Need to shower. Need something cheerful. What is joy that is not of elsewhere? Joy earthly and not marvelous? Here are some swans in a park in the fall.`,
      leftImage: MERE_REALITY_IMAGES.swans0,
      rightImage: MERE_REALITY_IMAGES.swans0,
    },
    {
      text: 'The one is grooming the other one. Or maybe biting. Kinda silly.',
      leftImage: MERE_REALITY_IMAGES.swans1,
      rightImage: MERE_REALITY_IMAGES.swans1,
    },
    {
      text: `Silliness makes me want to bite something, because without elsewhere it's all silliness now, or sadness.`,
      leftImage: MERE_REALITY_IMAGES.swans2,
      rightImage: MERE_REALITY_IMAGES.swans2,
    },
    {
      text: `Are these brilliant colors of elsewhere? Leaves’ red, that wild yellow and green that say "follow me." The cold blue. That cold blue calls me almost as elsewhere calls me. Violently.`,
      leftImage: MERE_REALITY_IMAGES.swans3,
      rightImage: MERE_REALITY_IMAGES.swans3,
    },
    {
      text: `And then I'm like, maybe I'm welcome to the beauty as long as I don't think of it as elsewhere. But what else do I think elsewhere is, if not beauty beyond all desiring?`,
      leftImage: MERE_REALITY_IMAGES.swans4,
      rightImage: MERE_REALITY_IMAGES.swans4,
    },
    {
      text: `Swans are supposed to be about purity and grace. These ones aren't. They're colorful, like Saruman when he takes off his white robe in Lord of the Rings. Playful. SILLY, goddammit.`,
      leftImage: MERE_REALITY_IMAGES.swans5,
      rightImage: MERE_REALITY_IMAGES.swans5,
    },
    {
      text: `Pretty sure this thing is called "Keep your beak to yourself." I think it's done. Gonna post it online.`,
      leftImage: MERE_REALITY_IMAGES.swans6,
      rightImage: MERE_REALITY_IMAGES.swans6,
    },
    {
      text: `This is not even worth the paper it's drawn on. Too simple. Messy. Loud. Cold.`,
      leftImage: MERE_REALITY_IMAGES.swans7,
      rightImage: MERE_REALITY_IMAGES.swans7,
    },
    {
      effect: () => {
        localStorage.setItem('showRainbow', 'true');
        localStorage.setItem('mere-realityChapterIndex', '0');
        localStorage.setItem('mere-realityTextIndex', '0');
        localStorage.setItem('sketch-diaryChapterIndex', '0');
        removeByClassName('reader-art');
        localStorage.setItem('sketch-diaryTextIndex', '0');
        const music = document.getElementById('mere-reality-music') as HTMLAudioElement;
        const textContainer = document.getElementById('mere-reality-reader-text-container')!;
        textContainer.classList.add('swans-bg');
        const swanStanzaDivs = swanStanzas.map((stanza: string) => {
          const div = document.createElement('div');
          div.classList.add('mere-reality');
          div.innerText = stanza;
          return div;
        });
        
        function addNextSwanStanza(index: number) {
          removeByClassName('swan-stanza');
          const nthSwanStanza = swanStanzaDivs.shift()!;
          nthSwanStanza.classList.add('swan-stanza', `swan-stanza-fade-out-${index}`);
          textContainer.append(nthSwanStanza);
        }
        const callback = () => document.getElementById('homeward')?.click();
        playIfAllowed(music, { callback, alternateTimeout: 70000 });;
        addNextSwanStanza(0);
        setTimeout(() => addNextSwanStanza(1), 8000);
        setTimeout(() => addNextSwanStanza(2), 18267);
        setTimeout(() => addNextSwanStanza(3), 26283);
        setTimeout(() => addNextSwanStanza(4), 35067);
        setTimeout(() => addNextSwanStanza(5), 41000);
        setTimeout(() => addNextSwanStanza(6), 48300);
        setTimeout(() => addNextSwanStanza(7), 57237);
        setTimeout(() => addNextSwanStanza(8), 64383);
      },
      leftImage: MERE_REALITY_IMAGES.swans7,
      rightImage: MERE_REALITY_IMAGES.swans7,
    },
  ], // swans
]