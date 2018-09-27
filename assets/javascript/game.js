$(document).ready(function() {
    
    var totalScore = 0
    var wins = 0;
    var losses = 0;

    //Create variables. Assign random number in the appropriate range for both target number and crystal values
    var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    var redCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
    var blueCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
    var greenCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
    var purpleCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;

    //Create function to restart game upon win or loss
    function gameRestart(){
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        redCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
        blueCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
        greenCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
        purpleCrystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
        totalScore = 0;
        $("#score-number").text(totalScore);
        $("#random-number").text(randomNumber);
    }

    //Create function to determin win and loss
    function ifAndElse(){
        if (totalScore === randomNumber){
            wins++;
            $("#wins-total").text(wins);
            gameRestart();
            alert("You Win");
        } else if (totalScore > randomNumber){
            losses++;
            $("#losses-total").text(losses);
            gameRestart();
            alert("You Lose");
        }}
    
    //Print random number to page
    $("#random-number").text(randomNumber);
    
    //Create on click events to play game
    $("#red-crystal").on("click", function(){
        totalScore=redCrystalValue+totalScore;
        console.log(totalScore);
        $("#score-number").text(totalScore);
        ifAndElse();
    })

    $("#blue-crystal").on("click", function(){
        totalScore=blueCrystalValue+totalScore;
        console.log(totalScore);
        $("#score-number").text(totalScore);
        ifAndElse();
    })

    $("#green-crystal").on("click", function(){
        totalScore=greenCrystalValue+totalScore;
        console.log(totalScore);
        $("#score-number").text(totalScore);
        ifAndElse();
    })

    $("#purple-crystal").on("click", function(){
        totalScore=purpleCrystalValue+totalScore;
        console.log(totalScore);
        $("#score-number").text(totalScore);
        ifAndElse();
    })
    
})
