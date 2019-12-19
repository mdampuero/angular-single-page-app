import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { HeroesService }     from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html'
})
export class HeroeComponent {
	heroe:any={}
	constructor(
		private activatedRouter: ActivatedRoute,
		private _heroesService:  HeroesService
		) { 
		this.activatedRouter.params.subscribe(params =>{
			// console.log(params['id']);
			this.heroe=_heroesService.getHeroe(params['id']);
			// console.log(this.heroe)
		})	
	}

}
