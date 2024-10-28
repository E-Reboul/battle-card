import { Deck } from "./Deck";

export class Player {

    private name: string;
    private deck: Deck[];
    
    constructor(name: string) {
        this.name = name;
        this.deck = [];
    }

    playCard() {
        return this.deck[0];
    }

}