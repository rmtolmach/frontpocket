import {Component} from 'angular2/core';
import { Game }    from './game';
import {GameService} from './game.service';
import {GamesComponent} from './games.component';
import { FORM_DIRECTIVES } from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'testgame-form',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/testgame-form.component.html'
})
export class TestGameFormComponent {

  constructor(
    private _router: Router) {}

    equipment = ['none', 'ball (soft)', 'ball', 'boombox', 'hula-hoops']
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this._router.navigate(['Games',  value ])
  }
}

//   goBack() {
//     window.history.back();
// }
//
//
// }
