import { Card } from "./Card";

export class Deck {

    private Cards: Card[];

    constructor () {
        this.Cards = [];
    }

    addCard(card: Card) {
        return this.Cards.push(card);
    }

    display() {
        let res: string = '';
        for (let i = 0; i < this.Cards.length; i++) {
            res += this.Cards[i].display();
        }
        return res;
    }

    cardBySymbol() {
        //Diviser le total par le nombre de type (52 / 4 = 13)
    }

    generateDeck() {}

    sort() {}

    distribute() {
        //Diviser le total des cartes par 2 puis les attribuers aux decks des joueurs
    }

    displayCardByPlayer() {
        //Renvoie le nombre de carte du joueur dans son deck
    }

    sortBelow() {
        //Renvoie les cartes gagnées à la fin du deck actuel à la fin de chaque round
    }

}