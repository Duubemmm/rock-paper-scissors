let humanScore = 0;
let computerScore = 0;

let computerChoice = Math.random()
const userInput =  prompt("What's your choice?")

function getComputerChoice(){
    if(computerChoice <= 0.3 ){
        computerChoice = "rocks"
    }
    else if(computerChoice > 0.3 && computerChoice <= 0.6){
        computerChoice = "paper"
    }
    else if(computerChoice > 0.6 && computerChoice <= 0.9)
       { computerChoice = "scissors" }
    console.log(computerChoice) 
}
getComputerChoice();

function getHumanChoice(){
   let humanChoice = userInput
   console.log(humanChoice)
    return humanChoice;
} 

getHumanChoice();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice){
    console.log("This is a draw")
}
if(humanChoice === "Rocks" && computerChoice === "Paper"){
    console.log("You win")
        humanScore += 1
}

if(humanChoice === "Paper" && computerChoice === "Scissors"){
    console.log("You win")
        humanScore += 1
}

if(humanChoice === "Scissors" && computerChoice === "Rocks"){
    console.log("You win")
        humanScore += 1
}
}


playRound(humanSelection, computerSelection);


