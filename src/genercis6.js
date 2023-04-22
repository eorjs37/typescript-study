"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(options) {
        this.options = options;
    }
    return Model;
}());
function create(C, options) {
    return new C(options);
}
create(Model, ['class Type']);
