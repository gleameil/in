import { IMAGE_SOURCES } from "./photos.constants";
import { ImagePathAndAltText, SHARED_IMAGES } from "../../../shared/constants";
import { JANUARY_COLORS } from "../../../shared/color";
import { createButtonWithImage, createButtonWithText, createDivWithElements, createImage, removeByClassName, setBackground } from "../../../shared/helpers";
import { createAppButtonWithEmojiOrText } from "../computer.helpers"
import './photos.css';
import { ImageCatalog } from "../../../shared/constants";
import { anyModal, close } from '../../garbage/garbage.helpers';

export function photosIcon(): HTMLButtonElement {
  return createAppButtonWithEmojiOrText('🖼', [], 'photos-icon-button');
}

function closePhotos() {
  removeByClassName('photos');
}

export function getBackgroundPath(id: string | undefined): ImagePathAndAltText | undefined {
  const backgroundIndices = id?.split('-').map((idx: string): number => parseInt(idx));
  if (backgroundIndices) {
    const backgroundImageSet = IMAGE_SOURCES[backgroundIndices[0]]
    const keys = Object.keys(backgroundImageSet).sort().filter((elem: string): boolean => !backgroundImageSet[elem].shouldHide)
    const key = keys[backgroundIndices[1]];
    return backgroundImageSet[key];
  }
  return undefined;
}

function openIndividualPhoto(image: ImagePathAndAltText, id: string) {
  document.getElementById('photos-large-image')?.remove()
  const imageModal = document.getElementById('photos-image-modal')!
  const mainImage = createImage(image, ['photos-modal-content'], 'photos-large-image');
  const desktopBackgroundButton = createButtonWithText('Set as desktop background', ['photos-modal-content'], 'photos-desktop-background-button');
  desktopBackgroundButton.addEventListener('click', () => {
    localStorage.setItem('jennies-room-bg',  id);
    alert('Desktop background set!')
  });
  imageModal.append(mainImage, desktopBackgroundButton);
  document.querySelector('.garbage-x')?.addEventListener('click', () => {
    removeByClassName('photos-modal-content');
    close();
  })
  imageModal.style.display = 'block';
}

function setUpPhotos(goBack: () => void): HTMLDivElement {
  const initialValue: HTMLButtonElement[] = [];
  const photosToLookAt = IMAGE_SOURCES.reduce((acc: HTMLButtonElement[], curr: ImageCatalog, index): HTMLButtonElement[] => {
    const imageNamesInCatalog = Object.keys(curr).sort().filter(name => !curr[name].shouldHide );
    return acc.concat(imageNamesInCatalog.map((name: string, idx: number): HTMLButtonElement => {
      const photoButton = createButtonWithImage(createImage(curr[name], ['photos-image'], `photos-image${index}-${idx}`), ['photos-image-button'], `photos-image-button${index}-${idx}`);
      photoButton.addEventListener('click', () => {
        openIndividualPhoto(curr[name], `${index}-${idx}`);
      });
      return photoButton;
    }
  ));
  }, initialValue);
  const imageModal = anyModal();
  imageModal.id = 'photos-image-modal';
  const xImage = createImage(SHARED_IMAGES.x, ['photos', 'close-button-image'], 'photos-close-button-image');
    const closeButton = createButtonWithImage(xImage, ['photos', 'close-button'], 'photos-close-button');
    closeButton.addEventListener('click', () => {
      closePhotos();
      goBack();
    });
  return createDivWithElements([...photosToLookAt, imageModal, closeButton], ['photos'], 'photos-container');
}

export function photos(goBack: () => void) {
  const all = document.getElementsByTagName('html')[0];
  setBackground(JANUARY_COLORS.black, {
    degrees: 150,
    color1: JANUARY_COLORS.black,
    color2: JANUARY_COLORS.blue,
  });
  all.append(setUpPhotos(goBack));
}