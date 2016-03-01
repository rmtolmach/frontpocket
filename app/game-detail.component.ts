// this is a reusable component.
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Game} from './game';
import { GameService } from './game.service';

@Component({
  selector: 'games',
  templateUrl: 'app/game-detail.component.html',
  // inputs: ['game']

})
export class GameDetailComponent {
  game: Game;

  constructor(
  private _gameService: GameService,
  private _routeParams: RouteParams) {
}
//Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._gameService.getGame(id)
      .then(game => this.game = game);
}
  goBack() {
    window.history.back();
}


}
