import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Game} from './game';
import {TestGameFormComponent} from './testgame-form.component';
import {GameService} from './game.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    // selector: 'my-games',
    templateUrl: 'app/games.component.html',
// this tells Angular that it exists
    // directives: [GameFormComponent]
})
// AppComponent is the same name as the file. the word component is the key. AppComponent is the top level component in the application. There should be only one instance of GameService in the whole app.
export class GamesComponent implements OnInit {
  games: Game[] = [];
  matchingGames: Game[] = [];
  randomGame: any;
  pendingRequest: boolean = true;
  desperate: boolean = false;
  randomNum: number;
  private _chosenEquip: string;
  private _chosenNoise: string;
  private _chosenTime: string;
  private _chosenPlayers: string;
  private _chosenType: string;
  // selectedGame: Game;
  errorMessage: string;
// // It can infer what type it is from the GAMES array below, so we don't need to tell it.
  constructor(
    private _router:Router,
    private routeParams: RouteParams,
    private _gameService: GameService) { this._chosenEquip = routeParams.get('equipment'), this._chosenNoise = routeParams.get('noise'), this._chosenTime = routeParams.get('time'), this._chosenPlayers = routeParams.get('players'), this._chosenType = routeParams.get('type')}

  ngOnInit() {
    this.getGames();
}
//we call getGames NOT in the constructor but in ngOnlnit.
  getGames() {
    this.pendingRequest = true;
    this.desperate = false;
//retrieving data from the promise.
    this._gameService.getGames()
        .subscribe(
          games => {
            this.games = games

            if (this._chosenType === "random") {
              this.randomNum = Math.floor(Math.random() * (20 - 1)) + 1;
              this.randomGame = games[this.randomNum];
              this.pendingRequest = false;
              this.desperate = true;
              return this.randomGame;
            } else {

              if (this._chosenEquip === "None"){
                this.matchingGames = games.filter((game)=> game.equipment === null);
              } else {
                this.matchingGames = games.filter((game)=> game.equipment === this._chosenEquip);
              }
              if (this._chosenNoise === "Outside Voice" || this._chosenNoise === "Outside%20Voice" ) {
                this.matchingGames = this.matchingGames.filter((game)=> game.noise === true);
              } else if (this._chosenNoise === "whatever") {
                this.matchingGames = this.matchingGames;
              } else {
                this.matchingGames = this.matchingGames.filter((game)=> game.noise === false);
              }
              if (this._chosenPlayers === "whatever") {
                this.matchingGames = this.matchingGames;
              } else {
                this.matchingGames = this.matchingGames.filter((game)=>
                  Array.apply(null, Array(parseInt(game.num_of_players.slice(-2)) - (parseInt(game.num_of_players) - 1) )).map(function (_, i) {return i + parseInt(game.num_of_players);}).includes(parseInt(this._chosenPlayers)));
              }
              if (this._chosenTime === "doesntmatter") {
                this.matchingGames = this.matchingGames;
              } else {
                this.matchingGames = this.matchingGames.filter((game)=>
                  Array.apply(null, Array(parseInt(game.time_range.slice(-2)) - (parseInt(game.time_range) - 1) )).map(function (_, i) {return i + parseInt(game.time_range);}).includes(parseInt(this._chosenTime)));
              }
            this.pendingRequest = false;
            return this.matchingGames;
          }},

          error =>  this.errorMessage = <any>error);
console.log(this._chosenEquip, this._chosenNoise, this._chosenTime);
}

  // onSelect(game: Game) { this.selectedGame = game; }

  // gotoForm() {
  //   this._router.navigate(['GameForm', { id: this.selectedGame.name }]);
  // }
}
