#!/usr/bin/env node
import play from '../src/index.js';
import { gameRulesEven } from '../src/games/game-rules.js';
import { getRandomNum } from '../src/games/tasks-generation.js';
import { evenTaskCheck } from '../src/games/tasks-check.js';

play(gameRulesEven, getRandomNum, evenTaskCheck);
