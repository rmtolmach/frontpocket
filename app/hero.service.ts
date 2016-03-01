import {Game} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
//
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';


// parentheses are important!
@Injectable()
// HeroService can get data from ANYWHERE! local storage, an api, mock data whatevs (like the heroes array).
export class HeroService {

//Constructor example
  constructor(public http: Http) {}

  postHeroes(data) {
//first part is a promise that will result in data. Second part says map that data to data.json (like .map with res.json inside of the function)
    this.http.post(URL, data).map(res => res.json())
  }
////  //////   ////
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
  );
  }
}
