

    
    //var userStats = { inital: userInitals.value, score: score };

    var userStats = JSON.parse(localStorage.getItem("QuizStats"));


    var scoreList = document.getElementById("highscores");
    var scoreItem = document.createElement("li");
    console.log(userStats.initial);

    scoreItem.textContent = userStats.initial + " score: " + userStats.score;
    scoreList.appendChild(scoreItem);
