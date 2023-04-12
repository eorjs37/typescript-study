System.register([], function (exports_1, context_1) {
    "use strict";
    var DigitalClock, AnalogClock, digital, analog;
    var __moduleName = context_1 && context_1.id;
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    return {
        setters: [],
        execute: function () {
            DigitalClock = (function () {
                function DigitalClock(h, m) {
                }
                DigitalClock.prototype.tick = function () {
                };
                return DigitalClock;
            }());
            AnalogClock = (function () {
                function AnalogClock(h, m) {
                }
                AnalogClock.prototype.tick = function () {
                    console.log("tick tock");
                };
                return AnalogClock;
            }());
            digital = createClock(DigitalClock, 12, 17);
            analog = createClock(AnalogClock, 7, 32);
        }
    };
});
