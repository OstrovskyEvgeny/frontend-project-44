import readlineSync from 'readline-sync';
import getName from './cli.js';

export default (gameRules, taskGeneration, verification) => {
  const userName = getName();
  console.log(gameRules);

  for (let i = 1; i <= 3; i += 1) {
    const currentTask = taskGeneration(); // генерируем задание
    console.log(`Question: ${currentTask}`); // задаем вопрос
    const userAnswer = readlineSync.question('Your answer: '); // получаем ответ на вопрос от игрока
    const rightAnswer = verification(currentTask);// узнаем правельный ответ

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
