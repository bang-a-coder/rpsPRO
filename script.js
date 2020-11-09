let options = [`rock`, `paper`, `scissors`]
let computerSelection 
function computerPlay() {
    let random = Math.floor(Math.random() * options.length)
    computerSelection = options[random]
}

let playerSelection
let playerSelectionOG

function userSelect() {
    playerSelectionOG = prompt(`What are you gonna play?`)
    playerSelection = playerSelectionOG.toLowerCase()
}


function checkResults (playerSelection, computerSelection) {
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `rock`)) {
        return `You won!`
    } else if (playerSelection === computerSelection) {
        return `It's a draw`
    } else {
        return `You've lost`
    }
    
}


function game() {
    for (i = 1 ; i <=5 ; i++){
    computerPlay()
    userSelect()
    console.log(checkResults(playerSelection,computerSelection))
    }
}

game()