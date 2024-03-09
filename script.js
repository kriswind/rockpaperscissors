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

function playGame(playerSelection) {
    let wins = 0
    let loses = 0
    for (let i = 0; i < 5; i++){
        var round = playRound(playerSelection, getComputerChoice())
        if (round == 'win') wins++
        if (round == 'lose') loses++
        console.log(round)

    }

    if (wins > loses) return console.log('You Win!')
    if (loses > wins) return console.log('You Lose!')
    return console.log('Draw!')
}

const playerSelection = prompt('Rock, Paper or Scissors?', 'rock');
const computerSelection = getComputerChoice();
//console.log(computerSelection)
//console.log(playRound(playerSelection, computerSelection));
playGame(playerSelection)