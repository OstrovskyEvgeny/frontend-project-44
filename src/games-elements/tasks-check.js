const checkEven = (currentTask) => {
  const rightAnswer = currentTask % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};

const checkCalc = (currentTask) => {
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

const checkGcd = (currentTask) => {
  let [a, b] = currentTask.split(' ');

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return String(a);
};

const checkProgression = (currentTask) => { // переписать универстально для всех возможноых случаев
  const index = currentTask.indexOf('..');
  const firstElement = currentTask[0];
  const step = currentTask[1] - firstElement;
  const result = firstElement + (index * step);
  return String(result);
};

export {
  checkEven, checkCalc, checkGcd, checkProgression,
};
