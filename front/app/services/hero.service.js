System.register(['angular2/core', 'rxjs/Observable', 'angular2/http', './mock-heroes'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1, mock_heroes_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this._candiesUrl = 'http://localhost:8080/api/candies';
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 1000);
                    });
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.getCandies = function () {
                    console.log('Candies', this.http.get(this._candiesUrl));
                    return this.http.get(this._candiesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HeroService.prototype.postNewCandy = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log('candy posted', hero);
                    return this.http.post('http://localhost:8080/api/create-candy-profile', hero, { headers: headers })
                        .map(function (res) { return res.json(); }).subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
                };
                HeroService.prototype.removeCandy = function (candyId) {
                    console.log('Remove Candy', candyId);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/delete-candy-profile', candyId, { headers: headers })
                        .map(function (res) { return res.json(); }).subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
                };
                HeroService.prototype.extractData = function (res) {
                    console.log('Candy Response', res);
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    //return body.data || { };
                    return body || {};
                };
                HeroService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map