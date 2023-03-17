import readlineSync from 'readline-sync';

export default (userName, taskGeneration, checkRightAnswer) => {
  // перенести элементы из index
  for (let i = 1; i <= 3; i += 1) {
    const currentTask = taskGeneration(); // генерируем задание
    console.log(`Question: ${currentTask}`); // задаем вопрос
    const userAnswer = readlineSync.question('Your answer: '); // получаем ответ на вопрос от игрока
    const rightAnswer = checkRightAnswer(currentTask);// узнаем правельный ответ

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
