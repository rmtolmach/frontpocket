System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var TestGameFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TestGameFormComponent = (function () {
                function TestGameFormComponent(_router) {
                    this._router = _router;
                    this.noise = ['Outside Voice', 'Inside Voice'];
                    this.equipment = ['none', 'ball (soft)', 'ball', 'boombox', 'hula-hoops'];
                    this.time = [5, 10, 15, 20, 25, 30];
                    this.players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50];
                }
                TestGameFormComponent.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                    this._router.navigate(['Games', value]);
                };
                TestGameFormComponent = __decorate([
                    core_1.Component({
                        selector: 'testgame-form',
                        directives: [common_1.FORM_DIRECTIVES],
                        templateUrl: 'app/testgame-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TestGameFormComponent);
                return TestGameFormComponent;
            }());
            exports_1("TestGameFormComponent", TestGameFormComponent);
        }
    }
});
//   goBack() {
//     window.history.back();
// }
//
//
// }
//# sourceMappingURL=testgame-form.component.js.map