import randomNum from '../random-num.js';

export const rule = 'What number is missing in the progression?';

export const getTask = () => {
  const firstElement = randomNum();
  const step = randomNum(6, 30);

  let coll = [];
  coll.length = 10;
  coll.fill(0, 0);
  coll = coll.map((current, index) => firstElement + step * index);

  const randomIndex = randomNum(0, 9);
  coll[randomIndex] = '..';

  return coll.join(' ');
};

export const verification = (currentTask) => {
  let arr = currentTask.split(' ');
  arr = arr.map((current) => {
    if (current !== '..') {
      return Number(current);
    }
    return current;
  });

  const index = arr.indexOf('..');
  let step = null;
  let result = null;

  if (index < 5) {
    step = arr[9] - arr[8];
    result = arr[index + 1] - step;
  } else {
    step = arr[1] - arr[0];
    result = arr[index - 1] + step;
  }

  return String(result);
};
