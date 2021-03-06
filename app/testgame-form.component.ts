import {Component} from 'angular2/core';
import { Game }    from './game';
import {GameService} from './game.service';
import {GamesComponent} from './games.component';
import { FORM_DIRECTIVES } from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  templateUrl: 'app/testgame-form.component.html'
})

export class TestGameFormComponent {

  constructor(
    private _router: Router) {}

    noise = ['Outside Voice', 'Inside Voice']
    equipment = ['None', 'ball (soft)', 'ball', 'boombox', 'hula-hoops']
    time = [5,10,15,20,25,30]
    players = [1,2,3,4,5,6,7,8,9,10,15,20,30,40,50]

  onSubmit(value: string): void {
    this._router.navigate(['Games', value ])
  }
}
