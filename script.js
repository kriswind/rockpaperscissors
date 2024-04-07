function getComputerChoice() {

    //random number 1-3
    var randNum = Math.floor(Math.random() * 3 + 1)

    switch(randNum) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {

    //case insensitive 
    var playerSelection_lower = playerSelection.toLowerCase()

    if (playerSelection_lower == computerSelection) return 'draw'

    if (playerSelection_lower == 'rock') {
        switch(computerSelection) {
            case 'scissor':
                return 'win'
            case 'paper':
                return 'lose'
        }
    }    
    if (playerSelection_lower == 'paper') {
        switch(computerSelection) {
            case 'rock':
                return 'win'
            case 'scissors':
                return 'lose'
        }
    }

    if (playerSelection_lower == 'scissors') {
        switch(computerSelection) {
            case 'paper':
                return 'win'
            case 'rock':
                return 'lose'
        }    
    }
    return null
}

function playGame() {
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Round ' + (i + 1) + ': Rock, Paper, or Scissors?', 'rock');
        const computerSelection = getComputerChoice();
        var round = playRound(playerSelection, computerSelection);
        if (round === 'win') wins++;
        if (round === 'lose') loses++;
        console.log(round);
    }

    if (wins > loses) console.log('You Win!');
    else if (loses > wins) console.log('You Lose!');
    else console.log('Draw!');
}

//const playerSelection = prompt('Rock, Paper or Scissors?', 'rock');
//const computerSelection = getComputerChoice();
//console.log(computerSelection)
//console.log(playRound(playerSelection, computerSelection));

playGame();
