"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(data) {
        if (data === void 0) { data = []; }
        this._data = [];
        this._data = data;
    }
    Object.defineProperty(Model.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Model.prototype.add = function (item) {
        this._data.push(item);
    };
    Model.prototype.remove = function (index) {
        this._data.splice(index, 1);
    };
    Model.prototype.item = function (index) {
        return this._data[index];
    };
    Model.prototype.clear = function () {
        this._data = [];
    };
    return Model;
}());
var stringModel = new Model();
stringModel.add('흔들의자1');
