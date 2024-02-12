#!/usr/bin/env node
import { getAwswer } from '../src/cli.js';
import greeting from './brain-games.js';

function isSimple() {
  let result = 'yes';
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber === 1 || randomNumber === 4) {
    return { randomNumber, result: 'no' };
  }
  for (let i = 2; i < Math.floor(randomNumber / 2); i += 1) {
    if (randomNumber % i === 0) {
      return { randomNumber, result: 'no' };
    }
  }
  
  return { randomNumber, result };
}

function primeGame() {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correnctCountAnswer = 0;
  while (correnctCountAnswer < 3) {
    const corectAnswer = isSimple();
    console.log('Question:', corectAnswer.randomNumber);
    const answer = getAwswer();
    if (answer === corectAnswer.result) {
      console.log('Correct!');
      correnctCountAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corectAnswer.result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
}

primeGame();
