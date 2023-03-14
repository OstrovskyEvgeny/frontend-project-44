#!/usr/bin/env node
import gameLoop from '../src/brain-even/game-loop.js';
import getName from '../src/cli.js';

const userName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameLoop(userName);
