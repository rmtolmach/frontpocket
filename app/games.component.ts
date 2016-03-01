import {Component, OnInit} from 'angular2/core';
// import { Router } from 'angular2/router';
// so when I use the word, Game, it knows what I'm talking about.
import {Game} from './game';
import {GameDetailComponent} from './game-detail.component';
import {GameService} from './game.service';
@Component({
    selector: 'my-games',
    templateUrl: 'app/games.component.html',
    styleUrls: ['app/games.component.css'],
// this tells Angular that it exists
    directives: [GameDetailComponent]
})
// AppComponent is the same name as the file. the word component is the key. AppComponent is the top level component in the application. There should be only one instance of GameService in the whole app.
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;
  errorMessage: string;
// // It can infer what type it is from the GAMES array below, so we don't need to tell it.
  constructor(private _gameService: GameService) { }

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
}

  onSelect(game: Game) { this.selectedGame = game; }

  // gotoDetail() {
  //   this._router.navigate(['GameDetail', { id: this.selectedGame.name }]);
  // }
}
