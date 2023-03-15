const taskCheckEven = (currentTask) => {
  const rightAnswer = currentTask % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};

const taskCheckCalc = (currentTask) => {
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

export { taskCheckEven, taskCheckCalc };
