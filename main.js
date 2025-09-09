let computerChoice = Math.random()
const userInput =  prompt("What's your choice?")
let computerMove = ""

function getComputerChoice(){
    if(computerChoice <= 0.3 ){
        computerMove = "rocks"
    }
    else if(computerChoice > 0.3 && computerChoice <= 0.6){
        computerMove = "paper"
    }
    else if(computerChoice > 0.6 && computerChoice <= 0.9)
       { computerMove = "scissors" }
    console.log(computerMove) 
    return(computerMove)
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

function playGame(){
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerMove) {
if (humanChoice === computerMove){
   console.log("A draw")
}
else if(humanChoice === "rocks" && computerMove === "paper"){
    console.log("The player wins. Rock beats Paper")
}
else if(humanChoice === "paper" && computerMove === "scissors"){
 console.log("The player wins. Paper beats scissors")
}
else if(humanChoice === "scissors" && computerMove === "rocks"){
 console.log("The player wins. scissors beats rocks")
}
else{
    console.log("computer wins")
}
}


playRound(humanSelection, computerSelection);



}
console.log(playGame())


