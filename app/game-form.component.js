System.register(['angular2/core', './game'], function(exports_1, context_1) {
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
    var core_1, game_1;
    var GameFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            GameFormComponent = (function () {
                function GameFormComponent() {
                    this.equipment = ['none', 'ball (soft)',
                        'ball', 'boombox'];
                    this.model = new game_1.Game(2, 'radar', 'keys', this.equipment[0], false);
                    this.submitted = false;
                    // TODO: Remove this when we're done
                    // get diagnostic() { return JSON.stringify(this.model); }
                    this.active = true;
                }
                GameFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                GameFormComponent.prototype.newGame = function () {
                    var _this = this;
                    this.model = new game_1.Game(42, '', '', '', false);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                GameFormComponent = __decorate([
                    core_1.Component({
                        // selector: 'game-form',
                        templateUrl: 'app/game-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], GameFormComponent);
                return GameFormComponent;
            }());
            exports_1("GameFormComponent", GameFormComponent);
        }
    }
});
// // this is a reusable component.
// import {Component, OnInit} from 'angular2/core';
// import {RouteParams} from 'angular2/router';
//
// import {Game} from './game';
// import { GameService } from './game.service';
//
// @Component({
//   // selector: 'games',
//   templateUrl: 'app/game-form.component.html',
//   // inputs: ['game']
//
// })
// export class GameFormComponent {
//   game: Game;
//
//   constructor(
//   private _gameService: GameService,
//   private _routeParams: RouteParams) {
// }
// //Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
//   ngOnInit() {
//     // let id = +this._routeParams.get('id');
//     // this._gameService.getGame(id)
//     //   .then(game => this.game = game);
// }
//   goBack() {
//     window.history.back();
// }
//
//
// }
//# sourceMappingURL=game-form.component.js.map