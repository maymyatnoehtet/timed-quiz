var containerElement = document.querySelector(".container");

/* Landing page */
/*
 * Start Quiz page
 */
var landingHeaderElement = document.createElement("h1");
landingHeaderElement.textContent = "Coding Quiz Challenge";
landingHeaderElement.setAttribute("style", "display: flex; justify-content: center; margin-left: 5em; font-size: 2em; line-weight: bolder;");
containerElement.appendChild(landingHeaderElement);

var quizRuleElement = document.createElement("p");
quizRuleElement.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
quizRuleElement.setAttribute("style", "display: flex; justify-content: center; text-align: center; font-size: 1.2em;");
containerElement.appendChild(quizRuleElement);


var buttonElement = document.createElement("button");
buttonElement.textContent = "Start Quiz";
buttonElement.setAttribute("style", "position: absolute; left: 50%; padding: 10px 20px; border-radius: 5px; background-color: #4b0082; color: white; font-size: 1.2em;");
containerElement.appendChild(buttonElement);

// function startQuiz() {
//     removeElements(containerElement);
//     var h1Element = document.createElement("h1");
//     h1Element.textContent = "Halo! Let's start the quiz."
//     containerElement.appendChild(h1Element);
// }

// function removeElements(element){
//     console.log(element);
//     childNodeLength(element);
//     // while(element.children[i] !== NaN) {
//     //     element.removeChild(element.children[i]);
//     //     i++;
//     // }
// }

// function childNodeLength(element) {
//     var numChild = 0;
//     while(element.children[numChild] !== NaN) {
//         numChild += 1;
//     } 
//     console.log(numChild);
//     return numChild;
// }

// addEventListener("click", startQuiz);
