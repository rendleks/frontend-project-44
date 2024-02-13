#!/usr/bin/env node
import { getAwswer, greeting } from '../src/cli.js';


function isEven(number) {
  let result;
  if (Number(number) % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return result;
}

function games() {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correnctAnswer = 0;
  while (correnctAnswer < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Question:', randomNumber);
    const answer = getAwswer();
    if (isEven(randomNumber) === answer) {
      correnctAnswer += 1;
      console.log('Correct!');
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

games();
