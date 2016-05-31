System.register(['angular2/core', 'angular2/router', '../candy-profile/candy-profile.component', '../../services/hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, candy_profile_component_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (candy_profile_component_1_1) {
                candy_profile_component_1 = candy_profile_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.getCandies = function () {
                    var _this = this;
                    this._heroService.getCandies()
                        .subscribe(function (candies) { return _this.candies = candies; }, function (error) { return _this.errorMessage = error; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                    this.getCandies();
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['CandyProfile', { id: this.selectedHero.id }]);
                };
                HeroesComponent.prototype.removeCandy = function (candy) {
                    console.log('remove Candy', candy._id);
                    /*console.log('Onsubmit', JSON.stringify(this.model));
                    this._heroService.postNewCandy(JSON.stringify(this.model));
                    this.submitted = true;*/
                    this._heroService.removeCandy(candy._id);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: './app/components/candies-list/heroes.component.html',
                        //styleUrls:  ['app/heroes.component.css'],
                        directives: [candy_profile_component_1.CandyProfileComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=heroes.component.js.map