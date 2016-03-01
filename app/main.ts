// Add all operators to Observable. I think this is a large import.
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
