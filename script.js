
let choicepc;
let choiceplayer;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;


//Computer rng selection 1-3 options//

function computerselection(min, max){
  let rng= (Math.floor(Math.random() * (max - min) + min));
   choicepc = "rock"
               "paper"
               "scissors";  
    if(rng == 1){
        choicepc = "rock";
    }
        else if(rng == 2){
            choicepc = "paper";
        }
            else{
                choicepc="scissors"
            }
            computerChose.textContent= "computer selected: " + choicepc;
            return(choicepc);
};

//Player selection 

function playerselection(){
    
    choiceplayer = prompt ("rock,paper or scissors?").toLowerCase();
    
    if(choiceplayer === "rock"){
            return choiceplayer;
        }
            else if(choiceplayer === "paper"){
                return choiceplayer;
        }
            else if(choiceplayer === "scissors"){
                return choiceplayer;
            }
                else{
                    console.log("invalit input,try again")
                }


  };




function round(playerselection,computerselection){
    
    
    if (choicepc == "rock" && choiceplayer == "paper"){
        notification.textContent = "Paper beats rock,You WIN!!";
        playerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return playerScore;
        
    }
    else if(choicepc === "rock" && choiceplayer === "scissors"){
        notification.textContent = "rock beats scissors,You LOSE!!"; 
        computerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return computerScore;
    }
        
    else if(choicepc === "rock" && choiceplayer === "rock"){
        notification.textContent = "It's a DRAW";
        return drawCount++;
    }
    else if(choicepc === "paper" && choiceplayer === "rock"){
        notification.textContent = "paper beats rock,You LOSE!!";
        computerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return computerScore;
    }
    else if(choicepc === "paper" && choiceplayer === "scissors"){
        notification.textContent = "scissors beat paper,You WIN!!";
        playerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return playerScore;
    }
    else if(choicepc === "paper" && choiceplayer === "paper"){
        notification.textContent = "It's a DRAW!!";
       return drawCount++;
    }

    else if(choicepc === "scissors" && choiceplayer === "rock"){
        notification.textContent = "Rock beats scissors,You WIN!!";
        playerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return playerScore;
    }
    else if(choicepc === "scissors" && choiceplayer === "paper"){
        notification.textContent = "Scissors beat paper,You LOSE!!";
        computerScore++;
        counter.textContent = playerScore + " : " + computerScore;
        return computerScore;
    }
    else if(choicepc === "scissors" && choiceplayer === "scissors"){
        notification.textContent = "It's a DRAW!!";
        return drawCount++;
    }
}



function game (){

        const btnR = document.querySelector('#btnR');
        btnR.addEventListener('click', () =>{
        round(choiceplayer = "rock",computerselection(1,4));
            if(playerScore == 5){
                h3.textContent = "Congratulations,YOU WON THE GAME!!";
                computerScore = 0;
                playerScore = 0;
                counter.textContent = playerScore + " : " + computerScore;

            }   
                else if(computerScore == 5){
                    h3.textContent = "Bad luck,YOU LOST THE GAME!!";
                    computerScore = 0;
                    playerScore = 0;
                    counter.textContent = playerScore + " : " + computerScore;
                }
        });

        const btnP = document.querySelector('#btnP');
        btnP.addEventListener('click', () =>{
        round(choiceplayer = "paper",computerselection(1,4));
            if(playerScore == 5){
                h3.textContent = "Congratulations,YOU WON THE GAME!!";
                computerScore = 0;
                playerScore = 0;
                counter.textContent = playerScore + " : " + computerScore;
            }
                else if(computerScore == 5){
                    h3.textContent = "bad luck,YOU LOST THE GAME!!";
                    computerScore = 0;
                    playerScore = 0;
                    counter.textContent = playerScore + " : " + computerScore;
                }
        });

        const btnS = document.querySelector('#btnS');
        btnS.addEventListener('click', () =>{
        round(choiceplayer = "scissors",computerselection(1,4));
            if(playerScore == 5){
                h3.textContent = "Congratulations,YOU WON THE GAME!!";
                computerScore = 0;
                playerScore = 0;
                counter.textContent = playerScore + " : " + computerScore;

            }
                else if(computerScore == 5){
                h3.textContent = "Bad luck,YOU LOST THE GAME!!";
                computerScore = 0;
                playerScore = 0;
                counter.textContent = playerScore + " : " + computerScore;
                }
        });      
}


const h3 = document.querySelector('h3')
const computerChose = document.querySelector('#computerChose');
const options = document.querySelector('#options')
const notification = document.querySelector('#notification');
const counter = document.querySelector('#counter')
const scoreboard = document.querySelector('#scoreboard')
//const score = document.createElement("p");  
//scoreboard.appendChild(score);





    






//computerselection(1,4);
//playerselection(1, 4);
// round(choicepc,choiceplayer);//
game();


