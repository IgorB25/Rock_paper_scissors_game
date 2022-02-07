
let choicepc;
let choiceplayer;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;



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
            console.log("computer selected: " + choicepc);
            return(choicepc);
};

function playerselection(min, max){
    let rng= (Math.floor(Math.random() * (max - min) + min));
      
     choiceplayer = "rock"
                 "paper"
                 "scissors";  
      if(rng == 1){
          choiceplayer = "rock";
      }
          else if(rng == 2){
              choiceplayer = "paper";
          }
              else{
                  choiceplayer="scissors"
              }
              console.log("You selected: " + choiceplayer);
              return(choiceplayer);
  };




function round(playerselection,computerselection){
    
    if (choicepc == "rock" && choiceplayer == "paper"){
        console.log("Paper beats rock,You WIN!!");
        return playerScore++;
    }
    else if(choicepc === "rock" && choiceplayer === "scissors"){
        console.log("rock beats scissors,You LOSE!!"); 
        return computerScore++;
    }
        
    else if(choicepc === "rock" && choiceplayer === "rock"){
        console.log("It's a DRAW");
        return drawCount++;
    }
    else if(choicepc === "paper" && choiceplayer === "rock"){
        console.log("paper beats rock,You LOSE!!");
        return computerScore++;
    }
    else if(choicepc === "paper" && choiceplayer === "scissors"){
        console.log("scissors beat paper,You WIN!!");
        return playerScore++;
    }
    else if(choicepc === "paper" && choiceplayer === "paper"){
        console.log("It's a DRAW!!");
       return drawCount++;
    }

    else if(choicepc === "scissors" && choiceplayer === "rock"){
        console.log("Rock beats scissors,You WIN!!");
        return playerScore++;
    }
    else if(choicepc === "scissors" && choiceplayer === "paper"){
        console.log("Scissors beat rock,You LOSE!!");
        return computerScore++;
    }
    else if(choicepc === "scissors" && choiceplayer === "scissors"){
        console.log("It's a DRAW!!");
        return drawCount++;
    }
}


function game (){
    for(let i = 0; i <= 5; i++){
        computerselection(1, 4);
        playerselection(1,4 );
        round(choicepc,choiceplayer);
    }
    if(playerScore > computerScore){
        console.log("Congratulations,YOU WIN!!");
    }
    else if(computerScore > playerScore){
        console.log("Bad luck,you lose!!");
    }
}


//computerselection(1,4);
//playerselection(1, 4);
// round(choicepc,choiceplayer);//
game();


