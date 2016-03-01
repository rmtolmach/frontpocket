import {Game} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
//
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


// parentheses are important!
@Injectable()
// HeroService can get data from ANYWHERE! local storage, an api, mock data whatevs (like the heroes array).
export class HeroService {

//Constructor example
  constructor(public http: Http) {}

//   postHeroes(data) {
// //first part is a promise that will result in data. Second part says map that data to data.json (like .map with res.json inside of the function)
//     this.http.post(URL, data).map(res => res.json())
//   }
////  //////   ////
//this get request won't go out until something subscribes to the observable (in this case, the HeroComponent)
  getHeroes() {
    return this.http.get(this._gamesUrl)
                    .map(res => <Game[]> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
  );
  }

  private _gamesUrl = 'http://localhost:3001/games'; // URL to JSON file

  private handleError (error: Response) {
      // in a real world app, we may send the error to some remote logging infrastructure
      // instead of just logging it to the console
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
