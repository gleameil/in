export interface WindowWithClock extends Window {
  clock?: number; // intervalID updating EvernostianNow once a minute; can be cleared and deleted by calling stopTime and recreated by calling startTime from time.ts
}
