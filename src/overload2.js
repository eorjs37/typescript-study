"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
