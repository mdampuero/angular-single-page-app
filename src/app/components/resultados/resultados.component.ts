import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  heroes   : Heroe[]=[];
  query    : string;
  constructor(
    private _heroesService: HeroesService,
    private activatedRouter:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      this.query=params['query'];
			this.heroes=this._heroesService.buscarHeroe(params['query']);
		})
  }

}
