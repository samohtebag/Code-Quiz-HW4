var startButton = document.getElementById("startbtn");
var questionsContainer = document.getElementById("question-container");
var quizClock = document.getElementById("clock");
var introScreen = document.getElementById("intro");
var questionsElement = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("nextbtn");
var submitButton = document.getElementById("submit-btn");
var submitScreen = document.getElementById("submit-score");
var theClock;
var timeClock = 50;

var shuffleQuestions, currentQuestion, userName;
var correctAnswers = 0;

// event listeners for game start button, and next button
startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion();
});

submitButton.addEventListener("click", function (e) {
    e.stopPropagation();
    addScore();
    window.location.href = "Code-Quiz-HW4/highscores.html"
});

function startGame() {
    startButton.classList.add("hide");
    introScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    timeAlert();
    nextQuestion();
}

function timeAlert() {
    theClock = setInterval(() => {
      if (timeClock >= 0) {
        quizClock.textContent = timeClock;
        timeClock--;
      } else if (timeClock === 0) {
        quizClock.textContent = timeClock;
        timeClock--;
      } else {
        gameOver();
      }
    }, 1000);
}

function nextQuestion() {
    resetMyQuiz();
    showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
    questionsElement.innerText = question.question;
    question.options.forEach((answer) => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", pickAnswer);
        answerButtons.appendChild(button);
    });
}

function resetMyQuiz() {
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function pickAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if (!correct) {
        timeClock -= 8;
    }
    
    Array.from(answerButtons.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffleQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove("hide");
    } else {
        gameOver()
    }

    if (selectedButton.dataset = correct) {
        correctAnswers +=10;
    }
    console.log(correctAnswers);
    document.getElementById("correct-answers").innerHTML = correctAnswers
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function gameOver(timeClock) {
    questionsContainer.classList.add("hide");
    introScreen.classList.add("hide");
    submitScreen.classList.remove("hide");
    clearInterval(theClock)
}

function addScore () {
    userName = document.getElementById('initials').value.trim()

    var newScore = {
        name: userName,
        score: correctAnswers
    };
    var topScores = JSON.parse(localStorage.getItem("topScores") || "[]");
    topScores.push(newScore)
    localStorage.setItem("topScores", JSON.stringify(topScores));
}

