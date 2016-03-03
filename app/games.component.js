System.register(['angular2/core', './game.service'], function(exports_1, context_1) {
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
    var core_1, game_service_1;
    var GamesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            // import {FilterPipe} from './filter-pipe';
            GamesComponent = (function () {
                // // It can infer what type it is from the GAMES array below, so we don't need to tell it.
                function GamesComponent(_gameService) {
                    this._gameService = _gameService;
                }
                GamesComponent.prototype.ngOnInit = function () {
                    this.getGames();
                };
                //we call getGames NOT in the constructor but in ngOnlnit.
                GamesComponent.prototype.getGames = function () {
                    var _this = this;
                    //retrieving data from the promise.
                    this._gameService.getGames()
                        .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-games',
                        // pipes: [FilterPipe],
                        templateUrl: 'app/games.component.html',
                        styleUrls: ['app/games.component.css'],
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService])
                ], GamesComponent);
                return GamesComponent;
            }());
            exports_1("GamesComponent", GamesComponent);
        }
    }
});
//# sourceMappingURL=games.component.js.map