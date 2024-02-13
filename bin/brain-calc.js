#!/usr/bin/env node
import { getAwswer, greeting } from '../src/cli.js';

function expressionEvaluation(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }

  return result;
}

function calc() {
  const name = greeting();
  console.log('What is the result of the expression?');
  const allOperators = ['+', '-', '*'];
  let correnctCountAnswer = 0;

  while (correnctCountAnswer < 3) {
    const randomOperators = Math.floor(Math.random() * 3);
    const operator = allOperators[randomOperators];
    const randomNum1 = Math.floor(Math.random() * 50);
    const randomNum2 = Math.floor(Math.random() * 50);
    console.log('Question:', randomNum1, operator, randomNum2);
    const answer = Number(getAwswer());
    const correnctAnswer = expressionEvaluation(randomNum1, randomNum2, operator);
    if (correnctAnswer === answer) {
      console.log('Correct!');
      correnctCountAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correnctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

calc();
