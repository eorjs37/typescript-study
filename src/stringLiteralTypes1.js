"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
        else {
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, 'ease-in');
