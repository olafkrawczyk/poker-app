import {
    CREATE_NEW_GAME,
    ADD_PLAYER,
    REMOVE_PLAYER,
    DEAL_CARDS
} from './actions';
import { combineReducers } from 'redux';

function gameId(state = null, action) {
    switch (action.type) {
        case CREATE_NEW_GAME:
            return action.gameId; 
        default:
            return state;
    }
}

function players(state = [], action) {
    switch (action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                { 
                    id: action.playerId,
                    holeCards: []
                }
            ];
        case REMOVE_PLAYER:
            return state.filter(
                player => player.id !== action.playerId
            );
        case DEAL_CARDS: 
            return state.map((player) => {
                let mappedPlayer = player;
                if (mappedPlayer.id === action.playerId) {
                    Object.assign(mappedPlayer, { holeCards: action.cardIds });
                }
                return mappedPlayer;
            });
        default:
            return state;
    }
}

const pokerApp = combineReducers({
    gameId,
    players
});

export default pokerApp;