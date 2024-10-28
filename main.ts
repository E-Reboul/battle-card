import { Card } from "./entities/Card";
import { Deck } from "./entities/Deck";
import { CardType } from "./enums/CardType";
import { CardValue } from "./enums/CardValue";

let deck: Deck = new Deck();

deck.addCard(new Card(CardType.HEART, CardValue.AS));

console.log(deck.display());