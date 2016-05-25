import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../models/hero';
import {Candy} from '../../models/candy';
import { CandyProfileComponent } from '../candy-profile/candy-profile.component';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	//styleUrls:  ['app/heroes.component.css'],
	directives: [CandyProfileComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	candies: Candy[];
	selectedHero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	getCandies() {
		this._heroService.getCandies()
			.subscribe(
				candies => this.candies = candies,
				error =>  this.errorMessage = <any>error);
	}

	ngOnInit() {
		this.getHeroes();
		this.getCandies();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	gotoDetail() {
		this._router.navigate(['CandyProfile', { id: this.selectedHero.id }]);
	}
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */