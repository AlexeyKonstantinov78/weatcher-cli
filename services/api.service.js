import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
    default:
      return '';
  }
};

const getWeather = async () => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);  
  const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);  
  if (!token) {
    throw new Error('нет токена API, задайте через команду');
  }

  if (!city) {
    throw new Error('нет города, задайте через команду');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  });
  
  return data;
};

export { getWeather, getIcon };