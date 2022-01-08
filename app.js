import validator from "validator";
import chalk from "chalk";

const log = console.log;
const er = console.error;
log(chalk.blueBright.bold.bgYellowBright("Hare Krishna😍 "));

er(chalk.greenBright("Hello Arya!!"));

log(validator.isAlpha("3"));
