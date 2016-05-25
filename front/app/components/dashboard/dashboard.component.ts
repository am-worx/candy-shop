import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './app/components/dashboard/dashboard.component.html',
	//styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}

	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1,5));
	}

	gotoDetail(hero: Hero) {
		let link = ['CandyProfile', { id: hero.id }];
		this._router.navigate(link);
	}
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */