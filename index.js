const readlinesync = require('readline-sync');
const chalk = require('chalk');
const userName = readlinesync.question("What's your name? ");

console.log("Hi, Welcome! " + userName + " Let's see how good you're with FRIENDS");
let score = 0
 
function play (question, answer){
  let userAnswer = readlinesync.question(chalk.red(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("Correct")
    score += 10
    console.log(chalk.cyan("Score: " + score))
  } else{
    console.log("Wrong")
  }
}

let questions = [{
  question: "How many seasons are there of FRIENDS? ",
  answer : "10"
},{
  question: "What is Joey's pick up line? ",
  answer : "How you doin"
}, {
  question: "Who was the clean freak? ",
  answer : "Monica"
},{
  question: "How many times did Ross get divorced? ",
  answer : "3"
},{
  question: "Is FRIENDS the best series ever? ",
  answer : "Yes"
}];

for (let i=0 ; i < questions.length ; i++){
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("Congratulations!!! your final score is " + score));
