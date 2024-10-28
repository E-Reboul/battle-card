import { CardType } from "../enums/CardType";
import { CardValue } from "../enums/CardValue";
import { Card } from "./Card";

export class Deck {

    private Cards: Card[];

    constructor () {
        this.Cards = [];
    }

    public addCard(card: Card) {
        return this.Cards.push(card);
    }

    public display(): string {
        let res: string = '';
        for (let i = 0; i < this.Cards.length; i++) {
            res += this.Cards[i].display() + '\n';
        }
        return res;
    }
 
    public cardBySymbol(): void {
        //Pour chaque valeurs de carte possibles
        for (let i = 0; i < 4; i++) {
            //Et pour chaque symboles possibles
            for (let j = 0; j < 13; j++) {
                //Crée une carte qui contient la valeur et le type
               this.Cards.push(new Card(CardValue[j], CardType[i]));
            }
        }
    }

    public sort() {
        return this.Cards.sort(() => Math.floor(Math.random() - 0.5));
    }

    public getDeck() {
        return this.Cards;
    }

    public draw() {}

    public distribute() {
        //Diviser le total des cartes par 2 puis les attribuers aux decks des joueurs

    }

    public displayCardsByPlayer() {
        //Renvoie le nombre de carte du joueur dans son deck
    }

    public sortBelow() {
        //Renvoie les cartes gagnées à la fin du deck actuel à la fin de chaque round
    }

}