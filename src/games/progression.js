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

  return coll;
};

export const verification = (currentTask) => {
  const index = currentTask.indexOf('..');
  let step = null;
  let result = null;

  if (index < 5) {
    step = currentTask[9] - currentTask[8];
    result = currentTask[index + 1] - step;
  } else {
    step = currentTask[1] - currentTask[0];
    result = currentTask[index - 1] + step;
  }

  return String(result);
};
