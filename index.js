var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hey, what's your name? ");
var welcomeUser = "Namaste, " + userName + ". Welcome to the game: 'Do you know MANTHAN?'"
console.log(welcomeUser);
console.log("-+-+-+-+-+-+-")
var score = 0;

console.log("Type your answer in lowercase/small letters only.")
console.log("HINT: Each answer has only single word.")
console.log(" ")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Great, it's a correct answer!");
    score = score + 1
  } else {
    console.log("Oops, '", userAnswer, "' is the wrong answer!")
  }
  console.log("Your current score is: ", score);
  console.log("----------")
}

var q1 = {
  question: "Which city does Manthan live in? ",
  answer: "valsad"
}
var q2 = {
  question: "Who is Manthan's favorite footballer?  ",
  answer: "messi"
}
var q3 = {
  question: "What is Manthan's favorite food item? ",
  answer: "pizza"
}
var q4 = {
  question: "Who is Manthan's wife? ",
  answer: "pooja"
}
var q5 = {
  question: "What is Manthan's zodiac sign? ",
  answer: "leo"
}
var q6 = {
  question: "Which is Manthan's favorite travel place? ",
  answer: "goa"
}

var questions = [q1, q2, q3, q4, q5, q6]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! Your final score is: ", score);
console.log("-+-+-+-+-+-+-");
console.log("Highest scores are:");
console.log("(1) Manthan: 6");
console.log("(2) Pooja: 6");
console.log(" ");
console.log("Have you beaten the highest scores? Share me the screenshot of your final score.")