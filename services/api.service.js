import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

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

export { getWeather };