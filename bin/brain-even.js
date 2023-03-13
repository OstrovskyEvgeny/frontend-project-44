#!/usr/bin/env node
import gameLoop from '../src/brain-even/game-loop.js';
import { welcome } from '../src/phrases.js';

console.log(welcome);
gameLoop();
