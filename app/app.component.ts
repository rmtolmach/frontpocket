import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { GameService } from './game.service';
import { DashboardComponent } from './dashboard.component';
import { GamesComponent } from './games.component';
import { GameFormComponent } from './game-form.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
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
  {path:'/',        name: 'GameForm',       component: GameFormComponent},
  {path:'/games',      name: 'Games',   component: GamesComponent}
])

export class AppComponent {
  title = 'Back Pocket Games';
}
