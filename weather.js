#!/usr/bin/env 
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
if (!token.length) {
  printError('нет токена');
  return;
}
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('токен сохранен');
  } catch (e) {
    printError(e.message);
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);    
  if(args.h) {
    return printHelp();
  }
  if (args.s) {
    // сохранить город
  }
  if(args.t) {
    // сохранить токен
    return saveToken(args.t);    
  }
  // вывести погоду  
  getWeather('чебоксары');
};

initCLI();
