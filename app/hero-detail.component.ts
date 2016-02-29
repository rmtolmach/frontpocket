// this is a reusable component.
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Game} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  // inputs: ['hero']

})
export class HeroDetailComponent {
  hero: Game;

  constructor(
  private _heroService: HeroService,
  private _routeParams: RouteParams) {
}
//Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
}
  goBack() {
    window.history.back();
}


}
