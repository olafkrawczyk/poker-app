// ACTION TYPES
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const DEAL_CARDS = 'DEAL_CARDS';


// ACTION CREATORS

 /**
  * Defines the action of creating new poker game
  * 
  * @param {string} gameId id of created game
  */
export function createNewGameAction(gameId) { 
    return { 
        type : CREATE_NEW_GAME,
        gameId : gameId
    };
}

/**
 * Defines the action of adding new poker player
 * 
 * @param {string} playerId id of the added player 
 */
export function addPlayerAction(playerId) {
    return {
        type : ADD_PLAYER,
        playerId : playerId
    };
}

/**
 * Defines the action of removing a player
 * 
 * @param {string} playerId id of the player to be removed
 */
export function removePlayerAction(playerId) {
    return {
        type : REMOVE_PLAYER,
        playerId : playerId
    };
}

/**
 * Defines the action of dealing cards to the player
 * 
 * @param {string} playerId id of the player to deal the cards to 
 * @param {Array<string>} cardIds array of ids of the cards to be dealt
 */
export function dealCards(playerId, cardIds) {
    return {
        type : DEAL_CARDS,
        playerId : playerId,
        cardIds : cardIds 
    }
}





