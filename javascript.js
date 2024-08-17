const choices=[
    "rock",
    "paper",
    "scissors"
]

function getComputerChoice(){
    return choices[(Math.floor(Math.random()*(choices.length)))];
}


function getHumanChoice(){
    let choice= prompt("Enter rock, paper or scissors: ");
    
    if(choice.toLowerCase()==='rock'|| choice.toLowerCase()==='paper' || choice.toLowerCase()==='scissors'){
        return choice;
    }else while(choice.toLowerCase() !=='rock' && choice.toLowerCase() !=='paper' && choice.toLowerCase() !== 'scissors'){
        choice = prompt('Invalid input, please enter rock, paper or scissors: ');
    }return choice;
}

    let computerScore=0;
    let humanScore=0;

    function playRound(humanChoice, computerChoice){
        console.log("Computer chose: " + computerChoice);
        if(humanChoice=='rock'&&computerChoice=='paper'){
            console.log("You lose! Paper beats rock");
            computerScore++;
        }else if(humanChoice=='scissors'&& computerChoice=='paper'){
            console.log("You win! Scissors beat paper")
            humanScore++;
        }else if(humanChoice=='paper'&& computerChoice=='paper'){
            console.log("Draw!");
        }else if(humanChoice=='rock'&& computerChoice=='scissors'){
            console.log("You win! Rock beats scissors");
            humanScore++;
        }else if(humanChoice=='paper'&& computerChoice=='scissors'){
            console.log("You lose! Scissors beat paper");
            computerScore++;
        }else if(humanChoice=='scissors'&& computerChoice=='scissors'){
            console.log("Draw!");
        }else if(humanChoice=='rock'&& computerChoice=='rock'){
            console.log("Draw!");
        }else if(humanChoice=='paper'&& computerChoice=='rock'){
            console.log("You win! Paper beats rock");
            humanScore++;
        }else if(humanChoice=='scissors'&& computerChoice=='rock'){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }  
    }

function playGame(){

    
        for(let i=0; i<5;i++){
            console.log(playRound(getHumanChoice(), getComputerChoice()));
        }
        if(humanScore>computerScore){
            console.log("Game over, you win!!!");
        }else if(humanScore<computerScore){
            console.log("Game over, you lose :(");
        }else console.log("Game over, its a tie");
}


console.log(playGame());

console.log(humanScore);
console.log(computerScore);

