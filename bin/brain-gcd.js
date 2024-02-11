#!/usr/bin/env node
import { getAwswer } from '../src/cli.js';
import greeting from './brain-games.js';

function gcd() {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let correnctCountAnswer = 0;

  while (correnctCountAnswer < 3) {
    const randomNum1 = Math.floor(Math.random() * 50);
    const randomNum2 = Math.floor(Math.random() * 50);
    console.log('Question:', randomNum1, randomNum2);
    const answer = Number(getAwswer());
    const corectAnswer = nod(randomNum1, randomNum2);
    if (corectAnswer === answer) {
      console.log('Correct!');
      correnctCountAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

function nod(num1, num2) {
  let result;
  let minNum = num1 > num2 ? num2 : num1;
  for (let i = 1; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    } 
  }
  return result;
}

gcd();