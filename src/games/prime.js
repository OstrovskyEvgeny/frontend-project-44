import randomNum from '../random-num.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getTask = () => randomNum(2, 500);

export const verification = (currentTask) => {
  for (let i = 2; i <= currentTask / 2; i += 1) {
    if (currentTask % i === 0) return 'no';
  }
  return 'yes';
};
