import readlineSync from 'readline-sync';
import { welcome, sayHello } from './phrases.js';

export default () => {
  console.log(welcome);
  const userName = readlineSync.question('May I have your name? ');
  console.log(sayHello(userName));
  return userName;
};
