import {Component, OnInit} from 'angular2/core';
// import { Router } from 'angular2/router';
// so when I use the word, Hero, it knows what I'm talking about.
import {Game} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
// this tells Angular that it exists
    directives: [HeroDetailComponent]
})
// AppComponent is the same name as the file. the word component is the key. AppComponent is the top level component in the application. There should be only one instance of HeroService in the whole app.
export class HeroesComponent implements OnInit {
  heroes: Game[];
  selectedHero: Game;
  errorMessage: string;
// // It can infer what type it is from the HEROES array below, so we don't need to tell it.
//   public heroes = HEROES;
  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
}
//we call getHeroes NOT in the constructor but in ngOnlnit.
  getHeroes() {
//retrieving data from the promise.
    this._heroService.getHeroes()
        .subscribe(
          heroes => this.heroes = heroes,
          error =>  this.errorMessage = <any>error);
}

  onSelect(hero: Game) { this.selectedHero = hero; }

  // gotoDetail() {
  //   this._router.navigate(['HeroDetail', { id: this.selectedHero.name }]);
  // }
}
