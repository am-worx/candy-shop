import { Component } from 'angular2/core';

import { Candy } from './candy';

@Component({
	selector: 'new-candy-form',
	templateUrl: 'app/templates/new-candy.component.html',
	//styleUrls: ['app/hero-detail.component.css']
})

export class NewCandyComponent {
	candy: Candy;
}