"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(value, type) {
        this.value = value;
        this.type = type;
    }
    Card.prototype.display = function () {
        var card = new Card(this.value, this.type);
        return "".concat(card.value, " of ").concat(card.type);
    };
    return Card;
}());
exports.Card = Card;
