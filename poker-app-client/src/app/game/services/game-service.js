import axios from 'axios';
import REST_CONFIG from '../../../config/rest-config';

class GameService {

    constructor(gameId) {
        this.gameId = gameId;
    }
    
    getGameState() {
        return axios.get(`${REST_CONFIG.API_BASE_URL}/game/${this.gameId}`)
                    .then(response => { return response.data; });
    }

    addPlayer(player) {
        return axios.post(`${REST_CONFIG.API_BASE_URL}/game/${this.gameId}/addplayer`, player)
                    .then(response => { return response.data });
    }
}

export default GameService;