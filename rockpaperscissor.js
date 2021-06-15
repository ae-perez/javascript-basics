function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let ret = (rps[Math.floor(Math.random() * rps.length)]);

    console.log(ret); //delete this @ the very end

    return ret;
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

function game() {

}

const pSelection = "rock";
const cSelection = computerPlay();
console.log(playRound(pSelection, cSelection));