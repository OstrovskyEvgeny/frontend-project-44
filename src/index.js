import getName from './cli.js';
import gameLoop from './games-elements/game-loop.js';

export default (gameRules, taskGeneration, checkRightAnswer) => {
  const userName = getName();
  console.log(gameRules);
  gameLoop(userName, taskGeneration, checkRightAnswer);
};
