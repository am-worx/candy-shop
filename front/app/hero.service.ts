import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from 'angular2/http';
import { Hero } from './hero';
import { Candy } from './candy'
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	constructor (private http: Http) {}

	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 1000)
		);
	}

	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	}

	private _candiesUrl = 'http://localhost:8080/api/posts';

	getCandies (): Observable<Candy[]> {
		console.log('Candies', this.http.get(this._candiesUrl));
		return this.http.get(this._candiesUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	postNewCandy(hero: string) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		console.log('candy posted', hero);
		return this.http.post('http://localhost:8080/api/create-new-candy', hero, {headers: headers})
			.map(res => res.json()).subscribe(
			data => { console.log(data); },
			err => { console.log(err); }
		);
	}

	private extractData(res: Response) {
		console.log('Candy Response', res);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		//return body.data || { };
		return body || { };
	}
	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}