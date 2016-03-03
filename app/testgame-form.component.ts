import {Component} from 'angular2/core';
import { Game }    from './game';
import {GameService} from './game.service';
import {GamesComponent} from './games.component';
import { FORM_DIRECTIVES } from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'testgame-form',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/testgame-form.component.html'
})
export class TestGameFormComponent {
  private _chosenEquip: string;

  constructor(
      
    private _router: Router,
    routeParams: RouteParams) {
      this._chosenEquip = routeParams.get('equipment')}

    equipment = ['none', 'ball (soft)', 'ball', 'boombox'];

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this._router.navigate(['Games',  value ])
  }
}



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
