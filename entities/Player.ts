import { Deck } from "./Deck";

export class Player {

    private name: string;
    private deck: Deck[];
    
    constructor(name: string) {
        this.deck = [];
        this.name = name;
    }

    playCard() {
        return this.deck[0];
    }

}