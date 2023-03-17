#!/usr/bin/env node
import play from '../src/index.js';
import { gameRulesCalc } from '../src/games-elements/game-rules.js';
import { getTaskCalc } from '../src/games-elements/tasks-generation.js';
import { checkCalc } from '../src/games-elements/tasks-check.js';

play(gameRulesCalc, getTaskCalc, checkCalc);
