import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { CandyProfileComponent } from './candy-profile.component.ts';

@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a><br>
      <a href="dashboard">Dashboard url</a><br>
      <a [routerLink]="['Heroes']">Heroes</a><br>
      <a href="heroes">Heroes url</a>
    </nav>
    <router-outlet></router-outlet>
  `,
	//styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		HeroService
	]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/profile/:id',
		name: 'CandyProfile',
		component: CandyProfileComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])
export class AppComponent {
	title = 'Tour of Heroes';
}