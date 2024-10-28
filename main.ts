import { Card } from "./entities/Card";
import { Deck } from "./entities/Deck";
import { CardType } from "./enums/CardType";
import { CardValue } from "./enums/CardValue";

let deck: Deck = new Deck();

// deck.addCard(new Card(CardValue[CardValue.AS], CardType[CardType.HEART]));

deck.cardBySymbol();
deck.sort();

console.log(deck.display());

// let card: Card = new Card(CardValue[CardValue.FOUR], CardType[CardType.HEART]);

// console.log(card.display());