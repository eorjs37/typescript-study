"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(data) {
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
var ObjectModel = (function (_super) {
    __extends(ObjectModel, _super);
    function ObjectModel(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    ObjectModel.prototype.add = function (item) {
        _super.prototype.add.call(this, item);
    };
    return ObjectModel;
}(Model));
