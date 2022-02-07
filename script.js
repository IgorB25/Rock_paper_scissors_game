




function computerplay(min, max){
  let rng= (Math.floor(Math.random() * (max - min) + min));
    console.log(rng);
  let choice = "rock"
               "paper"
               "scissors";  
    if(rng == 1){
        choice = "rock";
    }
        else if(rng == 2){
            choice = "paper";
        }
            else{
                choice="scissors"
            }
            console.log(choice);
};



computerplay(1,4);

