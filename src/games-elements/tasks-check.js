const CheckEven = (currentTask) => {
  const rightAnswer = currentTask % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};

const CheckCalc = (currentTask) => {
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

const CheckGcd = (currentTask) => {
  const arr = currentTask.split(' ');
  let a = arr[0];
  let b = arr[1];

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return String(a);
};

export { CheckEven, CheckCalc, CheckGcd };
