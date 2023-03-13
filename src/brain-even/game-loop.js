import { correct } from '../phrases.js';
import getName from '../cli.js';
import getRandomNumAndUserAnswer from './get-right-and-user-answer.js';

export default () => {
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const [rightAnswer, userAnswer] = getRandomNumAndUserAnswer();
    if (userAnswer === rightAnswer) {
      console.log(correct);
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
