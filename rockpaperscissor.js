function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let ret = (rps[Math.floor(Math.random() * rps.length)]);

    return ret;
}



function playerPlay(pSelection) {
    var rock = document.getElementById("rock");
    var scissors = document.getElementById("scissors");
    var paper = document.getElementById("paper");


    rock.onclick = function() {
        pSelection = 'rock';
        console.log(pSelection);
    }

    paper.onclick = function() {
        console.log("paper paper");
    }

    scissors.onclick = function() {
        console.log("scissors scissors");
    }

}

function intro () {
    //this is where you will adjust the display box div
    //intro message
}

function playRound(pSelection, cSelection) {
    pSelection = pSelection.toLowerCase();
    let ret = '0';

    if (pSelection == 'rock' && cSelection == 'paper') {
        ret = 'You Lose! Paper beats Rock.'
    }
    else if (pSelection == 'rock' && cSelection == 'scissors') {
        ret = 'You Win! Rock beats Scissors.'
    }
    else if (pSelection == 'paper' && cSelection == 'rock') {
        ret = 'You Win! Paper beats Rock.'
    }
    else if (pSelection == 'paper' && cSelection == 'scissors') {
        ret = 'You Lose! Scissors beats Paper.'
    }
    else if (pSelection == 'scissors' && cSelection == 'rock') {
        ret = 'You Lose! Rock beats Scissors.'
    }
    else if (pSelection == 'scissors' && cSelection == 'paper') {
        ret = 'You Lose! Scissors beats Paper.'
    }
    else  { //code when things are tied
        ret = 'Draw!'
    }

    return ret;
}



//this is YOUR MAIN FUNCTION
function game() {
    //game only starts when player selects their choice

    // initialize values
        //call computerPlay() to initialize cSelection
        //call create onclick and set its value to pSelection once clicked
    const pSelection = 0;

    document.getElementById("rock").addEventListener("click", function() {
        console.log("ROCKYYYYY!");

    });

    const cSelection = computerPlay(); 

    

    
    


    


    
    



    

    
}


