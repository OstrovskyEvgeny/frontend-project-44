const getRandom = (max = 100) => Math.floor(Math.random() * max);

const getTaskCalc = () => {
  const a = getRandom();
  const b = getRandom();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(3)];
  const task = `${a} ${operator} ${b}`;
  return task;
};

export { getRandom, getTaskCalc };
