import { CardType } from "../enums/CardType";
import { CardValue } from "../enums/CardValue";

export class Card {

    protected type: CardType;
    protected value: CardValue;

    constructor(type: CardType, value: CardValue) {
        this.type = type;
        this.value = value; 
    }

    display() {
        return `${new Card(this.type, this.value)}`
    }
}