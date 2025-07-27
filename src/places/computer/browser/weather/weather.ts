import { JANUARY_COLORS } from "../../../../shared/color";
import { createDivWithElements, removeByClassName, setBackground } from "../../../../shared/helpers";
import { createBrowserTabWithText } from "../../computer.helpers";
import { getTenDayForecast, getTwentyFourHourForecast } from "./weather.helpers";
import { WEATHER_ICONS } from './weather.constants';
import './weather.css';
 
export function showWeatherTabName(): HTMLButtonElement {
  return createBrowserTabWithText('Weather', ['browser'], 'weather-tab')
}
export function leaveWeatherTab() {
  removeByClassName('weather');
  document.getElementById('weather-tab')?.classList.remove('browser-tab-active');
}

function twentyFourHourForecast(): HTMLDivElement {
  const hourlyHeader = document.createElement('h2');
  hourlyHeader.innerText = "Twenty-four-hour forecast";
  const forecast = getTwentyFourHourForecast();
  const hourlyDivs = forecast.map((hour, index) => {
    const time = document.createElement('span');
    time.classList.add('computer-browser-weather-hour-label');
    time.id = `computer-browser-weather-label-${hour.time.getTime()}`;
    time.innerText = `${hour.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    const weather = document.createElement('span');
    weather.classList.add('computer-browser-weather-hour-weather');
    weather.id = `computer-browser-weather-${hour.time.getTime()}-${hour.weather}`;
    weather.innerText = WEATHER_ICONS[hour.weather];
    const temperature = document.createElement('span');
    temperature.classList.add('computer-browser-weather-hour-temperature');
    temperature.id = `computer-browser-weather-${hour.time.getTime()}-${temperature}`;
    temperature.innerText = `${hour.temperature}°F`
    const hourlyDiv = createDivWithElements([time, weather, temperature], ['computer-browser-weather-hour'], `computer-browser-weather-hour-${hour.time.getHours()}`);
    function removeHighlights() {
      const hours = document.getElementsByClassName('computer-browser-weather-hour');
      for (let i = 0; i < hours.length; i++) {
        hours[i].classList.remove('computer-browser-weather-hour-highlighted')
      }
      removeByClassName('computer-browser-weather-hour-prose');
    }
    function highlight() {
      removeHighlights();
      hourlyDiv.classList.add('computer-browser-weather-hour-highlighted');
      const prose = document.createElement('p');
      prose.classList.add('computer-browser-weather-hour-prose');
      prose.innerText = hour.prose;
      document.getElementById('computer-browser-weather-24hrs-outer-container')?.append(prose);
    }
    hourlyDiv.addEventListener('click', highlight);
    if (index === 0) {
      highlight();
    }
    return hourlyDiv;
  })
  const forecasts = createDivWithElements(hourlyDivs, [], 'computer-browser-weather-24hrs-container');
  return createDivWithElements([hourlyHeader, forecasts], [], 'computer-browser-weather-24hrs-outer-container');
}

function tenDayForecast(): HTMLDivElement {
  const dailyHeader = document.createElement('h2');
  dailyHeader.innerText = "Ten-day forecast";
  const forecast = getTenDayForecast();
  const dailyDivs = forecast.map(day => {
    const date = document.createElement('span');
    date.classList.add('computer-browser-weather-date-label');
    date.id = `computer-browser-weather-label-${day.day}`;
    date.innerText = `Jan ${day.day}`;
    const weather = document.createElement('span');
    weather.classList.add('computer-browser-weather-date-weather');
    weather.id = `computer-browser-weather-date-weather-${day.day}`;
    weather.innerText = day.weather.map(weather => WEATHER_ICONS[weather]).join('');
    const lowToHigh = document.createElement('span');
    lowToHigh.classList.add('computer-browser-weather-date-temperature');
    lowToHigh.id = `computer-browser-weather-date-weather-temperature-${day.day}`;
    lowToHigh.innerText = `${day.low}°F - ${day.high}°F`;
    return createDivWithElements([date, weather, lowToHigh], ['computer-browser-weather-date'], `computer-browser-weather-date-${day.day}`);
  });
  const forecastContainer = createDivWithElements(dailyDivs, [], 'computer-browser-weather-10d-container');
  return createDivWithElements([dailyHeader, forecastContainer], [], 'computer-browser-weather-10d-outer-container');
}
export function switchToWeatherTab() {
  const all = document.getElementsByTagName('html')[0];
  setBackground(JANUARY_COLORS.white);
  document.getElementById('weather-tab')?.classList.add('browser-tab-active')
  const hourlyForecast = twentyFourHourForecast();
  const dailyForecast = tenDayForecast();
  all.append(createDivWithElements([hourlyForecast, dailyForecast], ['weather', 'browser'],'computer-browser-weather-container'));
  document.getElementById('computer-datetime-picker')?.addEventListener('change', switchToWeatherTab);
}