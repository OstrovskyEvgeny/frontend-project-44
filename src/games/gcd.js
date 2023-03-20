import randomNum from '../random-num.js';

export const rule = 'Find the greatest common divisor of given numbers.';

export const getTask = () => {
  const a = randomNum(2);
  const b = randomNum(2);

  return `${a} ${b}`;
};

export const verification = (currentTask) => {
  const [a, b] = currentTask.split(' ');

  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
  };

  return nod(a, b);
};
