import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Game }    from './game';
import {GameService} from './game.service';

@Component({
  // selector: 'game-form',
  templateUrl: 'app/game-form.component.html'
})
export class GameFormComponent {
  equipment = ['none', 'ball (soft)',
            'ball', 'boombox'];
  model = new Game(2, 'radar', 'keys', this.equipment[0], false);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
  active = true;

  newGame() {
    this.model = new Game(42, '', '', '', false);
    this.active = false;
    setTimeout(()=> this.active=true, 0);
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
