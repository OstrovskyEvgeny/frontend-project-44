const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const getTaskCalc = () => {
  const a = getRandom(2, 100);
  const b = getRandom(2, 9);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, 3)];
  const task = `${a} ${operator} ${b}`;

  return task;
};

const getTaskGcd = () => {
  const a = getRandom(2);
  const b = getRandom(2);

  return `${a} ${b}`;
};

const getTaskProgression = () => {
  const firstElement = getRandom();
  const step = getRandom(6, 30);

  let coll = [];
  coll.length = 10;
  coll.fill(0, 0);
  coll = coll.map((current, index) => firstElement + step * index);

  const randomIndex = getRandom(0, 9);
  coll[randomIndex] = '..';

  return coll;
};

export {
  getRandom, getTaskCalc, getTaskGcd, getTaskProgression,
};
