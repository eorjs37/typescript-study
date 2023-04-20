"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log('beep beep');
    };
    return Clock;
}());
