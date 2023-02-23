const choicetext = document.getElementById("weaponchoice");
const playerscore = document.getElementById("myscore");
const enemyscore = document.getElementById("theirscore");

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
        playerscore.innerText = 5;
        pscore = 0;
        escore = 0;
    } else {
        playerscore.innerText = pscore;
        enemyscore.innerText = escore;
    }
}

function enemyWins(score){
    escore = parseInt(score) + 1;
    if (escore == 5) {
        announcewinner();
        enemyscore.innerText = 5;
        pscore = 0;
        escore = 0;
    } else {
        playerscore.innerText = pscore;
        enemyscore.innerText = escore;
    }
}

function draw(){
    playerscore.innerText = pscore;
    enemyscore.innerText = escore;
}

function announcewinner() {

}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "Scissors") {
        if (playerSelection == "Paper") {
            enemyWins(escore);
            return x = "You chose Paper! Paper loses to Scissors! Computer wins!";
        } else if (playerSelection == "Rock") {
            playerWins(pscore);
            return x = "You chose Rock! Rock wins against Scissors! You win!";
        }
        else {
            draw();
            return x = "You chose Scissors! Computer chose Scissors! It's a draw!";
        }
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            enemyWins(escore);
            return x = "You chose Rock! Rock loses to Paper! Computer wins!";
        } else if (playerSelection == "Scissors") {
            playerWins(pscore);
            return x = "You chose Scissors! Scissors wins against Scissors! You win!";
        }
        else {
            draw();
            return x = "You chose Paper! Computer chose Paper! It's a draw!";
        }
    } else {
        if (playerSelection == "Scissors") {
            enemyWins(escore);
            return x = "You chose Scissors! Scissors loses to Rock! Computer wins!";
        } else if (playerSelection == "Paper") {
            playerWins(pscore);
            return x = "You chose Paper! Paper wins against Rock! You win!";
        }
        else {
            draw();
            return x = "You chose Rock! Computer chose Rock! It's a draw!";
        }
    }
}

function game(buttonpressed) {
    choicetext.innerHTML = playRound(buttonpressed, getComputerChoice()); 
}