import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Game} from './game';
import {TestGameFormComponent} from './testgame-form.component';
import {GameService} from './game.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {EquipmentPipe} from './equipment-pipe';
import {NoisePipe} from './noise-pipe';
import {TimePipe} from './time-pipe';
import {PlayersPipe} from './players-pipe';

@Component({
    // selector: 'my-games',
    pipes: [EquipmentPipe, NoisePipe, TimePipe, PlayersPipe],
    templateUrl: 'app/games.component.html',
// this tells Angular that it exists
    // directives: [GameFormComponent]
})
// AppComponent is the same name as the file. the word component is the key. AppComponent is the top level component in the application. There should be only one instance of GameService in the whole app.
export class GamesComponent implements OnInit {
  games: Game[];
  matchingGames: Game[];
  eqGames: Game[];
  private _chosenEquip: string;
  private _chosenNoise: string;
  private _chosenTime: string;
  private _chosenPlayers: string;
  // selectedGame: Game;
  errorMessage: string;
// // It can infer what type it is from the GAMES array below, so we don't need to tell it.
  constructor(
    private _router:Router,
    private routeParams: RouteParams,
    private _gameService: GameService) { this._chosenEquip = routeParams.get('equipment'), this._chosenNoise = routeParams.get('noise'), this._chosenTime = routeParams.get('time'), this._chosenPlayers = routeParams.get('players')}

  ngOnInit() {
    this.getGames();
}
//we call getGames NOT in the constructor but in ngOnlnit.
  getGames() {
//retrieving data from the promise.
    this._gameService.getGames()
        .subscribe(

          games => {
            this.games = games
            if (this._chosenEquip === "none"){
              this.matchingGames = games.filter((game)=> game.equipment === null);
            } else {
              this.matchingGames = games.filter((game)=> game.equipment === this._chosenEquip);
            }
            
          },

          error =>  this.errorMessage = <any>error);
console.log(this._chosenEquip, this._chosenNoise, this._chosenTime);
}

  // onSelect(game: Game) { this.selectedGame = game; }

  // gotoForm() {
  //   this._router.navigate(['GameForm', { id: this.selectedGame.name }]);
  // }
}
