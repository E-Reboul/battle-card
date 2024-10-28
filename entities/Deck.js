"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var CardType_1 = require("../enums/CardType");
var CardValue_1 = require("../enums/CardValue");
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.Cards = [];
    }
    Deck.prototype.addCard = function (card) {
        return this.Cards.push(card);
    };
    Deck.prototype.display = function () {
        var res = '';
        for (var i = 0; i < this.Cards.length; i++) {
            res += this.Cards[i].display() + '\n';
        }
        return res;
    };
    Deck.prototype.cardBySymbol = function () {
        // ? Diviser le total par le nombre de type (52 / 4 = 13)
        //Pour chaque valeurs de carte possibles
        for (var i = 0; i < 4; i++) {
            //Et pour chaque symboles possibles
            for (var j = 0; j < 13; j++) {
                //Crée une carte qui contient la valeur et le type
                this.Cards.push(new Card_1.Card(CardValue_1.CardValue[j], CardType_1.CardType[i]));
            }
        }
    };
    Deck.prototype.generateDeck = function () {
        return this.Cards.sort(function () { return Math.floor(Math.random() - 0.5); });
    };
    Deck.prototype.sort = function () { };
    Deck.prototype.distribute = function () {
        //Diviser le total des cartes par 2 puis les attribuers aux decks des joueurs
    };
    Deck.prototype.displayCardsByPlayer = function () {
        //Renvoie le nombre de carte du joueur dans son deck
    };
    Deck.prototype.sortBelow = function () {
        //Renvoie les cartes gagnées à la fin du deck actuel à la fin de chaque round
    };
    return Deck;
}());
exports.Deck = Deck;
