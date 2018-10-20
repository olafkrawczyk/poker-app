import {
    CREATE_NEW_GAME,
    ADD_PLAYER,
    REMOVE_PLAYER,
    DEAL_CARDS
} from './actions';
import { combineReducers } from 'redux';

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

function game(state = null, action) {
    switch (action.type) {
        case CREATE_NEW_GAME:
            return {
                gameId : action.gameId,
                players : []
            }; 
        case ADD_PLAYER:
            return { ...state, players: players(state.players, action)};
        case REMOVE_PLAYER:
            return { ...state, players: players(state.players, action)};
        case DEAL_CARDS:
            return { ...state, players: players(state.players, action)};
        default:
            return state;
    }
}

export default combineReducers({
    game
});