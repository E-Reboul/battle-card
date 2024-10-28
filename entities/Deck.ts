import { Card } from "./Card.ts";

export class Deck {

    private Cards: Card[];

    constructor () {
        this.Cards = [];
    }

    cardBySymbol() {
        //Diviser le total par le nombre de type (52 / 4 = 13)
    }

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