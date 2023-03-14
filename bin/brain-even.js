#!/usr/bin/env node
import gameLoop from '../src/brain-even/game-loop.js';
import { welcome, sayHello } from '../src/phrases.js';
import getName from '../src/cli.js';

console.log(welcome);
const userName = getName();
console.log(sayHello(userName));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameLoop(userName);
