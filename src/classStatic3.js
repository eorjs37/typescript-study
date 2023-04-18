System.register([], function (exports_1, context_1) {
    "use strict";
    var clock;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            clock = (function () {
                function Clock(h, m) {
                }
                Clock.prototype.tick = function () {
                    console.log('beep beep');
                };
                return Clock;
            }());
        }
    };
});
