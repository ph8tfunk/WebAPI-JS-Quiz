

    
    //var userStats = { inital: userInitals.value, score: score };

    var clearBtn = document.getElementById("clear");
    var userStats = JSON.parse(localStorage.getItem("QuizStats"));


    var scoreList = document.getElementById("highscores");
    var scoreItem = document.createElement("li");
    console.log(userStats.initial);

    scoreItem.textContent = userStats.initial + " score: " + userStats.score;
    scoreList.appendChild(scoreItem);

    clearBtn.addEventListener("click", function(event){

        //clear local stored data
        while (scoreList.firstChild) {
            scoreList.removeChild(scoreList.firstChild);
        }
        localStorage.clear();

    });