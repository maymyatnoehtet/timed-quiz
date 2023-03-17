var headerEl = document.querySelector("header");
var mainEl = document.querySelector("main");
var startButtonEl = document.querySelector(".start-button");

/* quiz related elements */
var quizEl = document.getElementById("quiz");
var quizQEl = document.getElementById("quizQ");
var answerEl = document.getElementById("answers");

/* quiz answers elements */
var firstChoice = document.createElement("button");
var secondChoice = document.createElement("button");
var thirdChoice = document.createElement("button");
var fourthChoice = document.createElement("button");

/* timers */
var timerElement = document.createElement("div");
var timer;
var timerCount = 50;
timerElement.setAttribute('style','position: absolute; top: 4%; left: 90%; font-size: 1.2em;');
mainEl.appendChild(timerElement);

/* answer correct or not */
var correctAnswerEl = document.createElement("div");
mainEl.appendChild(correctAnswerEl);

/* quiz questions */
const quizQs = [
    {
        question: "Commonly used data types do not include: ",
        choices: {
            1: "1. strings",
            2: "2. booleans",
            3: "3. alerts",
            4: "4. numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: {
            1: "1. JavaScript",
            2: "2. terminal/bash",
            3: "3. for loops",
            4: "4. console.log"
        },
        correctAnswer: "4"    
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices: {
            1: "1. numbers and strings",
            2: "2. other arrays",
            3: "3. booleans",
            4: "4. all of the above"
        },
        correctAnswer: "4"    
    },
    {
        question: "Inside which HTML element do we put the JavaScript?.",
        choices: {
            1: "1. scripting",
            2: "2. script",
            3: "3. a",
            4: "4. js"
        },
        correctAnswer: "2"    
    },
    {
        question: "Where is the correct place to insert a JavaScript file in HTML file?",
        choices: {
            1: "1. <body>",
            2: "2. <head>",
            3: "3. <header>",
            4: "4. all of the above"
        },
        correctAnswer: "1"    
    }
]

/* start quiz */
function startQuiz(){
    console.log("start button is clicked");
    console.log(headerEl.childNodes);
    clearStartPage();
    startTimer();
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

    firstChoice.setAttribute("style", "left: 15%; top: 25%");
    secondChoice.setAttribute("style", "left: 15%; top: 32%");
    thirdChoice.setAttribute("style", "left: 15%; top: 39%");
    fourthChoice.setAttribute("style", "left: 15%; top: 46%");

    firstChoice.addEventListener("click", check(random, "1"));
    secondChoice.addEventListener("click", check(random, "2"));
    thirdChoice.addEventListener("click", check(random, "3"));
    fourthChoice.addEventListener("click", check(random, "4"));
}

/* start timer */
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;       
        if (timerCount === 0) {
            clearInterval(timer);
            // finishGame();
        }
    }, 1000);
}

/*  check if the choice is correct or not */
function check(quizObj, chosen) {
    var correctAnswer = quizObj.correctAnswer;
    if (chosen == correctAnswer) {
        console.log("correct");
        correctAnswerEl.textContent = "Correct";
    }
    else if(chosen != correctAnswer) {
        console.log("wrong");
        correctAnswerEl.textContent = "Wrong";
    }
}

startButtonEl.addEventListener("click", startQuiz);