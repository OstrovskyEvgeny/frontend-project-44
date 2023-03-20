import randomNum from '../random-num.js';

export const rule = 'Find the greatest common divisor of given numbers.';

export const getTask = () => {
  const a = randomNum(2);
  const b = randomNum(2);

  return `${a} ${b}`;
};

export const verification = (currentTask) => {
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
