import { ANTHOLOGY_IMAGES } from "../../books/anthology/constants";
import { BLECH_IMAGES } from "../../books/blech/constants";
import { LOON_IMAGES } from "../../books/loonOfLoons/constants";
import { MADELINE_IMAGES } from "../../books/madeline/constants";
import { MICHAEL_IMAGES } from "../../books/michael/constants";
import { SKETCH_DIARY_IMAGES } from "../../books/sketchDiary/constants";
import { VERNA_IMAGES } from "../../books/verna/constants";
import { HOME_IMAGES } from "../../home/constants";
import { GARBAGE_IMAGES } from "../../garbage/garbage.constants";
import { ImageCatalog } from "../../../shared/constants";

/// take a screenshot of pretty things from dark room, night, out, snowsight -- allow screenshot of snowsight to be stored in-app??? that'd be cool but hard

const SNOWSIGHT_IMAGES: ImageCatalog = {
  you: {
    path: new URL('../../../assets/images/snowsight/you.png?as=webp', import.meta.url),
    alt: 'silhouette of a head facing away, possibly yours',
  },
  jenny: {
    path: new URL('../../../assets/images/snowsight/jenny.png?as=webp', import.meta.url),
    alt: 'pencil drawing of a head facing forward',
  },
  jennieRed0: {
    path: new URL('../../../assets/images/snowsight/jennieRed0.png?as=webp', import.meta.url),
    alt: 'red scribbles surrounded by emoji-hearts, vaguely like the organ the heart',
  },
  jennieRed1: {
    path: new URL('../../../assets/images/snowsight/jennieRed1.png?as=webp', import.meta.url),
    alt: 'red scribbles without emoji hearts, vaguely like the organ the heart',
  },
  jennieGold0: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate0.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun about to do a cartwheel'
  },
  jennieGold1: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate1.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold2: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate2.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold3: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate3.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGold4: {
    path: new URL('../../../assets/images/snowsight/jennieGoldAlternate4.png?as=webp', import.meta.url),
    alt: 'child crowned with the sun doing a cartwheel',
  },
  jennieGreen0: {
    path: new URL('../../../assets/images/snowsight/jennieGreen0.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl looking sidelong at you',
  },
  jennieGreen1: {
    path: new URL('../../../assets/images/snowsight/jennieGreen1.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl tilting her head',
  },
  jennieGreen2: {
    path: new URL('../../../assets/images/snowsight/jennieGreen2.png?as=webp', import.meta.url),
    alt: 'green gel pen teenage girl looking shocked (perhaps sarcastically)',
  },
  jennieIndigo: {
    path: new URL('../../../assets/images/snowsight/jennieIndigo.png?as=webp', import.meta.url),
    alt: 'serious young teenage girl in indigo gel pen'
  },
  jennieViolet: {
    path: new URL('../../../assets/images/snowsight/jennieViolet.png?as=webp', import.meta.url),
    alt: 'little girl hugging a heart in purple gel pen'
  },
  jennieMoon: {
    path: new URL('../../../assets/images/snowsight/jennieMoon.png?as=webp', import.meta.url),
    alt: 'witchy or princessy lady in metallic gel pens',
  },
};


export const IMAGE_SOURCES: ImageCatalog[] = [ANTHOLOGY_IMAGES, BLECH_IMAGES, LOON_IMAGES, MADELINE_IMAGES, MICHAEL_IMAGES, SKETCH_DIARY_IMAGES, VERNA_IMAGES, HOME_IMAGES, GARBAGE_IMAGES, SNOWSIGHT_IMAGES];
