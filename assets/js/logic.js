var quiz = [{

    question: 1,
    choices: ["a","b","c","d"],
    answer: "b"
},
{
    question: 2,
    choices: ["a","b","c","d"],
    answer: "a"
}]


var questionTitle = document.getElementById("question-title");
var questions = document.getElementById("questions");
var choice = document.getElementById("choices");

var quizTimer = document.getElementById("time");

var startTime = 15; // test value, default 75;
var questionNumber = 0;

//console.log(question);

function renderQuiz(qNumber){

    
    questionTitle.textContent = quiz[qNumber].question;
    //load questions
    quiz[qNumber].choices.forEach(element => {
        quizTimer.textContent = startTime;
        var button = document.createElement("button");
        button.setAttribute("class", "choices");
        button.textContent = element;
        choice.appendChild(button);
    });
    


}
var startScreen = document.getElementById("start-screen");



startScreen.addEventListener("click", function(event){

    startScreen.setAttribute("class", "hide");
    
    questions.setAttribute("class", "start");
    // questions.setAttribute("style", "display:unset");
    //start timer
    startCountdown();
    renderQuiz(questionNumber);


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
    //is correct
    //load next question only if correct ese sunbtract timer

});


//end quiz
//save initials and score


