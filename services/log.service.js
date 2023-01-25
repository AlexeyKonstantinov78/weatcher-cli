import chalk from 'chalk';
import dedent from 'dedent-js';

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

export { 
  printError,
  printSuccess,
  printHelp
};  