import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { Http, Response } from 'angular2/http';

import { Candy } from './candy';
import { HeroService } from './hero.service';


@Component({
	selector: 'new-candy-form',
	templateUrl: 'app/templates/new-candy.component.html',
	//styleUrls: ['app/hero-detail.component.css']
})

export class NewCandyComponent {
	candy: Candy;
	submitted = false;

	model = new Candy();

	constructor(
		private _heroService: HeroService) { }

	onSubmit() {
		console.log('Onsubmit', JSON.stringify(this.model));
		this._heroService.postNewCandy(JSON.stringify(this.model));
		this.submitted = true;
	}

	get diagnostic() { return JSON.stringify(this.model); }
}