var headerEl = document.querySelector("header");
var startButtonEl = document.querySelector(".start-button");
var textEl = document.querySelector(".text-hello");

var timer;
var timerCount;

function startQuiz(){
    console.log("start button is clicked");
    console.log(headerEl.childNodes);
    clearStartPage();
    textEl.textContent = "Hola!Quiz Start.";
}

function clearStartPage(){
    var headerChildrenLen = headerEl.childNodes.length;
    console.log(headerChildrenLen);
    for (let index = 0; index < headerChildrenLen; index++) {
        headerEl.remove(headerEl.children[index]);
    }
}

startButtonEl.addEventListener("click", startQuiz);