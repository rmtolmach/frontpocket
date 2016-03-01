import {Game} from './game';
// import {GAMES} from './mock-games';
import {Injectable} from 'angular2/core';
//
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

// parentheses are important!
@Injectable()
// GameService can get data from ANYWHERE! local storage, an api, mock data whatevs (like the games array).
export class GameService {

  constructor(public http: Http) {}
//this get request won't go out until something subscribes to the observable (in this case, the GameComponent)
  getGames() {
    return this.http.get(this._gamesUrl)
                    .map(res => <Game[]> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  // getGame(id: number) {
  //   return Promise.resolve(GAMES).then(
  //     games => games.filter(game => game.id === id)[0]
  // );
  // }

  private _gamesUrl = 'http://localhost:3001/games'; // URL to JSON file

  private handleError (error: Response) {
      // in a real world app, we may send the error to some remote logging infrastructure
      // instead of just logging it to the console
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
