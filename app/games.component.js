System.register(['angular2/core', 'angular2/router', './game.service', './equipment-pipe', './noise-pipe', './time-pipe', './players-pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, game_service_1, equipment_pipe_1, noise_pipe_1, time_pipe_1, players_pipe_1;
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
            },
            function (equipment_pipe_1_1) {
                equipment_pipe_1 = equipment_pipe_1_1;
            },
            function (noise_pipe_1_1) {
                noise_pipe_1 = noise_pipe_1_1;
            },
            function (time_pipe_1_1) {
                time_pipe_1 = time_pipe_1_1;
            },
            function (players_pipe_1_1) {
                players_pipe_1 = players_pipe_1_1;
            }],
        execute: function() {
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
                        .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
                    console.log(this._chosenEquip, this._chosenNoise, this._chosenTime);
                };
                GamesComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-games',
                        pipes: [equipment_pipe_1.EquipmentPipe, noise_pipe_1.NoisePipe, time_pipe_1.TimePipe, players_pipe_1.PlayersPipe],
                        templateUrl: 'app/games.component.html',
                        styleUrls: ['app/games.component.css'],
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