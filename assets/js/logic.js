var quiz = [{

    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<p>","<script>","<src>","<h1>"],
    answer: "<script>"
},
{
    question: "What data types has true/false values",
    choices: ["Boolean","Strings","Numbers","NaN"],
    answer: "Boolean"
},
{
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices:  ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
}
]

const correctAudio = new Audio(scr="./assets/sfx/correct.wav");
const wrongAudio = new Audio("./assets/sfx/incorrect.wav")

var questions = document.getElementById("questions");

var questionTitle = document.getElementById("question-title");
var choice = document.getElementById("choices");

var endScreen = document.getElementById("end-screen")

var quizTimer = document.getElementById("time");
var finalScore = document.getElementById("final-score");
var userInitials = document.getElementById("initials");
var submit = document.getAnimations("submit");

var startTime = 15; // test value, default 75;
var questionNumber = 0;
var score = 0;

//console.log(question);

function renderQuiz(qNumber){

    if (qNumber < quiz.length){
        while (choice.firstChild) {
            choice.removeChild(choice.firstChild);
        }

        questionTitle.textContent = quiz[qNumber].question;
        //load questions
        console.log(qNumber);
        quiz[qNumber].choices.forEach(element => {
            quizTimer.textContent = startTime;
            var button = document.createElement("button");
            button.setAttribute("class", "choices");
            button.textContent = element;
            choice.appendChild(button);
        });
    } else {
        console.log("***END**" + quiz.length);
        score = startTime;
        startTime = 1;
        
    questions.setAttribute("class", "hide");
        //end quiz
    }
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
        //quizTimer.textContent = startTime;
        setTimer();

        if (startTime==0){
            clearInterval(timer);
            endQuiz();
        }
    
    }, 1000 );
}

//event to target the button choice

choice.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);
    if (validateAnswer(element)){
        renderQuiz(questionNumber+=1);
    };

});

function validateAnswer(userChoice){

    if (userChoice.textContent == quiz[questionNumber].answer) {

        console.log("Correct answer");
        addPoints();
        correctAudio.play();
        return true;
        //load next question

    } else {
        console.log("guess again");
        wrongAudio.play();
        deductPoints();
        //
    }

}

function addPoints(){

    startTime+=10;
    setTimer();

}

function deductPoints(){

    if (startTime >10){
        startTime-=10;
        setTimer();
    } else {
        startTime=1;
        quizTimer.textContent = 1;
    }
}

function setTimer(){
    quizTimer.textContent = startTime;
}

function endQuiz(){

    questions.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
    finalScore.textContent = score;
    // update score for final value

}

endScreen.addEventListener("click", function(event){

    event.preventDefault();

    userStats = { initial: userInitials.value, score: score };
    localStorage.setItem("QuizStats", JSON.stringify(userStats));

});