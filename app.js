var quizState = {
  currentQuestion: -1,
  userAnswers: [],
  score: 0,
  answerDisplay: false, // might not need
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
  var k = state.currentQuestion - 1 ;
  if (index == state.questions[k].correctAnswer){
    state.score+=1;
    displayCorrectAnswerMessage(state, $('.answers'));
  } else {
    displayWrongAnswerMessage(state, $('.answers'));
  }
  console.log(k);
  state.userAnswers.push(index);
}

function restartQuiz(state) {
  state.userAnswers = [];
  state.currentQuestion = -1;
  state.score = 0;
}

function displayCorrectAnswerMessage(state, element) {
  var answerHtml = "<h1>That was Legend....wait for it.... dary. LEGENDARY! -Barney Stinson</h1>" +
    '<button type="button" class="nextButton">Next</button>';
  element.html(answerHtml);
}
function displayWrongAnswerMessage(state, element) {
  var answerHtml = "<h1>You choose.... Poorly.</h1>" +
    '<button type="button" class="nextButton">Next</button>';
  element.html(answerHtml);
}

function nextQuestion(state) {
  state.currentQuestion++;
}

function questionsTemplate(state, element) {
  var i = state.currentQuestion;
  var questionsHtml = "<h3>Question " + (i+1) + " / " + state.questions.length + "</h3>" +
    '<p>Your score is: ' + state.score + '</p>' +
      '<p>' + state.questions[i].questionText + '</p>' +
      '<form>' +
      '<ul>' +
        '<li><input type="radio" name="answer" id="0">' + state.questions[i].choices[0] + '</input></li>' +
        '<li><input type="radio" name="answer" id="1">' + state.questions[i].choices[1] + '</input></li>' +
        '<li><input type="radio" name="answer" id="2">' + state.questions[i].choices[2] + '</input></li>' +
        '<li><input type="radio" name="answer" id="3">' + state.questions[i].choices[3] + '</input></li>' +
      '</ul>' +
      '</form>' +
      '<button type="submit" class="submitButton">Submit</button>';
  element.html(questionsHtml);
}

function resultsTemplate(state, element) {
  var resutlsHtml = '<h1>Here are your results!</h1>' +
    '<p>You got ' + state.score + ' out of ' + state.questions.length +
    '<button type="button" class="restartButton">Play Again!</button>';
    element.html(resutlsHtml);
}

$(function eventListeners() {
  if (quizState.currentQuestion === -1) {
    welcomeScreen(quizState, $('.quiz'));
  } else if (quizState.currentQuestion >= 0) {
    questionsTemplate(quizState, $('.questions'));
  } else if (quizState.currentQuestion >= 5) {
    resultsTemplate(quizState, $('.results'));
  }
  $('.quiz').on('click', '.welcomeButton', function(event) {
    $('.quiz').hide();
    $('.questions').show();
    nextQuestion(quizState);
    questionsTemplate(quizState, $('.questions'));
  });

  $('.questions').on('click', '.submitButton', function(event) {
    var userIndex = $('input[name="answer"]:checked').attr('id');
    if ($('input[name="answer"]:checked').length > 0) {
      $('.questions').hide();
      nextQuestion(quizState);
      submitAnswer(quizState, parseInt(userIndex));
      $('.answers').show();
    } else {
      alert("Don't be that person.. ");
    }

  });

  $('.answers').on('click', '.nextButton', function(event) {
    if (quizState.currentQuestion >= 5) {
      resultsTemplate(quizState, $('.results'));
      $('.answers').hide();
    } else {
      $('.questions').show();
      $('.answers').hide();
      questionsTemplate(quizState, $('.questions'));
    }
  });

  $('.results').on('click', '.restartButton', function(event) {
    restartQuiz(quizState);
    console.log(quizState.userAnswers);
    $('.results').hide();
    $('.quiz').show();
    welcomeScreen(quizState, $('.quiz'));
  });
});



/*
1) Need to get the ids of the radio buttons that the user clicks and submits on
  http://stackoverflow.com/questions/17636043/cannot-add-click-events-to-list-items
  ^ can put ids on lis and grab those to compare
2) Need submit button event listener to display correct or not
3) Add 'next' button but don't let them continue without submitting an answer.
4) What happens if they get the answer wrong and change there answer?
5) Need start over button for the end of quiz.
  -clear userAnswers when clicked
  -re-render the welcomeScreen
  -reset state to clean slate
*/
