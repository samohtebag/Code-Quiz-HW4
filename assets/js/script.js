var startButton = document.getElementById("startbtn");
var quizBox = document.getElementById("quizbox");
var quizClock = document.getElementById("clock");
var myQuestions = document.getElementById("questions");
var myButtons = document.getElementById("buttons");
var timeClock = 50;
var daClock;
var shuffleQuestions, currentQuestion;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    quizBox.classList.remove("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    timerStart= 50;
    quizClock.textContent = timerStart;
    daClock = setInterval(alertTime, 1000);
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
    myQuestions.innerText = question.question
    question.options.forEach(options => {
        var button = document.createElement("button");
        button.innerText = options.text;
        button.classList.add("btn");
        if (options.correct) {
            button.dataset.correct = options.correct;
        }
        button.addEventListener("click", pickAnswer)
        myQuestions.appendChild(button);
    });
}

function alertTime() {
    if (timeClock > 0) {
        timeClock--;
        return quizClock.textContent = timeClock;
    }
}


function pickAnswer() {

}


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false}
        ]
    },
]




//     {
//         question: "What html tag is NOT included in the HEAD tag?",
//         options: ["link", "meta", "title", "header"],
//         answer: "header"
//     },
//     {
//         question: "The instructions for a function are enclosed within what?.",
//         options: ["double quotes", "curly brackets", "parentheses", "square brackets"],
//         answer: "curly brackets"
//     },
//     {
//         question: "Arrays in Javascript can be used to store what?.",
//         options: ["numbers & strings", "other arrays", "booleans", "all of the above"],
//         answer: "all of the above"
//     },
//     {
//         question: "A useful tool used during development for debugging and printing content to the debugger is:",
//         options: ["Python", "terminal", "while loops", "console.log"],
//         answer: "console log"
//     },
//     {
//         question: "Question 4: A property of an object that is a function is called a what?.",
//         options: ["method", "string", "stylesheet", "boolean"],
//         answer: "method"
//     },
// ]

// // function startGame() {
// //     console.log("Started");
// //     titleScreen.classList.add("hide")
// //     quizScreen.classList.remove("hide")
// //     scoreDis.classList.remove("hide")
// //     timerStart = 75;
// //     quizTimer = setInterval(timeAlert, 1000);
// //    showQuestion();
// // }