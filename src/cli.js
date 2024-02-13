import readlineSync from 'readline-sync';

function whatIsYourName() {
  const name = readlineSync.question('May I have your name?: ');
  return name;
}

function getAwswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = whatIsYourName();
  console.log(`Hello, ${name}!`);
  return name;
}

export { whatIsYourName, getAwswer, greeting };
