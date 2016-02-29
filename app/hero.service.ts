import {Game} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

// parentheses are important!
@Injectable()
// HeroService can get data from ANYWHERE! local storage, an api, mock data whatevs (like the heroes array).
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
  );
  }
}
