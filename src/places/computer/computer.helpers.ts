import { createButtonWithText } from "../../shared/helpers";

export function createAppButtonWithEmojiOrText(buttonTextOrEmoji: string, classNames: string[], id: string) {
  return createButtonWithText(buttonTextOrEmoji, ['app-icon-button', ...classNames], id);
}

export function createBrowserTabWithText(tabText: string, classNames: string[], id: string) {
  return createButtonWithText(tabText, ['browser-tab', ...classNames], id);
}

export function dateTimeStringFromDate(date: Date) : string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.length === 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const dateString = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;
  const hours = `${date.getHours()}`.length === 1 ? `0${date.getHours()}` : date.getHours();
  const minutes = `${date.getMinutes()}`.length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${year}-${month}-${dateString}T${hours}:${minutes}`;
}