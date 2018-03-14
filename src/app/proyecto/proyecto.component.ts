import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';
import { AuthService } from '../services/auth.service';

@Component({

	selector: 'proyecto',
	templateUrl: './proyecto.component.html',
	providers: [ProyectoService,AuthService]

	})

export class ProyectoComponent{
	public idUser;
	public proyectos;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _proyectoService:ProyectoService,
		private _authService:AuthService
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
					this.proyectos = result;
					//console.log(this.proyectos);

					if(this.proyectos.Error)
						this.proyectos = [];
					//this.usuario = JSON.parse(result);
					},
				error => {
					var errorMessage = <any>error;
					console.log(errorMessage);
				}
			);
	}

	crearProyecto(){
		this._router.navigate(['/proyecto/nuevo']);
	}
}