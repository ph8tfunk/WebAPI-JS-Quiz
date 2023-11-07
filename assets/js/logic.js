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


var quizTimer = document.getElementById("time");

var startTime = 15; // test value, default 75;

console.log(question);

function renderQuiz(){

    question.textContent = ("Question 1");
    var button = document.createElement("button");
    var choice = document.getElementById("choices");
    quizTimer.textContent = startTime;
    button.setAttribute("class", "choices");
    button.textContent = "answer a";
    choice.appendChild(button);

}
var startScreen = document.getElementById("start-screen");



startScreen.addEventListener("click", function(event){

    startScreen.setAttribute("class", "hide");
    
    questions.setAttribute("class", "start");
    // questions.setAttribute("style", "display:unset");
    //start timer
    startCountdown();
    renderQuiz();


});

function startCountdown(){

    var timer = setInterval(function(){

        startTime--;
        quizTimer.textContent = startTime;
    
        if (startTime==0){
            clearInterval(timer);
            //end quiz
        }
    
    }, 1000 );
}

//event to target the button choice

choices.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);

});





