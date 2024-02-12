#!/usr/bin/env node
import { getAwswer } from '../src/cli.js';
import greeting from './brain-games.js';

function progression(startNum, step) {
  const result = [startNum];
  for (let i = 1; i < 10; i += 1) {
    const temp = result.at(-1);
    result.push(temp + step);
  }
  const randomIndex = Math.floor(Math.random() * 10);
  const numRandomIndex = result[randomIndex];
  result[randomIndex] = '..';
  return { result, numRandomIndex };
}

function progressionGame() {
  const name = greeting();
  console.log('What number is missing in the progression?');
  let correnctCountAnswer = 0;

  while (correnctCountAnswer < 3) {
    const randomNum1 = Math.floor(Math.random() * 50);
    const randomNum2 = Math.floor(Math.random() * 50);
    const numberSequence = progression(randomNum1, randomNum2);
    console.log('Question:', numberSequence.result.join(' '));
    const answer = Number(getAwswer());
    const corectAnswer = numberSequence.numRandomIndex;
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

progressionGame();
