const questions = [

    {
        question: "HTML stands for?",
        answers: [
            { text: "Hyper Text Machine Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true }
        ]
    },

    {
        question: "CSS is used for?",
        answers: [
            { text: "Styling Web Pages", correct: true },
            { text: "Creating Database", correct: false },
            { text: "Making Operating System", correct: false },
            { text: "Sending Emails", correct: false }
        ]
    },

    {
        question: "JavaScript is used for?",
        answers: [
            { text: "only web ", correct: false },
            { text: "Making Web Pages Interactive", correct: true },
            { text: "Creating Hardware", correct: false },
            { text: "Printing Documents", correct: false }
        ]
    },

    {
        question: "Which tag creates a hyperlink?",
        answers: [
            { text: "<int>", correct: false },
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<url>", correct: false }
        ]
    },

    {
        question: "Which language is used to style web pages?",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "Python", correct: false },
            { text: "Java", correct: false }
        ]
    },

    {
        question: "Which symbol is used for an ID in CSS?",
        answers: [
            { text: "$", correct: false },
            { text: ".", correct: false },
            { text: "@", correct: false },
            { text: "#", correct: true }
        ]
    },

    {
        question: "Which symbol is used for a class in CSS?",
        answers: [
            { text: "@", correct: false },
            { text: "#", correct: false },
            { text: ".", correct: true },
            { text: "&", correct: false }
        ]
    },

    {
        question: "Which one is a programming language?",
        answers: [
            { text: "HTML", correct: false },
            { text: "python", correct: true },
            { text: "CSS", correct: false },
            { text: "HTTP", correct: false }
        ]
    },

    {
        question: "Which tag is used to create a paragraph?",
        answers: [
            { text: "<p>", correct: true },
            { text: "<para>", correct: false },
            { text: "<text>", correct: false },
            { text: "<pg>", correct: false }
        ]
    },

    {
        question: "Which tag is used to insert an image?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<pic>", correct: false },
            { text: "<photo>", correct: false },
        ]
    }

];


let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const resultBox = document.getElementById("resultBox");
const questionBox = document.getElementById("questionBox");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");


function startQuiz() {

    startScreen.style.display = "none";

    quizContainer.style.display = "block";

    showQuestion();

}


function showQuestion() {

    questionBox.innerHTML = "";

    const question = questions[currentQuestion];

    const questionTitle = document.createElement("div");

    questionTitle.classList.add("question");

    questionTitle.innerHTML =
        (currentQuestion + 1) + ". " + question.question;

    questionBox.appendChild(questionTitle);


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("option");

        button.textContent = answer.text;

        button.dataset.correct = answer.correct;

        button.onclick = selectAnswer;

        questionBox.appendChild(button);

    });


    nextBtn.style.display = "none";

}


function selectAnswer(event) {

    const selectedButton = event.target;

    const isCorrect =
        selectedButton.dataset.correct === "true";


    if (isCorrect) {

        selectedButton.classList.add("correct");

        selectedButton.innerHTML =
            "✓ " + selectedButton.textContent;

        score++;

    } else {

        selectedButton.classList.add("wrong");

        selectedButton.innerHTML =
            "✗ " + selectedButton.textContent;

    }


    // Correct answer ko green dikhana
    const allOptions =
        questionBox.querySelectorAll(".option");

    allOptions.forEach(option => {

        if (option.dataset.correct === "true") {

            option.classList.add("correct");

            if (!option.textContent.includes("✓")) {

                option.innerHTML =
                    "✓ " + option.textContent;

            }

        }

        option.disabled = true;

    });


    nextBtn.style.display = "block";

}


function nextQuestion() {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        quizContainer.style.display = "none";

        resultBox.style.display = "block";

        scoreText.innerHTML =
            "You scored <b>" + score +
            "</b> out of <b>" +
            questions.length + "</b>";

    }

}