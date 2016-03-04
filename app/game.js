// export interface Game {
//   id: number;
//   name: string;
//   description: string;
// }
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters:[],
        execute: function() {
            // The TypeScript compiler generates a public field for each public constructor parameter and assigns the parameter’s value to that field automatically when we create new games. Although I'm not creating new games yet.
            Game = (function () {
                function Game(id, name, equipment, description, time_range, 
                    // public num_of_players: string,
                    noise) {
                    this.id = id;
                    this.name = name;
                    this.equipment = equipment;
                    this.description = description;
                    this.time_range = time_range;
                    this.noise = noise;
                }
                return Game;
            }());
            exports_1("Game", Game);
        }
    }
});
//# sourceMappingURL=game.js.map