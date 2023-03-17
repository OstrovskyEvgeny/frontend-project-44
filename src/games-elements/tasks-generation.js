const getRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min) + min);
// min-max
const getTaskCalc = () => {
  const a = getRandom(100, 2);
  const b = getRandom(9, 2);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(3)];
  const task = `${a} ${operator} ${b}`;

  return task;
};

const getTaskGcd = () => {
  const a = getRandom(100, 2);
  const b = getRandom(100, 2);

  return `${a} ${b}`;
};

const getTaskProgression = () => {
  // создать массив из 10 элементов и заполнить его без цикла
  const coll = [];
  const firstElement = getRandom();
  const step = getRandom(30, 6);

  for (let i = 0; i < 10; i += 1) {
    coll.push(firstElement + (step * i));
  }
  const randomIndex = getRandom(9);
  coll[randomIndex] = '..';

  return coll;
};

export {
  getRandom, getTaskCalc, getTaskGcd, getTaskProgression,
};
