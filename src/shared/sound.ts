import { AudioPath, AudioURLSrc } from "./constants";
import { createButtonWithText } from "./helpers";

interface WindowWithAudio {
  canPlayAudio?: boolean;
}

interface AudioEndedCallback {
  callback: () => void;
  alternateTimeout?: number; // milliseconds
}

export const SOUND_CONTROL_ID = 'sound-control';

export function startPlaylist(audioElementId: string, musicPaths: AudioPath[]) {
  const audio = document.getElementById(audioElementId) as HTMLAudioElement;
  if (!audio || musicPaths.length === 0) return;

  // Build callback chain in reverse so each step knows its successor
  const callbacks: (() => void)[] = [];
  musicPaths.forEach((_, i) => {
    const index = i;
    callbacks.push(() => {
      const track = musicPaths[index];
      ((audio as unknown) as AudioURLSrc).src = track.path;
      audio.currentTime = 0;
      const nextCallback = callbacks[(index + 1) % musicPaths.length];
      playIfAllowed(audio, { callback: nextCallback });
    });
  });

  callbacks[0]();
}

export const HOME_SONGS: AudioPath[] = [
  {
    path: new URL('../assets/audio/home.mp3', import.meta.url),
    id: 'music-home',
    isLoop: false,
  }, 
  { // add to
    path: new URL('../assets/audio/jazz.mp3', import.meta.url),
    id: 'music-jazz',
    isLoop: false,
  },
]

function togglePlayingSound() {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  if (windowWithAudio.canPlayAudio) {
    windowWithAudio.canPlayAudio = false;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => {
      if (elem.id !== 'music-player') {
        elem.muted = true;
      }
    });
    document.getElementById('sound-control')!.innerText = '🔇';
  } else {
    windowWithAudio.canPlayAudio = true;
    const audioElements = document.getElementsByTagName('audio');
    Array.from(audioElements).forEach(elem => elem.muted = false);
    document.getElementById('sound-control')!.innerText = '🔈';

    const homeSong = document.getElementById('home-song') as HTMLAudioElement;
    if (homeSong && homeSong.paused) {
      startPlaylist('home-song', HOME_SONGS);
    }
  }
}

export function setCanPlayFromQuery(query: URLSearchParams) {
  const canPlayQueryValue = query.get('canPlay');
  const windowWithAudio = (window as unknown) as WindowWithAudio;  
  windowWithAudio.canPlayAudio = canPlayQueryValue === 'true';
}

export function createSoundControl(): HTMLButtonElement {
  const windowWithAudio = (window as unknown) as WindowWithAudio;
  const soundControl = createButtonWithText(windowWithAudio.canPlayAudio ? '🔈': '🔇', [], 'sound-control');
  soundControl.addEventListener('click', togglePlayingSound);
  return soundControl;
}

export function changeAudioSource(audio: HTMLAudioElement, newSource: URL) {
  const audioWithURLSRC = (audio as unknown) as AudioURLSrc;
  audioWithURLSRC.src = newSource;
}

export function canPlayAudio(): boolean {
  let windowWithAudio = (window as unknown) as WindowWithAudio;
  return !!windowWithAudio.canPlayAudio;
}

export function playIfAllowed(audio: HTMLAudioElement | undefined, callbackStuff?: AudioEndedCallback) {
  if (!!audio && canPlayAudio()) {
    audio.muted = false;
    audio.play();
    if (callbackStuff) {
      audio.addEventListener('ended', callbackStuff.callback, { once: true })
    }
  } else if (callbackStuff && callbackStuff.alternateTimeout) {
    setTimeout(callbackStuff.callback, callbackStuff.alternateTimeout);
  }
} 