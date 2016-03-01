import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { GameService } from './game.service';
import { DashboardComponent } from './dashboard.component';
import { GamesComponent } from './games.component';
import { GameDetailComponent } from './game-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-games></my-games>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [GamesComponent],
  providers: [
    HTTP_PROVIDERS,
    GameService
  ]
})

export class AppComponent {
  title = 'Back Pocket Games';
}
