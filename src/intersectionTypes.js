"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm ".concat(name, "."));
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('jim'), ConsoleLogger.prototype);
jim.log(jim.name);
