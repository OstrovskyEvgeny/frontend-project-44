#!/usr/bin/env node
import play from '../src/index.js';
import { rule, verification } from '../src/games/even.js';
import randomNum from '../src/random-num.js';

play(rule, randomNum, verification);
