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
    var GameFormComponent;
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
            GameFormComponent = (function () {
                function GameFormComponent(_gameService, _routeParams) {
                    this._gameService = _gameService;
                    this._routeParams = _routeParams;
                }
                //Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
                GameFormComponent.prototype.ngOnInit = function () {
                    // let id = +this._routeParams.get('id');
                    // this._gameService.getGame(id)
                    //   .then(game => this.game = game);
                };
                GameFormComponent.prototype.goBack = function () {
                    window.history.back();
                };
                GameFormComponent = __decorate([
                    core_1.Component({
                        // selector: 'games',
                        templateUrl: 'app/game-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, router_1.RouteParams])
                ], GameFormComponent);
                return GameFormComponent;
            }());
            exports_1("GameFormComponent", GameFormComponent);
        }
    }
});
//# sourceMappingURL=game-form.component.js.map