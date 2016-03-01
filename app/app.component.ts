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
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Games</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [HeroesComponent],
  providers: [
    HTTP_PROVIDERS,
    HeroService
  ]
})
// @RouteConfig([
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: DashboardComponent,
//     useAsDefault: true
//   },
//   {
//     path: '/detail/:id',
//     name: 'HeroDetail',
//     component: HeroDetailComponent
//   },
//   {
//     path: '/heroes',
//     name: 'Heroes',
//     component: HeroesComponent
//   }
// ])
export class AppComponent {
  title = 'Back Pocket Games';
}
