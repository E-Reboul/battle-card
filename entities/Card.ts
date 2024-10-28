export class Card {

    protected value: string;
    protected type: string;

    constructor(value: string, type: string) {
        this.value = value;
        this.type = type; 
    }

    public display(): string {
        const card: Card = new Card(this.value, this.type)
        return `${card.value} of ${card.type}`;
    }
}