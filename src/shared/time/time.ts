import { Day, JANUARY_SCHEDULE, Time, TimeForDay, TIMES } from "./time.januaryConstants";
import { WindowWithClock } from "./time.sharedConstants";

export function setTime(time: Date) {
  localStorage.setItem('evernostianNow', `${time.getTime()}`);
}

export function getTime(): Date {
  const startDate = new Date(2024, 0);
  const evernostianNowStringFromQuery = new URLSearchParams(window.location.search).get('time');
  const evernostianNow = parseInt(evernostianNowStringFromQuery ?? '') || parseInt(localStorage.getItem('evernostianNow') ?? '') || startDate;
  return evernostianNow ? new Date(evernostianNow) : startDate;
}

export function advanceTimeBy(minutes: number) {
  setTime(new Date(getTime().valueOf() + 60000 * minutes))
}

export function startTime() {
  setTime(getTime()); // if no time is stored in the browser, sets time to 12am Jan 1 2024 unless it's February, in which case it's Feb 1 2024
  if (!(window as WindowWithClock).clock) {
    (window as WindowWithClock).clock = setInterval(() => {
      advanceTimeBy(1);
     }, 60000);
  }
}

export function stopTime() {
  clearInterval((window as WindowWithClock).clock);
  delete((window as WindowWithClock).clock);
}

export function timestampForTimeOnDate(timestamp: number, hours: number, minutes: number): number {
  const newDate = new Date(timestamp);
  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  newDate.setSeconds(0);
  return newDate.getTime();
}
export function dayOfTheMonth(time?: Date): number {
  return time?.getDate() ?? getTime().getDate();
}
export function timeOfDayFromDate(time?: Date): Time {
  const zeroIndexedDay = dayOfTheMonth(time) - 1;
  const evernostianNow = time?.getTime() ?? getTime().getTime();
  const dawnBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].dawn.hours, JANUARY_SCHEDULE[zeroIndexedDay].dawn.minutes);
  const sunriseBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].sunrise.hours, JANUARY_SCHEDULE[zeroIndexedDay].sunrise.minutes);
  const morningBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].morning.hours, JANUARY_SCHEDULE[zeroIndexedDay].morning.minutes);
  const middayBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].midday.hours, JANUARY_SCHEDULE[zeroIndexedDay].midday.minutes);
  const afternoonBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].afternoon.hours, JANUARY_SCHEDULE[zeroIndexedDay].afternoon.minutes);
  const sunsetBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].sunset.hours, JANUARY_SCHEDULE[zeroIndexedDay].sunset.minutes);
  const duskBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].dusk.hours, JANUARY_SCHEDULE[zeroIndexedDay].dusk.minutes);
  const nightBegins = timestampForTimeOnDate(evernostianNow, JANUARY_SCHEDULE[zeroIndexedDay].night.hours, JANUARY_SCHEDULE[zeroIndexedDay].night.minutes);

  if (evernostianNow - nightBegins >= 0) {
    return TIMES[8];
  }
  if (evernostianNow - duskBegins >= 0) {
    return TIMES[7];
  }
  if (evernostianNow - sunsetBegins >= 0) {
    return TIMES[6];
  }
  if(evernostianNow - afternoonBegins >= 0) {
    return TIMES[5];
  }
  if (evernostianNow - middayBegins >= 0) {
    return TIMES[4];
  }
  if (evernostianNow - morningBegins >= 0) {
    return TIMES[3];
  }
  if (evernostianNow - sunriseBegins >= 0) {
    return TIMES[2];
  }
  if (evernostianNow - dawnBegins >= 0) {
    return TIMES[1];
  }
  return TIMES[0];
}

export function goToNextTimeOfDay() {
  const time = timeOfDayFromDate()
  const currentDay = dayOfTheMonth();
  const nextIndex = TIMES.indexOf(time) + 1;
  if (nextIndex === TIMES.length) {
    if (currentDay + 1 > 31) {
      setTime(new Date(2024, 0)); 
    } else {
      setTime(new Date(2024, 0, currentDay + 1));
    }
  } else {
    const nextTimeOfDay = TIMES[nextIndex]
    const nextTimeOfDayInSchedule = JANUARY_SCHEDULE[currentDay - 1][nextTimeOfDay.name]
    const nextTime = new Date(2024, 0, currentDay, nextTimeOfDayInSchedule.hours, nextTimeOfDayInSchedule.minutes);
    setTime(nextTime);
  }
}

export function goToNextKindOfWeather() {
  const time = timeOfDayFromDate();
  const currentDay = dayOfTheMonth();
  const oldWeather = JANUARY_SCHEDULE[currentDay - 1][time.name].weather;
  let newWeather = oldWeather;
  while (newWeather === oldWeather) {
    goToNextTimeOfDay();
    const newTime = timeOfDayFromDate();
    const newDay = dayOfTheMonth();
    newWeather = JANUARY_SCHEDULE[newDay - 1][newTime.name].weather;
  }
}

export function scheduleForNow(): TimeForDay {
  return JANUARY_SCHEDULE[dayOfTheMonth() - 1][timeOfDayFromDate().name];
}

export function previousTime(time: Time): Time {
  const currentIndex = TIMES.indexOf(time);
  const previousIndex = currentIndex - 1 < 0 ? TIMES.length - 1 : currentIndex - 1;
  return TIMES[previousIndex];
}