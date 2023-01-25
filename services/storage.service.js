// получить домашную директорию с помощю библиотеки os
import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {
  console.log(filePath);
  console.log(key);
  console.log(value);
  console.log(basename(filePath)); // получаем имя или катоалог последнего пути
  console.log(dirname(filePath)); // каатлог где находится
  console.log(extname(filePath)); // получаем расширение файла
  console.log(relative(filePath, dirname(filePath))); // относительными пути между двумя точками
  console.log(isAbsolute(filePath, dirname(filePath))); // проверка на абсолютный путь
  console.log(resolve('..')); // относительный путь исполнения папки
  console.log(sep); // сепаратор чем отделяется путь  внашей системе
  
};

export { saveKeyValue };