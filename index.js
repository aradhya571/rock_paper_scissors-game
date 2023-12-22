let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_but = document.getElementById("rock");
const paper_but = document.getElementById("paper");
const scissors_but = document.getElementById("scissors");

const result_img_user = document.getElementById("user-res");
const result_img_computer = document.getElementById("comp-res");


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function wins(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You win!";
}

function loses(){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You lose!";
}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "It's a draw!";
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    result_img_computer.src = "images/comp " + computerChoice + ".jpg";
    switch(userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            wins();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            loses();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
}


function main(){
    rock_but.addEventListener('click', function(){
        result_img_user.src = "images/user rock.jpg";
        game("rock");

    })
    paper_but.addEventListener('click', function(){
        result_img_user.src = "images/user paper.jpg";
        game("paper");
    })
    scissors_but.addEventListener('click', function(){
        result_img_user.src = "images/user sci.jpg";
        game("scissors");
    })
}

main();


