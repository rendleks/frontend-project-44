import readlineSync from 'readline-sync';

function whatIsYourName() {
  const name = readlineSync.question('May I have your name?: ');
  return name;
}

function getAwswer() {
    const answer = readlineSync.question('Your answer: ');
    return answer;
}


export { whatIsYourName, getAwswer }