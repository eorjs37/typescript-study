"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
function buildName(firstName) {
    var restString = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restString[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restString.join(' ');
}
