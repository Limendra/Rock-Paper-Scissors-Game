let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".sign");
const msg = document.querySelector("#msg");
const score = document.querySelector("#userscore");
const comScore = document.querySelector("#computerscore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const showwinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You win");
        msg.innerText = `You win Your's ${userChoice} beats ${compChoice}`;
        userScore++;
        score.innerText = userScore;
    }else{
        console.log("You Lose");
        msg.innerText = `You lose Computer's ${compChoice} beats ${userChoice}`;
        computerScore++;
        comScore.innerText = computerScore;
        // msg.style.backgroundColor = "red";
    }
}

const drawgame = (userChoice, compChoice) => {
    if(userChoice ===  compChoice)
    {
        console.log("Draw");
        msg.innerText = "Draw";
    }
}
const playgame = (userChoice) => {
    console.log("the user choice is = ",userChoice);
    // computer choice
    const compChoice = genCompChoice();
    console.log("the computer choice is =", compChoice);

    if(userChoice === compChoice)
    {
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper")
        {
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }else{
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showwinner(userWin,userChoice,compChoice);
       }

}

choices.forEach((sign) => {
    sign.addEventListener("click", () => {
        const userChoice = sign.getAttribute("Id");
        playgame(userChoice);
    })
});