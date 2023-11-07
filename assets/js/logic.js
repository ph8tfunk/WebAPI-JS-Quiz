var quiz = [{

    Question: 1,
    choices: ["a","b","c","d"],
    answer: "b"
},
{
Question: 2,
    choices: ["a","b","c","d"],
    answer: "a"
}]


var question = document.getElementById("question-title");
var questions = document.getElementById("questions");
var questions = document.getElementById("questions");

console.log(question);

function renderQuiz(){

    question.textContent = ("Question 1");
    var button = document.createElement("button");
    var choice = document.getElementById("choices");
    button.setAttribute("class", "choices");
    button.textContent = "answer a";
    choice.appendChild(button);

}
var startScreen = document.getElementById("start-screen");

renderQuiz();

startScreen.addEventListener("click", function(){

    startScreen.setAttribute("class", "hide");
    
    questions.setAttribute("class", "start");
    // questions.setAttribute("style", "display:unset");

});