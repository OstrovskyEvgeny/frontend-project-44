#!/usr/bin/env node
import play from '../src/index.js';
import { gameRulesEven } from '../src/games-elements/game-rules.js';
import { getRandom } from '../src/games-elements/tasks-generation.js';
import { checkEven } from '../src/games-elements/tasks-check.js';

play(gameRulesEven, getRandom, checkEven);
