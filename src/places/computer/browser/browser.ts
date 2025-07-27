import { SHARED_IMAGES } from "../../../shared/constants";
import { createButtonWithImage, createDivWithElements, createImage, removeByClassName } from "../../../shared/helpers";
import { createAppButtonWithEmojiOrText } from "../computer.helpers"
import { BrowserTab, BROWSER_TABS } from "./browser.constants";
import './browser.css';

export function browserIcon(): HTMLButtonElement {
  return createAppButtonWithEmojiOrText('🌐', [], 'browser-icon-button');
}

function closeBrowser() {
  removeByClassName('browser');
}

function getCurrentTab(): BrowserTab {
  const currentTabName = localStorage.getItem('currentBrowserTabName') ?? 'weather';
  return BROWSER_TABS.find(tab => tab.name === currentTabName)!;
}

function setCurrentTab(tab: BrowserTab) {
  localStorage.setItem('currentBrowserTabName', tab.name);
}

function setUpTabs(goBack: () => void): HTMLDivElement {
  const currentTab = getCurrentTab();
  const tabsToShow = BROWSER_TABS.filter(tab => !tab.shouldHide || !tab.shouldHide());
  const tabs = tabsToShow.map(tab => {
    const tabButton = tab.showTabName()
    if (currentTab.name === tab.name) {
      tabButton.classList.add('browser-tab-active')
    }
    tabButton.addEventListener('click', () => {
      const activeTab = getCurrentTab();
      if (activeTab.name !== tab.name) {
        activeTab.leaveTab();
        setCurrentTab(tab);
        tab.switchToTab();
      }
    });
    return tabButton;
  });
  const xImage = createImage(SHARED_IMAGES.x, ['browser', 'close-button-image'], 'browser-close-button-image');
  const closeButton = createButtonWithImage(xImage, ['browser', 'intro', 'close-button'], 'browser-close-button');
  closeButton.addEventListener('click', () => {
    closeBrowser();
    goBack();
  });
  return createDivWithElements([...tabs, closeButton], ['browser'], 'browser-navigation-header');
}

export function browse(goBack: () => void) {
  const all = document.getElementsByTagName('html')[0];
  all.append(setUpTabs(goBack));
  getCurrentTab().switchToTab();
}