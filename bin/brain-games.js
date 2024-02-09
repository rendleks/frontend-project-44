#!/usr/bin/env node
import { whatIsYourName } from '../src/cli.js';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = whatIsYourName();
  console.log(`Hello, ${name}!`);
  return name;
}
