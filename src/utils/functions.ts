import Moment from 'moment';

export const kelvinToCelsius = (temp: number): string => {
  return `${Math.round(temp - 273.15)}°`;
};

export const roundCelsius = (temp: number): string => {
  return `${Math.round(temp)}°`;
};

export const moment12Hour = (dt: number): string => {
  return Moment.unix(dt).format('h:mma');
};

export const momentHourOnly = (dt: number): string => {
  return Moment.unix(dt).format('ha');
};

export const momentDay = (dt: number): string => {
  return Moment.unix(dt).format('ddd');
};

export const getWeatherIcon = (icon: string): string => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};
