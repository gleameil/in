import { JANUARY_COLORS } from "../../shared/color";
import { createAudio, createDivWithElements, createImage, removeByClassName, setBackground } from "../../shared/helpers";
import { HOME_IMAGES } from "../home/constants";
import { createItem } from "../home/helpers";
import { begin } from './darkRoom.helpers';
import { DARK_ROOM_AUDIO } from "./darkRoom.constants";
import './darkRoom.css'


export function leaveDarkRoom() {
  removeByClassName('cell-content');
  removeByClassName('dr-audio');
}

function setUpLightSwitch(comeHome: ()=> void): HTMLDivElement {
  const lightSwitchImage = createImage(HOME_IMAGES.switch, [], 'dark-switch-image');
  return createItem(lightSwitchImage, 'dark-switch', () => {
    leaveDarkRoom();
    comeHome();
  });
}

function setUpDarkRoomAudio(): HTMLDivElement {
  const audioElements = Object.keys(DARK_ROOM_AUDIO).map(au => {
    const audio = createAudio(DARK_ROOM_AUDIO[au].path, [], DARK_ROOM_AUDIO[au].id);
    audio.controls = false;
    return audio;
  });
  return createDivWithElements(audioElements, ['dr-audio'], 'dr-audio');
}

export function setUpDarkRoom(comeHome: () => void) {
  setBackground(JANUARY_COLORS.black);
  const all = document.getElementsByTagName('html')[0];
  all.append(setUpLightSwitch(comeHome));
  all.append(setUpDarkRoomAudio())
  begin()
}