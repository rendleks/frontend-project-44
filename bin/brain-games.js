#!/usr/bin/env node
import answer from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = answer();
console.log(`Hello, ${name}!`);
