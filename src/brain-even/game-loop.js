import getRightAndUserAnswer from './get-right-and-user-answer.js';
import {
  sayCongratulations, correct, sayWrongAnswer,
} from '../phrases.js';

export default (userName) => {
  // const userName = getName();
  // console.log(sayHello(userName));
  // console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const [rightAnswer, userAnswer] = getRightAndUserAnswer();
    if (userAnswer === rightAnswer) {
      console.log(correct);
    } else {
      return console.log(sayWrongAnswer(userAnswer, rightAnswer, userName));
    }
  }
  return console.log(sayCongratulations(userName));
};
