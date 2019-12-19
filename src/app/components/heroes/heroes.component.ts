import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

	heroes : Heroe[]=[];
  	constructor(
		private _heroesService: HeroesService,
		private _router: Router
    ) { 
		console.log("constructor");
    }

  ngOnInit() {


	console.log("ngOnInit");
	this.heroes=this._heroesService.getHeroes();
	console.log(this.heroes)
	
  }

//   goHeroe(index){
// 	  console.log(index);
// 	  this._router.navigate(['/heroe',index]);
//   }

}
