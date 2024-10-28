import { Deck } from "./Deck";

export class Player {

    private name: string;
    private deck: Deck;
    
    constructor(name: string) {
        this.name = name;
        this.deck = new Deck();
    }

    // public getDeck(): Deck {
    //     let deck = new Deck();
    //     deck.cardBySymbol();
    //     const shuffleDeck = deck.sort();
    //     shuffleDeck.slice(0, 25);
        
    //     return this.deck.push(shuffleDeck);
    // }

    // public playCard(): Deck {
    //     return this.deck[0];
    // }

}