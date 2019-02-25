var choice = ["Scissor", "Rock", "Paper"]

function playerB (){
    return(choice[Math.floor(Math.random()*choice.length)])
}

function play () {
    var winnerB = 0;
    var winnerA = 0;
    var tie = 0;
    for(var i =0; i<100; i++){
        var playerBchoice = playerB();
        if (playerBchoice == choice[0]){
            winnerB ++;
        } else if (playerBchoice == choice[1]){
            winnerA ++;
        } else {
            tie ++;
        }
    } 

    console.log("Player A won " + winnerA + " of 100 games");
    console.log("Player B won " + winnerB + " of 100 games");
    console.log("Tie: " + tie + " of 100 games")
    if (winnerA > winnerB){
        console.log("Winner is: Player A (" + winnerA + " to " + winnerB + " wins)");
    } else if(winnerA < winnerB){
        console.log("Winner is: Player B (" + winnerB + " to " + winnerA + " wins)");
    } else {
        console.log("No winner today, play again!");
    }
}



