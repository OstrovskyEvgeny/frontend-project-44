import readlineSync from 'readline-sync';
import getRandomNumber from './random-number.js';
import { question, yourAnswer } from '../phrases.js';

export default () => {
  const randomNum = getRandomNumber();
  console.log(`${question}${randomNum}`);
  const userAnswer = readlineSync.question(yourAnswer);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

  return [rightAnswer, userAnswer];
};
