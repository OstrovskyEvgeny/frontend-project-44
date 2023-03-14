#!/usr/bin/env node
import getName from '../src/cli.js';
import { welcome, sayHello } from '../src/phrases.js';

console.log(welcome);
const userName = getName();
console.log(sayHello(userName));
