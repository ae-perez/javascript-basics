function computerPlay() {
    let ret = [1, 2, 3]; //0 , 1, 2
    let n = 0;
    
    function pickNum(ret) {
        n = Math.floor(Math.random() * ret);
        console.log("testing1");
        return n;
    }

    pickNum(ret);

    return console.log(n); //NaN
}

computerPlay();

function playRound(pSelection, cSelection) {

}