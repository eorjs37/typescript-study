"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpaceRepeatingPaddier = (function () {
    function SpaceRepeatingPaddier(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPaddier.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(' ');
    };
    return SpaceRepeatingPaddier;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
