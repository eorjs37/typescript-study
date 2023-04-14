System.register([], function (exports_1, context_1) {
    "use strict";
    var DigitalClock, AnalogClock, digital, analog, Clock;
    var __moduleName = context_1 && context_1.id;
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    return {
        setters: [],
        execute: function () {
            DigitalClock = (function () {
                function DigitalClock() {
                }
                DigitalClock.prototype.tick = function () {
                    console.log("beep beep");
                };
                return DigitalClock;
            }());
            AnalogClock = (function () {
                function AnalogClock() {
                }
                AnalogClock.prototype.tick = function () {
                    console.log("tick tick");
                };
                return AnalogClock;
            }());
            digital = createClock(DigitalClock, 12, 17);
            analog = createClock(AnalogClock, 7, 32);
            Clock = (function () {
                function Clock() {
                }
                Clock.prototype.tick = function () {
                };
                return Clock;
            }());
        }
    };
});
