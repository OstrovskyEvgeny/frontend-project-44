import readlineSync from 'readline-sync';

export default () => {
  // перечитать урок и подумать что можно с этим сделать
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};
