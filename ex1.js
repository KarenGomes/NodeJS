import chalk from "chalk";

console.log(chalk.blue.bgWhite.bold('Alura'));
console.log(chalk.blue('curso', 'de', 'NodeJS'))
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)
