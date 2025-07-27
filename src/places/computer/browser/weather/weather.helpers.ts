import { Day, JANUARY_SCHEDULE, TimeForDay, Weather } from "../../../../shared/time/time.januaryConstants";
import { getTime, timeOfDayFromDate } from "../../../../shared/time/time";

export interface HourlyForecast {
  time: Date;
  temperature: number;
  weather: Weather;
  prose: string;
}

export interface DailyForecast {
  day: number;
  high: number;
  low: number;
  weather: Weather[];  
}

function isEvenHour(date: Date): boolean {
  return date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0;
}

function nextHour(date: Date): Date {
  const next = new Date(date.getTime());
  next.setHours(next.getHours() + 1);
  next.setMinutes(0);
  next.setSeconds(0);
  next.setMilliseconds(0);
  return next;
}

export function getTwentyFourHourForecast(): HourlyForecast[] {
  const evernostianNow = getTime();
  const twentyFourHours: Date[] = [];
  if (isEvenHour(evernostianNow)) {
    twentyFourHours.push(evernostianNow);
  }
  while (twentyFourHours.length < 24) {
    twentyFourHours.push(nextHour(twentyFourHours[twentyFourHours.length - 1] ?? evernostianNow));
  }
  return twentyFourHours.map(hour => {
    const timeOfDay = timeOfDayFromDate(hour)
    const timeForDay = JANUARY_SCHEDULE[hour.getDate() - 1][timeOfDay.name];
    return {
      time: hour,
      temperature: timeForDay.temperature ?? Math.floor(Math.random() * 90 - 40),
      weather: timeForDay.weather,
      prose: timeForDay.prediction ?? 'There sure is some weather out there, stay warm!',
    };
  })
}

export function getTenDayForecast(): DailyForecast[] {
  const evernostianNow = getTime();
  const tenDays: number[] = [evernostianNow.getDate()];
  while (tenDays.length < 10 && tenDays[tenDays.length - 1] < 31) {
    tenDays.push(tenDays[tenDays.length - 1] + 1);
  }
  return tenDays.map(dayNumber => {
    const day = JANUARY_SCHEDULE[dayNumber - 1];
    var high = -100;
    var low = 100;
    const weatherThatDay: Set<Weather> = new Set()
    Object.keys(day).forEach(key => {
      const temp = day[key].temperature;
      if ((temp ?? -100) > high) {
        high = temp;
      }
      if ((temp ?? 100) < low) {
        low = temp;
      }
      weatherThatDay.add(day[key].weather)
    });
    return {
      day: dayNumber,
      high,
      low,
      weather: Array.from(weatherThatDay),
    };
  })
}