System.register([], function (exports_1, context_1) {
    "use strict";
    var choi1, choi2;
    var __moduleName = context_1 && context_1.id;
    function person(firstName, lastName) {
        if (lastName === void 0) { lastName = 'Dae Geon'; }
    }
    return {
        setters: [],
        execute: function () {
            choi1 = person('Choi');
            choi2 = person('Choi', 'Dae Geon');
        }
    };
});
