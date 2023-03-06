const choicetext = document.getElementById("weaponchoice");
const playerscore = document.getElementById("myscore");
const enemyscore = document.getElementById("theirscore");
const announcement = document.getElementById("announcement");
const btn = document.querySelectorAll('button');

let pscore = 0;
let escore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return (x == 3) ? x = 'Scissors' :
        x == 2 ? x = 'Paper' :
            x = 'Rock';
}

function playerWins(score) {
    pscore = parseInt(score) + 1;
    if (pscore == 5) {
        announcewinner();
        playerscore.textContent = 5;
        pscore = 0;
        escore = 0;
    } else {
        playerscore.textContent = pscore;
        enemyscore.textContent = escore;
        announcement.textContent = "Waiting for result..."
    }
}

function enemyWins(score){
    escore = parseInt(score) + 1;
    if (escore == 5) {
        announcewinner();
        enemyscore.textContent = 5;
        pscore = 0;
        escore = 0;
    } else {
        playerscore.textContent = pscore;
        enemyscore.textContent = escore;
        announcement.textContent = "Waiting for result..."
    }
}

function draw(){
    playerscore.textContent = pscore;
    enemyscore.textContent = escore;

    if (escore == 0 && pscore == 0) {
        announcement.textContent = "Waiting for result..."
    }
}

function announcewinner() {
    if (escore == 5) {
        announcement.textContent = "Computer Wins!";
    }

    if  (pscore == 5) {
        announcement.textContent = "Player Wins!"
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "Scissors") {
        if (playerSelection == "Paper") {
            enemyWins(escore);
            return x = "You chose Paper! Computer chose Scissors! Computer wins!";
        } else if (playerSelection == "Rock") {
            playerWins(pscore);
            return x = "You chose Rock! Computer chose Scissors! You win!";
        }
        else {
            draw();
            return x = "You chose Scissors! Computer chose Scissors! It's a draw!";
        }
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            enemyWins(escore);
            return x = "You chose Rock! Computer chose Paper! Computer wins!";
        } else if (playerSelection == "Scissors") {
            playerWins(pscore);
            return x = "You chose Scissors! Computer chose Paper! You win!";
        }
        else {
            draw();
            return x = "You chose Paper! Computer chose Paper! It's a draw!";
        }
    } else {
        if (playerSelection == "Scissors") {
            enemyWins(escore);
            return x = "You chose Scissors! Computer chose Rock! Computer wins!";
        } else if (playerSelection == "Paper") {
            playerWins(pscore);
            return x = "You chose Paper! Computer chose Rock! You win!";
        }
        else {
            draw();
            return x = "You chose Rock! Computer chose Rock! It's a draw!";
        }
    }
}

btn.forEach((button) => {
    button.addEventListener('click', () =>  {
        choicetext.innerText = playRound(button.id, getComputerChoice());
    });
});