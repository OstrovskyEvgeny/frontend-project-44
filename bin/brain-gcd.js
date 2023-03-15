#!/usr/bin/env node
import play from '../src/index.js';
import { gameRulesGcd } from '../src/games-elements/game-rules.js';
import { getTaskGcd } from '../src/games-elements/tasks-generation.js';
import { CheckGcd } from '../src/games-elements/tasks-check.js';

play(gameRulesGcd, getTaskGcd, CheckGcd);
