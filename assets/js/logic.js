
var question = document.getElementById("question-title");
console.log(question);
function renderQuiz(){

    question.textContent = ("Question 1");


}
var startScreen = document.getElementById("start-screen");

renderQuiz();

startScreen.addEventListener("click", function(){

    startScreen.setAttribute("class", "hide");

});