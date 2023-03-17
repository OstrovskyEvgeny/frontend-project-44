#!/usr/bin/env node
import play from '../src/index.js';
import { gameRulesProgression } from '../src/games-elements/game-rules.js';
import { getTaskProgression } from '../src/games-elements/tasks-generation.js';
import { checkProgression } from '../src/games-elements/tasks-check.js';

play(gameRulesProgression, getTaskProgression, checkProgression);
