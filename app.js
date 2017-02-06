var quizState = {
  currentQuestion: -1,
  userAnswers: [],
  score: 0,
  answerDisplay: false,
  questions: [
    {
      questionText: "Who plays Barney Stinson?",
      choices: ["Neil Patrick Harris", "Jared Leto", "John Travolta","Jason Seigel"],
      correctAnswer: 0
    },
    {
      questionText: "Where did Lilly and Marshall get married?",
      choices: ["On the beach", "The White House", "Van Smoote House", "In Atlantic City"],
      correctAnswer:  2
    },
    {
      questionText: "What is the name of the bar the group goes to all the time?",
      choices: ["Frosty's", "McGees", "Hand-in-Hand", "MacLarens"],
      correctAnswer: 3
    },
    {
      questionText: "Who does Robin get married to?",
      choices: ["Marshall", "Ted", "Barney", "Lilly"],
      correctAnswer: 2
    },
    {
      questionText: "What is Ted Mosby's job?",
      choices: ["Sailor", "Architect", "Engineer", "Software Developer"],
      correctAnswer: 1
    }
  ]
};

function welcomeScreen(state, element) {
  var welcomeHtml =  '<h1>Quiz App</h1>' +
          '<p>How well do you know How I Met Your Mother?</p>' +
          '<button type="button" class="welcomeButton">Start Here</button>';
  element.html(welcomeHtml);
}

function submitAnswer(state, index) {
  if (index === state.questions[index].correctAnswer){
    state.score+=1;
  }
  state.userAnswers.push(index);
    // console.log(quizState.userAnswers);
}

function startQuiz(state) {
  state.userAnswers = [];
  state.currentQuestion = 0;
}


// function checkAnswer(state, index) {
//   if (state.userAnswers[state.userAnswers.length - 1] == state.questions[index].correctAnswer) {
//     return state.score+=1;
//     displayCorrectAnswerMessage(state, $('.answers'));
//   } else {
//     displayWrongAnswerMessage(state, $('.answers'));
//   }
// }
function displayCorrectAnswerMessage(state, element) {
  var answerHtml = "<p>That was Legend....wait for it.... dary. LEGENDARY!</p>"
  element.html(answerHtml);
}
function displayWrongAnswerMessage(state, element) {
  var answerHtml = "<p>You are not worthy</p>";
  element.html(answerHtml);
}

function nextQuestion(state) {
  state.currentQuestion++;
}
// function displayScore(state) {
//   console.log();
// }
//
// displayScore(quizState);



function questionsTemplate(state, element) {
  var i = state.currentQuestion;
  var questionsHtml = "<h3>Question " + (i+1) + " / " + state.questions.length + "</h3>" +
    '<p>Your score is: ' + state.score + '</p>' +
      '<p>' + state.questions[i].questionText + '</p>' +
      '<ul>' +
        '<li><input type="radio" name="answer">' + state.questions[i].choices[0] + '</input></li>' +
        '<li><input type="radio" name="answer">' + state.questions[i].choices[1] + '</input></li>' +
        '<li><input type="radio" name="answer">' + state.questions[i].choices[2] + '</input></li>' +
        '<li><input type="radio" name="answer">' + state.questions[i].choices[3] + '</input></li>' +
      '</ul>' +
      '<button type="submit" class="submitButton">Submit</button>';
  element.html(questionsHtml);
}


// nextQuestion(quizState);
// questionsTemplate(quizState, $('.quiz'));




// $(function eventListeners() {
//   welcomeScreen(quizState, $('.quiz'));
//   $('.quiz').on('click', '.welcomeButton', function(event) {
//
//   });
// });



//
 submitAnswer(quizState, 0);
// checkAnswer(quizState, 0);
