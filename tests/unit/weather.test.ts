import { describe, it, expect, beforeEach, vi } from 'vitest';

// mock the helpers to return deterministic data
vi.mock('../../../src/places/computer/browser/weather/weather.helpers', () => {
  return {
    getTwentyFourHourForecast: () => [
      { time: new Date(2026, 0, 1, 0, 0, 0), temperature: 32, weather: 'snow', prose: 'Cold' },
    ],
    getTenDayForecast: () => [
      { day: 1, high: 40, low: 20, weather: ['snow'] },
    ],
  };
});

import { switchToWeatherTab, leaveWeatherTab, showWeatherTabName } from '../../src/places/computer/browser/weather/weather';

describe('weather browser module', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    // create a weather tab button
    const tab = showWeatherTabName();
    document.body.append(tab);
  });

  it('showWeatherTabName returns a button with id', () => {
    const btn = document.getElementById('weather-tab');
    expect(btn).not.toBeNull();
    expect((btn as HTMLButtonElement).innerText).toContain('Weather');
  });

  it('switchToWeatherTab appends weather container and highlights first hour', () => {
    switchToWeatherTab();
    const container = document.querySelector('.weather');
    expect(container).not.toBeNull();
    // there should be an element created for the hourly forecast
    const hourly = document.getElementById('computer-browser-weather-hour-0');
    expect(hourly).not.toBeNull();
    // simulate click to trigger highlight and prose append
    (hourly as HTMLElement).click();
    const prose = document.querySelector('.computer-browser-weather-hour-prose');
    expect(prose).not.toBeNull();
  });

  it('leaveWeatherTab removes elements and cleans up classes', () => {
    switchToWeatherTab();
    leaveWeatherTab();
    expect(document.querySelector('.weather')).toBeNull();
  });
});
