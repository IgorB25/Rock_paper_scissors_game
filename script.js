
let choicepc;
let choiceplayer;



function computerselection(min, max){
  let rng= (Math.floor(Math.random() * (max - min) + min));
    console.log(rng);
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
      console.log(rng);
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
    }
    else if(choicepc === "rock" && choiceplayer === "scissors")
        console.log("rock beats scissors,You LOSE!!"); 
    else if(choicepc === "rock" && choiceplayer === "rock")
        console.log("It's a DRAW");
    else if(choicepc === "paper" && choiceplayer === "rock")
        console.log("paper beats rock,You LOSE!!");
    else if(choicepc === "paper" && choiceplayer === "scissors")
        console.log("scissors beat paper,You WIN!!");
    else if(choicepc === "paper" && choiceplayer === "paper")
        console.log("It's a DRAW!!");
    else if(choicepc === "scissors" && choiceplayer === "rock")
        console.log("Rock beats scissors,You WIN!!");
    else if(choicepc === "scissors" && choiceplayer === "paper")
        console.log("Scissors beat rock,You LOSE!!");
    else if(choicepc === "scissors" && choiceplayer === "scissors")
        console.log("It's a DRAW!!");
}



computerselection(1,4);
playerselection(1, 4);
round(choicepc,choiceplayer);
