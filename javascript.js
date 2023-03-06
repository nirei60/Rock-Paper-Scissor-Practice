





   
function game(){
    let player_score = 0;
    let computer_score = 0;
 
    const getPlayerSelection = () => {
        const playerChoice = prompt("Player input:", "Rock, Paper, Scissors");
        return playerChoice.toLowerCase();
        }
    const getComputerChoice = () => {
    
        switch(Math.floor(Math.random()*3)) {
            case 0:
                return 'rock';
                break;
            case 1:
                return 'paper';
                break;
            case 2:
                return 'scissors';
                break;
        };
            
        };
        
for (let i = 0; i < 6; i++){ 
    function playRound(playerSelection, computerSelection) {
        if (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper'){i-- ;alert('Enter rock, paper, or scissors!');}
        else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock')
        {player_score++; console.log(`Player wins! Player: ${player_score} Computer: ${computer_score}`);}
        else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper')
        {computer_score++; console.log(`computer wins! Player: ${player_score} Computer: ${computer_score}`);}
        else {console.log(`Draw, Player: ${player_score} Computer: ${computer_score}`);}
   

    }
    if (i===5){
        const winner = () => {
            if (player_score > computer_score){console.log("You are the winner!");}
            else if (player_score < computer_score){console.log("Computer wins!");}
            else {console.log("Draw")};
            }
            return winner();

    }
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
    
    
        
}   
    

}
