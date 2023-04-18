System.register([], function (exports_1, context_1) {
    "use strict";
    var choi3, choi4, choi6;
    var __moduleName = context_1 && context_1.id;
    function add(x, y) {
        return x + y;
    }
    function person(firstName, lastName) { }
    function person2(firstName, lastName) { }
    return {
        setters: [],
        execute: function () {
            choi3 = person('Choi', 'Dae Geon');
            choi4 = person2('Choi');
            choi6 = person2('Choi');
        }
    };
});
