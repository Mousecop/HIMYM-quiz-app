var quizState = {
  currentQuestion: -1,
  userAnswers: [],
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
  state.userAnswers.push(index);
  console.log(quizState.userAnswers);
}

function startQuiz(state) {
  state.score = 0;
  state.currentQuestion = 0;
}


function checkAnswer(state, index) {
  if (state.userAnswers[state.userAnswers.length - 1] == state.questions[index].correctAnswer) {
    displayCorrectAnswer(state, $('.answers'));
  } else {
    displayWrongAnswer(state, $('.answers'));
  }
}
function displayCorrectAnswer(state, element) {
  var answerHtml = "<p>That was Legend....wait for it.... dary. LEGENDARY!</p>"
  element.html(answerHtml);
}
function displayWrongAnswer(state, element) {
  var answerHtml = "<p>You are not worthy</p>";
  element.html(answerHtml);
}


function renderQuestions(state, index) {
  
}








$(function eventListeners() {
  welcomeScreen(quizState, $('.quiz'));
  $('.quiz').on('click', '.welcomeButton', function(event) {

  });
});




// submitAnswer(quizState, 0);
// checkAnswer(quizState, 0);
