import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';

@Component({

	selector: 'proyecto',
	templateUrl: './proyecto.component.html',
	providers: [ProyectoService]

	})

export class ProyectoComponent{
	public idUser;
	public proyectos;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _proyectoService:ProyectoService
		){
		this.proyectos = [];
		//this.usuario = new Usuario("","","","","","","","");
	}

	ngOnInit(){
		this._route.params.forEach((params:Params) => {
				this.idUser = params['idUser'];
				this.buscarProyectosPorIdUser(this.idUser);
			});	
	}

	buscarProyectosPorIdUser(idUser){
			return this._proyectoService.getByIdUser(idUser).subscribe(
				result => {
					console.log(result);
					this.proyectos = result;
					//this.usuario = JSON.parse(result);
					},
				error => {
					//var errorMessage = <any>error;
					//console.log(errorMessage);
				}
			);
	}

	crearProyecto(){
		this._router.navigate(['/proyecto/nuevo']);
	}
}