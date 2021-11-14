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
        
        if(typeof moves[playerOne] === 'undefined' || typeof moves[playerTwo] === 'undefined' )
            callback('Type one of this options for each player: paper, rock, scissors', null)


            const winnerPlayer = compareMoves(playerOne, playerTwo);

            if(winnerPlayer)
                callback(null,winnerPlayer)
    }


    function compareMoves(playerOne, playerTwo){
        
        if(playerOne===playerTwo)
            return "Game tied!"
        
        const moveType = moves[playerOne]
        if(moveType.getMoveResult(playerTwo))
            return "Player One wins!"
        
        return "Player Two wins!"
       
    }    
    


module.exports = getResult   
