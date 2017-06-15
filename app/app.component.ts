import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
	selector:'.app-main',
	templateUrl: './templates/all-heroes.html',
	styleUrls: ['./styles/app.component.css']
})
export class AppComponent{
	title:string = 'All heroes';
	hero:Hero;
	

	constructor(){
		this.hero = {"id":"hro01","name":"Silverhand","type":"Warrior","level":6,"avatar":"./images/silverhand.JPG"}
	}

}


//id:number,name:string,type:string,level:number,avatar:string