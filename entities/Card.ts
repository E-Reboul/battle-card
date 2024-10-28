import { CardType } from "../enums/CardType";
import { CardValue } from "../enums/CardValue";

export abstract class Card {

    protected value: CardValue;
    protected type: CardType;

    constructor(value: CardValue, type: CardType) {
        this.value = value; 
        this.type = type;
    }
}