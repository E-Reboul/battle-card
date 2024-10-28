import { Player } from "./Player";

export class Round {
    
    private nbRounds: number;
    private nbPlayers: Player[];
    
    constructor(nbRounds: number = 0) {
        this.nbRounds = nbRounds
        this.nbPlayers = [];
    }

    incrementRound() {
        return this.nbRounds + 1;
    }

    displayPlayers() {
        return this.nbPlayers;
    }

}