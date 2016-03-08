System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PlayersPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlayersPipe = (function () {
                function PlayersPipe() {
                }
                PlayersPipe.prototype.transform = function (value, args) {
                    // If value exists, filter through all of the games, make an array of numbers (between the first number in the
                    //range (parseInt(game.time_range) and the last numbers in the range) and check if the argument passed in from
                    //the form (after being turned into an integer) is included in the array.
                    if (value) {
                        if (args[0] === "whatever") {
                            return value;
                        }
                        return value.filter(function (game) {
                            return Array.apply(null, Array(parseInt(game.time_range.slice(-2)))).map(function (_, i) { return i + parseInt(game.time_range); }).includes(parseInt(args[0]));
                        });
                    }
                };
                PlayersPipe = __decorate([
                    core_1.Pipe({
                        name: "player_filter"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayersPipe);
                return PlayersPipe;
            }());
            exports_1("PlayersPipe", PlayersPipe);
        }
    }
});
//# sourceMappingURL=players-pipe.js.map