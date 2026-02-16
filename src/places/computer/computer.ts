import { JANUARY_COLORS } from "../../shared/color";
import { createDivWithElements, createHomewardButton, removeByClassName, setBackground } from "../../shared/helpers";
import { BEGINNING_OF_JANUARY } from "../../shared/time/time.januaryConstants.ts";
import { getTime, setTime } from "../../shared/time/time";
import { APPS } from "./computer.constants";
import './computer.css';
import { dateTimeStringFromDate } from "./computer.helpers";
import { getBackgroundPath } from "./photos/photos";
import { IMAGE_SOURCES } from "./photos/photos.constants";
import { END_OF_FEBRUARY } from "../../shared/time/time.februaryConstants.ts";

export function leaveComputer() {
  removeByClassName('computer');
}

export function leaveHomeScreen() {
  removeByClassName('homescreen');
}

function setUpApps(comeHome: () => void): HTMLDivElement {
  const appsToShow = APPS.filter(app => !app.shouldHide || !app.shouldHide()) ;
  const appButtons = appsToShow.map(appInfo => {
    const icon = appInfo.showIcon();
    icon.classList.add('homescreen', 'computer');
    icon.addEventListener('click', () => {
      leaveHomeScreen();
      appInfo.show(() => setUpComputer(comeHome));
    })
    return icon;
  });
  return createDivWithElements(appButtons, ['homescreen', 'computer'], 'homescreen-apps');
}

function setUpTaskbar() {
  const datetimestring = dateTimeStringFromDate(getTime());
  const dateTimePicker = document.createElement('input');
  dateTimePicker.type = 'datetime-local';
  dateTimePicker.id = 'computer-datetime-picker';
  dateTimePicker.value = datetimestring;
  dateTimePicker.min = dateTimeStringFromDate(new Date(BEGINNING_OF_JANUARY));
  dateTimePicker.max = dateTimeStringFromDate(new Date(END_OF_FEBRUARY));
  dateTimePicker.addEventListener('change', (event) => {
    const chosenDate = new Date((event.target as HTMLInputElement)?.value);
    setTime(chosenDate);
  })
  return createDivWithElements([dateTimePicker], ['computer'], 'computer-taskbar');
}

export function setUpComputer(comeHome: () => void) {
  let artId = localStorage.getItem('jennies-room-bg') ?? undefined;
  setBackground(JANUARY_COLORS.white, undefined, undefined, getBackgroundPath(artId)?.path.href)
  const all = document.getElementsByTagName('html')[0];
  const homeward = createHomewardButton('Enough screen time', ['computer', 'homescreen'], () => {
    leaveComputer();
    comeHome();
  });
  all.append(homeward);
  all.append(setUpApps(comeHome));
  all.append(setUpTaskbar());
}