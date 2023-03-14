const sayHello = (userName) => `Hello, ${userName}!`;
const correct = 'Correct!';
const question = 'Question: ';
const yourAnswer = 'Your answer: ';
const welcome = 'Welcome to the Brain Games!';
const sayCongratulations = (userName) => `Congratulations, ${userName}!`;
const sayWrongAnswer = (userAnswer, rightAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;

export {
  correct, question, yourAnswer, welcome, sayCongratulations, sayHello, sayWrongAnswer,
};
