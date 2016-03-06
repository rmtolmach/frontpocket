import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { GameService } from './game.service';
import { GamesComponent } from './games.component';
import { TestGameFormComponent } from './testgame-form.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    <testgame-form></testgame-form>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    GameService
  ]
})

@RouteConfig([
  {path:'/',        name: 'GameForm',       component: TestGameFormComponent},
  {path:'/games',      name: 'Games',   component: GamesComponent}
])

export class AppComponent {
  title = 'Back Pocket Games';
}
