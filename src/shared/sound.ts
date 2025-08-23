import { AudioURLSrc } from "./constants";
import { createButtonWithText } from "./helpers";

interface WindowWithAudio {
  canPlayAudio?: boolean;
}

interface AudioEndedCallback {
  callback: () => void;
  alternateTimeout: number; // milliseconds
}

export const SOUND_CONTROL_ID = 'sound-control';

function togglePlayingSound() {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  if (windowWithAudio.canPlayAudio) {
    windowWithAudio.canPlayAudio = false;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => {
      if (elem.id !== 'music-player') {
        elem.muted = true
      }
    });
    document.getElementById('sound-control')!.innerText = '🔇'
  } else {
    windowWithAudio.canPlayAudio = true;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => elem.muted = false);
    document.getElementById('sound-control')!.innerText = '🔈'
    const homeSong = document.getElementById('home-song') as HTMLAudioElement;
    if (homeSong && homeSong.paused) {
      homeSong.play()
    }
  }
}

export function createSoundControl(): HTMLButtonElement {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  windowWithAudio.canPlayAudio = false;
  const soundControl = createButtonWithText('🔇', [], 'sound-control');
  soundControl.addEventListener('click', togglePlayingSound);
  return soundControl;
}

export function changeAudioSource(audio: HTMLAudioElement, newSource: URL) {
  const audioWithURLSRC = (audio as unknown) as AudioURLSrc;
  audioWithURLSRC.src = newSource;
}

function canPlayAudio(): boolean {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  return !!windowWithAudio.canPlayAudio;
}

export function playIfAllowed(audio: HTMLAudioElement | undefined, callbackStuff?: AudioEndedCallback) {
  if (!!audio && canPlayAudio()) {
    audio.muted = false;
    audio.play();
    if (callbackStuff) {
      audio.addEventListener('ended', callbackStuff.callback)
    }
  } else if (callbackStuff) {
    setTimeout(callbackStuff.callback, callbackStuff.alternateTimeout);
  }
} 