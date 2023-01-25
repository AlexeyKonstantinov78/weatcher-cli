#!/usr/bin/env 
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  
  if(args.h) {
    printHelp();
  }
  if (args.s) {

  }
  if(args.t) {
    // сохранить токен
    saveKeyValue('token', args.t);
  }
  // вывести погоду
};

initCLI();
