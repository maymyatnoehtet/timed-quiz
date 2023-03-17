var headerEl = document.querySelector("header");
var startButtonEl = document.querySelector(".start-button");

/* quiz related elements */
var quizEl = document.getElementById("quiz");
var quizQEl = document.getElementById("quizQ");
var answerEl = document.getElementById("answers");

var firstChoice = document.createElement("button");
var secondChoice = document.createElement("button");
var thirdChoice = document.createElement("button");
var fourthChoice = document.createElement("button");

var timer;
var timerCount;

/* quiz questions */
const quizQs = [
    {
        question: "Commonly used data types do not include: ",
        choices: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"    
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"    
    },
    {
        question: "Inside which HTML element do we put the JavaScript?.",
        choices: {
            1: "scripting",
            2: "script",
            3: "a",
            4: "js"
        },
        correctAnswer: "2"    
    },
    {
        question: "Where is the correct place to insert a JavaScript file in HTML file?",
        choices: {
            1: "<body>",
            2: "<head>",
            3: "<header>",
            4: "all of the above"
        },
        correctAnswer: "1"    
    }
]

/* start quiz */
function startQuiz(){
    console.log("start button is clicked");
    console.log(headerEl.childNodes);
    clearStartPage();
    renderQuiz();
}

/* clear start page */
function clearStartPage(){
    var headerChildrenLen = headerEl.childNodes.length;
    console.log(headerChildrenLen);
    for (let index = 0; index < headerChildrenLen; index++) {
        headerEl.remove(headerEl.children[index]);
    }
}

/* render the multiple choice quiz question on the page */
function renderQuiz() {
    var random = quizQs[Math.floor(Math.random() * quizQs.length)];
    var quizQ = random.question;
    console.log(quizQ);
    quizQEl.innerHTML = quizQ;

    firstChoice.textContent = random.choices[1];
    secondChoice.textContent = random.choices[2];
    thirdChoice.textContent = random.choices[3];
    fourthChoice.textContent = random.choices[4];

    answerEl.appendChild(firstChoice);
    answerEl.appendChild(secondChoice);
    answerEl.appendChild(thirdChoice);
    answerEl.appendChild(fourthChoice);

    firstChoice.setAttribute("style", "display: block;");
    secondChoice.setAttribute("style", "display: block;");
    thirdChoice.setAttribute("style", "display: block;");
    fourthChoice.setAttribute("style", "display: block;");
}
startButtonEl.addEventListener("click", startQuiz);