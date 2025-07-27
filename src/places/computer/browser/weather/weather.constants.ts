
export const WEATHER_ICONS = {
  clear: '☀',
  cloudy: '☁',
  night: '☾',
  poemstorm: '🌬',
  snowsight: '🌤',
  whiteout: '❄',
};

export type WeatherIcon = typeof WEATHER_ICONS[keyof typeof WEATHER_ICONS];