import { browserIcon, browse } from './browser/browser';
import { photosIcon, photos } from './photos/photos';
import { musicIcon, music } from './music/music';

export interface App {
  name: string;
  showIcon: () => HTMLButtonElement;
  show: (goBack: () => void) => void;
  shouldHide?: () => boolean; 
}

export const APPS: App[] = [
 {
  name: 'browser',
  showIcon: browserIcon,
  show: browse,
 },
 {
  name: 'music',
  showIcon: musicIcon,
  show: music,
 },
 {
  name: 'photos',
  showIcon: photosIcon,
  show: photos,
 }
];
