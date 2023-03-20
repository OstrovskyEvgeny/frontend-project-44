#!/usr/bin/env node
import play from '../src/index.js';
import { rule, getTask, verification } from '../src/games/progression.js';

play(rule, getTask, verification);
