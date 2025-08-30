import { Day, JANUARY_SCHEDULE, Time, TimeForDay, TIMES } from "./time.januaryConstants";
import { WindowWithClock } from "./time.sharedConstants";

// This can be called in various ways:
// Once a second while you stay In
// When you finish a poem and you're Out
// Or if you set it yourself from the laptop
// Of course, if you're willing to convert times to and from numerical timestamps,
// You can do this in your own localstorage or via a query param as well
export function setTime(time: Date) {
  localStorage.setItem('evernostianNow', `${time.getTime()}`);
}
// the time stored in your browser's localStorage, or, failing that,
// (if you've cleared localStorage or this is your first time)
// Jan 1 2024
export function getTime(): Date {
  const startDate = new Date(2024, 0);
  const evernostianNow = parseInt(localStorage.getItem('evernostianNow') ?? '');
  return evernostianNow ? new Date(evernostianNow) : startDate;
}

export function advanceTimeBy(minutes: number) {
  setTime(new Date(getTime().valueOf() + 60000 * minutes))
}

function setTimeFromQueryAndRemoveParam(): boolean {
  const query = new URLSearchParams(window.location.search);
  const evernostianNowStringFromQuery = query.get('time');
  const evernostianNowTimestamp = parseInt(evernostianNowStringFromQuery ?? '');
  // should never be falsy, aka 0, aka the epoch, because this creation does not go that far back in time
  if (evernostianNowTimestamp) {
    setTime(new Date(evernostianNowTimestamp));
    query.delete('time');
    window.location.replace(window.location.href.replace(window.location.search, query.toString()));
    return true
  }
  return false
}

// Sets the time to: 
// 1. the timestamp in the "time" query param, or, failing that,
// 2. what turns up in getTime()
// Then starts advancing time at a rate of one minute per minute :)
export function startTime() {
  const queryDidContainTime = setTimeFromQueryAndRemoveParam();
  if (!queryDidContainTime) {
    setTime(getTime());
  }
  if (!(window as WindowWithClock).clock) {
    (window as WindowWithClock).clock = setInterval(() => {
      advanceTimeBy(1);
     }, 60000);
  }
}

// Less necessary now that Out lives in its own codebase
// but a good option to have for all that :).
// Even so, time is reasonably linear while you're In.
export function stopTime() {
  clearInterval((window as WindowWithClock).clock);
  delete((window as WindowWithClock).clock);
}

/// Boring bits; don't look too closely 
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

// Will expand to include February
export function goToNextTimeOfDay() {
  const time = timeOfDayFromDate()
  const currentDay = dayOfTheMonth();
  const nextIndex = TIMES.indexOf(time) + 1;
  if (nextIndex === TIMES.length) {
    if (currentDay + 1 > 31) {
      // Where we loop back to the beginning. Expect this to change very soon.
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

// Making it harder to get trapped Out in the clouds or the night
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

// Sunrise and sunset are real for a particular place in the US
export function scheduleForNow(): TimeForDay {
  return JANUARY_SCHEDULE[dayOfTheMonth() - 1][timeOfDayFromDate().name];
}

export function previousTime(time: Time): Time {
  const currentIndex = TIMES.indexOf(time);
  const previousIndex = currentIndex - 1 < 0 ? TIMES.length - 1 : currentIndex - 1;
  return TIMES[previousIndex];
}