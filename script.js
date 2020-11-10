let options = [`rock`, `paper`, `scissors`]
let computerSelection 
function computerPlay() {
    let random = Math.floor(Math.random() * options.length)
    computerSelection = options[random]
}

let playerSelection
let playerSelectionOG

let button = Array.from(document.querySelectorAll('.option'));
let buttonid = document.querySelector(`.option[id="${e.getAttribute('id')}"]`);
button.forEach()


keys.forEach(key => key.addEventListener('transitionend', removeTransition));


button[0].addEventListener('click', () => {
    alert("Hello World");
  });
//button.getAttribute('id');

  button.addEventListener('click', function (e) {
    console.log(e.getAttribute('id'));
  });

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
    userSelect()
    console.log(checkResults(playerSelection,computerSelection))
    
}

game()