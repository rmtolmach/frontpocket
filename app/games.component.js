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
            GamesComponent = (function () {
                function GamesComponent(_router, routeParams, _gameService) {
                    this._router = _router;
                    this.routeParams = routeParams;
                    this._gameService = _gameService;
                    this.games = [];
                    this.matchingGames = [];
                    this.pendingRequest = true;
                    this.desperate = false;
                    this._chosenEquip = routeParams.get('equipment'), this._chosenNoise = routeParams.get('noise'), this._chosenTime = routeParams.get('time'), this._chosenPlayers = routeParams.get('players'), this._chosenType = routeParams.get('type');
                }
                GamesComponent.prototype.ngOnInit = function () {
                    this.getGames();
                };
                //we call getGames NOT in the constructor but in ngOnlnit.
                GamesComponent.prototype.getGames = function () {
                    var _this = this;
                    this.pendingRequest = true;
                    this.desperate = false;
                    //retrieving data from the promise.
                    this._gameService.getGames()
                        .subscribe(function (games) {
                        _this.games = games;
                        if (_this._chosenType === "random") {
                            _this.randomNum = Math.floor(Math.random() * (20 - 1)) + 1;
                            _this.randomGame = games[_this.randomNum];
                            _this.pendingRequest = false;
                            _this.desperate = true;
                            return _this.randomGame;
                        }
                        else {
                            if (_this._chosenEquip === "None") {
                                _this.matchingGames = games.filter(function (game) { return game.equipment === null; });
                            }
                            else {
                                _this.matchingGames = games.filter(function (game) { return game.equipment === _this._chosenEquip; });
                            }
                            if (_this._chosenNoise === "Outside Voice" || _this._chosenNoise === "Outside%20Voice") {
                                _this.matchingGames = _this.matchingGames.filter(function (game) { return game.noise === true; });
                            }
                            else if (_this._chosenNoise === "whatever") {
                                _this.matchingGames = _this.matchingGames;
                            }
                            else {
                                _this.matchingGames = _this.matchingGames.filter(function (game) { return game.noise === false; });
                            }
                            if (_this._chosenPlayers === "whatever") {
                                _this.matchingGames = _this.matchingGames;
                            }
                            else {
                                _this.matchingGames = _this.matchingGames.filter(function (game) {
                                    return Array.apply(null, Array(parseFloat(game.num_of_players.slice(-2)) - (parseFloat(game.num_of_players) - 1))).map(function (_, i) { return i + parseFloat(game.num_of_players); }).includes(parseFloat(_this._chosenPlayers));
                                });
                            }
                            if (_this._chosenTime === "doesntmatter") {
                                _this.matchingGames = _this.matchingGames;
                            }
                            else {
                                _this.matchingGames = _this.matchingGames.filter(function (game) {
                                    return Array.apply(null, Array(parseFloat(game.time_range.slice(-2)) - (parseFloat(game.time_range) - 1))).map(function (_, i) { return i + parseFloat(game.time_range); }).includes(parseFloat(_this._chosenTime));
                                });
                            }
                            _this.pendingRequest = false;
                            return _this.matchingGames;
                        }
                    });
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/games.component.html'
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