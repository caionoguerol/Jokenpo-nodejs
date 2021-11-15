const moves = {
    paper: {
        getMoveResult: function(playerTwo){return playerTwo === 'rock'}
    },
    rock: {
        getMoveResult: function(playerTwo){return playerTwo === 'scissors'}
    },
    scissors: {
        getMoveResult: function(playerTwo){return playerTwo === 'paper'}
    }
}
const getResult =  function getResult(param, callback){
        const {playerOne, playerTwo} = param;

        try {
            const winnerPlayer = compareMoves(playerOne, playerTwo);

            if(winnerPlayer)
                callback(null,winnerPlayer)
        } catch (error) {
            callback('Type one of these options for each player: paper, rock, scissors', null)
        }
           
    }


    function compareMoves(playerOne, playerTwo){
        
        if(!playerOne || !playerTwo){
            throw new Error
        }
        if(playerOne===playerTwo)
            return "Game tied!"
        
        const moveType = moves[playerOne]
        if(moveType.getMoveResult(playerTwo))
            return "Player One wins!"
        
        return "Player Two wins!"
       
    }    
    


module.exports = getResult   

