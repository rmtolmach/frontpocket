import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { GameService } from './game.service';
import { DashboardComponent } from './dashboard.component';
import { GamesComponent } from './games.component';
import { GameDetailComponent } from './game-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-games></my-games>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    GameService
  ]
})

@RouteConfig([
  {path:'/',        name: 'Games',       component: GamesComponent},
  {path:'/games',      name: 'GameDetail',   component: GameDetailComponent}
])

export class AppComponent {
  title = 'Back Pocket Games';
}
