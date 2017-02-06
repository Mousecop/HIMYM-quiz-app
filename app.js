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

function submitAnswer(state, index) {
  state.userAnswers.push(index);
}

function startQuiz(state) {
  state.score = 0;
  state.currentQuestion = 0;
}
