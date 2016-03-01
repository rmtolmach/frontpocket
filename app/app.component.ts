import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [HeroesComponent],
  providers: [
    HTTP_PROVIDERS,
    HeroService
  ]
})

export class AppComponent {
  title = 'Back Pocket Games';
}
