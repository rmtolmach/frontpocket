import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
// so when I use the word, Game, it knows what I'm talking about.
import {Game} from './game';
import {TestGameFormComponent} from './testgame-form.component';
import {GameService} from './game.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {FilterPipe} from './filter-pipe';
@Component({
    // selector: 'my-games',
    pipes: [FilterPipe],
    templateUrl: 'app/games.component.html',
    styleUrls: ['app/games.component.css'],
// this tells Angular that it exists
    // directives: [GameFormComponent]
})
// AppComponent is the same name as the file. the word component is the key. AppComponent is the top level component in the application. There should be only one instance of GameService in the whole app.
export class GamesComponent implements OnInit {
  games: Game[];
  private _chosenEquip: string;

  // selectedGame: Game;
  errorMessage: string;
// // It can infer what type it is from the GAMES array below, so we don't need to tell it.
  constructor(
    private _router:Router,
    private routeParams: RouteParams,
    private _gameService: GameService) { this._chosenEquip = routeParams.get('equipment')}

  ngOnInit() {
    this.getGames();
}
//we call getGames NOT in the constructor but in ngOnlnit.
  getGames() {
//retrieving data from the promise.
    this._gameService.getGames()
        .subscribe(
          games => this.games = games,
          error =>  this.errorMessage = <any>error);
console.log(this._chosenEquip);
}

  // onSelect(game: Game) { this.selectedGame = game; }

  // gotoForm() {
  //   this._router.navigate(['GameForm', { id: this.selectedGame.name }]);
  // }
}
