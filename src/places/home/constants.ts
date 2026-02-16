import { ImageCatalog } from "../../shared/constants";

// export const OUT = "https://gleameil.github.io/out";
export const OUT = 'http://localhost:8080';

export const INTRO_TEXT = `Hey, we don't know each other, but I'm glad you came.
Room isn't much. I must wear my plain brown gown and never go too fine. 
May not look like it, but we're deep Elsewhere.
There's a lot to learn, though. Don't be shy about using my laptop, or going through the books and papers.
About the laptop, in particular the clock & calendar: time is strange here. Malleable. If you think you missed something, just go back to that time. Nothing is ever truly lost in Evernost.
Looking out the window can be...interesting, but boldness is how you learn.
Also, I don't know how to say this last thing. I assume you're seeing this as some kind of computer game, in which case you're probably not looking for Transcendent Truth. But if you're accessing it some other way, through your dreams, say, uh... I'm braver these days, but I'm not brave enough to try to offer you Truth. This is my Way, mine, and we can learn from each other, but your Way will be through your own life and mind.
Now, and in general, the button in the upper right will take you back to my apartment.
♥,
Jennie`;

export const HOME_IMAGES: ImageCatalog = {
  books: {
    path: new URL('../../assets/images/home/books.png?as=webp', import.meta.url),
    alt: 'stack of books and paper by bed',
  },
  computer: {
    path: new URL('../../assets/images/home/computer.png?as=webp', import.meta.url),
    alt: 'laptop',
  },
  garbage: {
    path: new URL('../../assets/images/home/garbage.png?as=webp', import.meta.url),
    alt: 'wastebasket',
  },
  bed: {
    path: new URL('../../assets/images/home/room.png?as=webp', import.meta.url),
    alt: 'wireframe bed'
  },
  switch: {
    path: new URL('../../assets/images/home/switch.png?as=webp', import.meta.url),
    alt: 'light switch',
  },
  window: {
    path: new URL('../../assets/images/home/window.png?as=webp', import.meta.url),
    alt: 'window with shades down'
  }
};
