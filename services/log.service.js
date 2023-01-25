import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';

const printError = (error) => {
  console.log(chalk.bgRed(' Error ') + ' ' + error);
};

const printSuccess = (success) => {
  console.log(chalk.bgGreen(' SUCCES ') + ' ' + success);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgYellow(' HELP ')}
    Без параметров - вывод погоды
    -s [city] для установки города
    -h вывод помощи
    -t [API KEY] для уставноки токена
    `
  );
};

const printWeather = (res) => {
  console.log(
    dedent`${chalk.bgGreenBright(' Поогода ')} Погода в городе ${res.name}
    ${getIcon(res.weather[0].icon)}  ${res.weather[0].description}
    Температура: ${res.main.temp}
    Ощющается как: ${res.main.feels_like}
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed} м/с
    `
  );
};

export { 
  printError,
  printSuccess,
  printHelp,
  printWeather
};  