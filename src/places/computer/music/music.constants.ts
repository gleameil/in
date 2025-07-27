import { AudioCatalog, AudioPath, ImageCatalog, ImagePathAndAltText } from "../../../shared/constants";
import { SKETCH_DIARY_IMAGES } from "../../books/sketchDiary/constants";

interface AudioPathForMusicApp extends AudioPath {
  songTitle: string;
  coverArt?: ImagePathAndAltText;
  shouldHide?: boolean;
}

interface MusicCatalog {
  [name: string]: AudioPathForMusicApp;
}

export const MUSIC: MusicCatalog = {
  midday: {
    path: new URL('../../../assets/audio/aeolian.mp3', import.meta.url),
    id: 'music-midday',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'Midday Sun'
  }, 
  desolation: { // separate this into wind (not included), Wise Woman's Song, and the creepy thing
    path: new URL('../../../assets/audio/desolation.mp3', import.meta.url),
    id: 'music-desolation',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'The Wise Woman\'s Song',
  },
  explore: { // firebirds music. Expand, maybe include the other part?
    path: new URL('../../../assets/audio/explore.mp3', import.meta.url),
    id: 'music-explore',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'Explore',
  }, 
  home: {
    path: new URL('../../../assets/audio/home.mp3', import.meta.url),
    id: 'music-home',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'Good Morning',
  }, 
  jazz: { // add to
    path: new URL('../../../assets/audio/jazz.mp3', import.meta.url),
    id: 'music-jazz',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'Lazy Afternoon',
  },
  sunrise: { // add to?
    path: new URL('../../../assets/audio/sunrise.mp3', import.meta.url),
    id: 'music-sunrise',
    isLoop: false,
    coverArt: undefined,
    shouldHide: undefined,
    songTitle: 'Fanfare of the Beginning',
  },
  swans: {
    path: new URL('../../../assets/audio/swans.mp3', import.meta.url),
    id: 'music-swans',
    isLoop: false,
    coverArt: SKETCH_DIARY_IMAGES.swans7,
    shouldHide: undefined,
    songTitle: 'Keep Your Beak to Yourself',
  }, 
}