const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correct: 1
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        options: ["variable x;", "var x;", "v x;", "declare x;"],
        correct: 1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "Both // and /* */", "#"],
        correct: 2
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Object Model",
            "Display Object Model"
        ],
        correct: 0
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        options: ["4", "'22'", "22", "Error"],
        correct: 1
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correct: 2
    },
]

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;
let selectedAnswer = null;

function startQuiz() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    document.getElementById("progressBar").style.display = "block";

    currentQuestion = 0;
    score = 0;
    timeLeft = 30;

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    timeLeft = 30;
    selectedAnswer = null;

    const question = quizData[currentQuestion];

    document.getElementById("questionCounter").textContent = `Question ${currentQuestion + 1}/${quizData.length}`;

    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    document.getElementById("progressFill").style.width = progress + "%";
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");

        optionDiv.className = "option";
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById("nextBtn").classList.remove("show");
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answerIndex;

    const question = quizData[currentQuestion];
    const options = document.querySelectorAll(".option");

    clearInterval(timerInterval);

    options.forEach((option, index) => {
        option.classList.add("disabled");

        if (index === question.correct) {
            option.classList.add("correct");
        }

        if (index === answerIndex && answerIndex !== question.correct) {
            option.classList.add("wrong");
        }
    });

    if (answerIndex === question.correct) {
        score++;

        document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
    }

    document.getElementById("nextBtn").classList.add("show");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 10) {
            timerElement.classList.add("warning");
        } else {
            timerElement.classList.remove("warning");
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);

            timeUp();
        }
    }, 1000);
}

function timeUp() {
    if (selectedAnswer === null) {
        const options = document.querySelectorAll(".option");
        const correctIndex = quizData[currentQuestion].correct;

        options.forEach((option, index) => {
            option.classList.add("disabled");

            if (index === correctIndex) {
                option.classList.add("correct");
            }
        });

        document.getElementById("nextBtn").classList.add("show");
    }
}

function showResults() {
    clearInterval(timerInterval);

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultsScreen").style.display = "block";
    document.getElementById("progressBar").style.display = "none";

    const totalQuestions = quizData.length;
    const correctAnswers = score;
    const wrongAnswers = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);

    document.getElementById("finalScore").textContent = `${score}/${totalQuestions}`;
    document.getElementById("totalQuestions").textContent = totalQuestions;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("wrongAnswers").textContent = wrongAnswers;
    document.getElementById("percentage").textContent = percentage + "%";

    const iconElement = document.getElementById("resultsIcon");
    const messageElement = document.getElementById("resultsMessage");

    if (percentage >= 80) {
        iconElement.textContent = "🏆";

        messageElement.textContent = "Excellent! You did amazing!";
    } else if (percentage >= 60) {
        iconElement.textContent = "👍";

        messageElement.textContent = "Good job! Keep it up!";
    } else if (percentage >= 40) {
        iconElement.textContent = "😊";

        messageElement.textContent = "Not bad! You can do better!";
    } else {
        iconElement.textContent = "📚";

        messageElement.textContent = "Keep learning! Practice makes perfect!";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("resultsScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("scoreDisplay").textContent = "Score: 0";
}
