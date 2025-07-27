import { leaveWeatherTab, showWeatherTabName, switchToWeatherTab } from "./weather/weather";
import { leaveQuizzesTab, showQuizzesTabName, switchToQuizzesTab } from "./quizzes/quizzes";

export interface BrowserTab {
  name: 'weather' | 'quizzes';
  showTabName: () => HTMLButtonElement;
  leaveTab: () => void;
  switchToTab: () => void;
  shouldHide?: () => boolean;
}

export const BROWSER_TABS: BrowserTab[] = [
  {
    name: 'weather',
    showTabName: showWeatherTabName,
    leaveTab: leaveWeatherTab,
    switchToTab: switchToWeatherTab,
  },
  {
    name: 'quizzes',
    showTabName: showQuizzesTabName,
    leaveTab: leaveQuizzesTab,
    switchToTab: switchToQuizzesTab,
  }
];