System.register(['angular2/core', '../../models/candy', '../../services/hero.service'], function(exports_1, context_1) {
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
    var core_1, candy_1, hero_service_1;
    var NewCandyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (candy_1_1) {
                candy_1 = candy_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            NewCandyComponent = (function () {
                function NewCandyComponent(_heroService) {
                    this._heroService = _heroService;
                    this.submitted = false;
                    this.model = new candy_1.Candy();
                }
                NewCandyComponent.prototype.onSubmit = function () {
                    console.log('Onsubmit', JSON.stringify(this.model));
                    this._heroService.postNewCandy(JSON.stringify(this.model));
                    this.submitted = true;
                };
                Object.defineProperty(NewCandyComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                NewCandyComponent = __decorate([
                    core_1.Component({
                        selector: 'new-candy-form',
                        templateUrl: './new-candy.component.html',
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], NewCandyComponent);
                return NewCandyComponent;
            }());
            exports_1("NewCandyComponent", NewCandyComponent);
        }
    }
});
//# sourceMappingURL=new-candy.component.js.map