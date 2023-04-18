System.register([], function (exports_1, context_1) {
    "use strict";
    var myAdd, myAdd2;
    var __moduleName = context_1 && context_1.id;
    function buildName(firstName) {
        var restString = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restString[_i - 1] = arguments[_i];
        }
        return firstName + ' ' + restString.join(' ');
    }
    return {
        setters: [],
        execute: function () {
            myAdd = function (x, y) {
                return x + y;
            };
            myAdd2 = function (x, y) {
                return x + y;
            };
        }
    };
});
