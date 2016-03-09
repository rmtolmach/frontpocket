System.register(['angular2/core', 'angular2/router', './game.service'], function(exports_1, context_1) {
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
    var core_1, router_1, game_service_1;
    var GamesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            // import {EquipmentPipe} from './equipment-pipe';
            // import {NoisePipe} from './noise-pipe';
            // import {TimePipe} from './time-pipe';
            // import {PlayersPipe} from './players-pipe';
            GamesComponent = (function () {
                // // It can infer what type it is from the GAMES array below, so we don't need to tell it.
                function GamesComponent(_router, routeParams, _gameService) {
                    this._router = _router;
                    this.routeParams = routeParams;
                    this._gameService = _gameService;
                    this._chosenEquip = routeParams.get('equipment'), this._chosenNoise = routeParams.get('noise'), this._chosenTime = routeParams.get('time'), this._chosenPlayers = routeParams.get('players');
                }
                GamesComponent.prototype.ngOnInit = function () {
                    this.getGames();
                };
                //we call getGames NOT in the constructor but in ngOnlnit.
                GamesComponent.prototype.getGames = function () {
                    var _this = this;
                    //retrieving data from the promise.
                    this._gameService.getGames()
                        .subscribe(function (games) {
                        _this.games = games;
                        if (_this._chosenEquip === "none") {
                            _this.matchingGames = _this.games.filter(function (game) { return game.equipment === null; });
                        }
                        else {
                            _this.matchingGames = _this.games.filter(function (game) { return game.equipment === _this._chosenEquip; });
                        }
                        if (_this._chosenNoise === "Outside Voice" || _this._chosenNoise === "Outside%20Voice") {
                            _this.matchingGames = _this.games.filter(function (game) { return game.noise === true; });
                        }
                        else {
                            _this.matchingGames = _this.games.filter(function (game) { return game.noise === false; });
                        }
                        if (_this._chosenPlayers === "whatever") {
                            _this.matchingGames = games;
                        }
                        else {
                            _this.matchingGames = games.filter(function (game) {
                                return Array.apply(null, Array(parseInt(game.num_of_players.slice(-2)))).map(function (_, i) { return i + parseInt(game.num_of_players); }).includes(parseInt(_this._chosenPlayers));
                            });
                        }
                        if (_this._chosenTime === "doesntmatter") {
                            _this.matchingGames = games;
                        }
                        else {
                            _this.matchingGames = games.filter(function (game) {
                                return Array.apply(null, Array(parseInt(game.time_range.slice(-2)))).map(function (_, i) { return i + parseInt(game.time_range); }).includes(parseInt(_this._chosenPlayers));
                            });
                        }
                        return _this.matchingGames;
                    }, function (error) { return _this.errorMessage = error; });
                    console.log(this._chosenEquip, this._chosenNoise, this._chosenTime);
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-games',
                        // pipes: [EquipmentPipe, NoisePipe, TimePipe, PlayersPipe],
                        templateUrl: 'app/games.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, game_service_1.GameService])
                ], GamesComponent);
                return GamesComponent;
            }());
            exports_1("GamesComponent", GamesComponent);
        }
    }
});
//# sourceMappingURL=games.component.js.map