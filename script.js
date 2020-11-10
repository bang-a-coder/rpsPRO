let options = [`rock`, `paper`, `scissors`]
let computerSelection 
function computerPlay() {
    let random = Math.floor(Math.random() * options.length)
    computerSelection = options[random]
}

let playerSelection
let playerSelectionOG

let button = Array.from(document.querySelectorAll('.option'));


function adoption (i) {
    let b = button[i]
    b.addEventListener('click', () => {
        playerSelection = b.getAttribute('id')
      })
}

for (let i = 0; i <button.length; i++) {
    adoption(i)
}

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
    computerPlay()
    //userSelect()
    console.log(checkResults(playerSelection,computerSelection))
}

