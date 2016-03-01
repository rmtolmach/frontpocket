import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  constructor(private _router: Router,
    private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getGames()
      .then(games => this.games = games.slice(1,5));
  }
  gotoDetail(game: Game) {
    let link = ['GameDetail', { id: game.id }];
    this._router.navigate(link);
  }
}
