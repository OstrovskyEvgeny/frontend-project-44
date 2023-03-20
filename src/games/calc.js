import randomNum from '../random-num.js';

export const rule = 'What is the result of the expression?';

export const getTask = () => {
  const a = randomNum(2, 100);
  const b = randomNum(2, 9);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNum(0, 3)];
  const task = `${a} ${operator} ${b}`;

  return task;
};

export const verification = (currentTask) => {
  let result = 0;
  const arrTask = currentTask.split(' ');
  const a = Number(arrTask[0]);
  const b = Number(arrTask[2]);

  switch (arrTask[1]) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
      break;
  }

  return String(result);
};
