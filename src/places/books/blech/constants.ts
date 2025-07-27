import { ImageCatalog } from "../../../shared/constants";
import { Chapters } from "../reader.constants";

export const BLECH_IMAGES: ImageCatalog = {
  leopardPrintLeft: {
    path: new URL('../../../assets/images/books/blech/leopardPrintLeft.png?as=webp', import.meta.url),
    alt: 'go back',
  },
  leopardPrintRight: {
    path: new URL('../../../assets/images/books/blech/leopardPrintRight.png?as=webp', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
}

export const BLECH_CHAPTERS: Chapters = [[
  {
      title: 'BLECH',
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  }, 
  {
      text: `Stayed at Dave and Holly's for New Year's. God, I hate parties.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `The highlight of the night was shivering on the bay window with my glass of sparkling whatever (I guess it's not champagne if it didn't actually come from Champagne?) and getting the sudden feeling that all the bubbles in it were little worlds, or that worlds are like bubbles in champagne. A bit less encouraging re the fate of the worlds than Julian of Norwich and her hazelnut, I guess. Dave had long since sloped off, and I should have.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `I went to bed as soon after midnight as I dared, but I don't think I slept at all. Holly is a saint for staying married to my brother (don't get me wrong, if there's anyone in the world I love it's him, but he's not an easy person) and an angel for putting up with Mom the past two years.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `She's also...questionably connected to reality. I say she's hyperactive as Dave, just she channels it into some terrifying ideal of housewifely perfection,and ninety percent of what she says is platitudes, even though Dave attests she's one of the smartest people you'll ever meet and she's had some amazing successes in court.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `Anyway, I was brooding about Mom, and how I couldn't feel much other than relieved she was in a nursing home with Alzheimer's. I mean, she could be a jerk, but who can't? Other than Holly.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `She just...didn't get me. If I were less afraid of her (instinctively, I mean; rationally, there was never anything to be afraid of), maybe I'd be able to love her?`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `Then I got thinking I'd like to take them all elsewhere. To Evernost. Except Evernost is pretty much a pile of shitty abortive novel attempts. BLECH.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `I was still feeling terrible about Mom when I got back. I cleaned the apartment. Brought back memories. Mostly bad ones, like how Mom always got rid of my stuff without asking.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
  {
      text: `Looked at some old writing too. Wrote a more. Nothing worth saving.`,
      rightImage: BLECH_IMAGES.leopardPrintRight,
      leftImage: BLECH_IMAGES.leopardPrintLeft,
  },
]];
