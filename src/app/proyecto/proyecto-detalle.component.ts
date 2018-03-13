import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';

@Component({

	selector: 'proyecto-detalle',
	templateUrl: './proyecto-detalle.component.html',
	providers: [ProyectoService]

	})

export class ProyectoDetalleComponent{

constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _proyectoService:ProyectoService
		){
		//this.usuario = new Usuario("","","","","","","","");
	}

	ngOnInit(){
		this._route.parent.params.forEach((params:Params) => {
				
				console.log(params)
			});	
	}

}