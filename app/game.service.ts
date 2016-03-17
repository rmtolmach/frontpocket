import {Game} from './game';
import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GameService {

  constructor(public http: Http) {}
//this get request won't go out until something subscribes to the observable (in this case, the GameComponent)
  getGames() {
    return this.http.get(this._gamesUrl)
                    .map(res => <Game[]> res.json())
                    .catch(this.handleError);
  }

  private _gamesUrl = 'http://api.backpocketgames.club/games'; // URL to JSON file

  private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
