export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const verification = (currentTask) => {
  const rightAnswer = currentTask % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};
