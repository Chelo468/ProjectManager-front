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
		if(!this._authService.isAuthenticated())
			this._router.navigate(['/login'])
		//this._route.params.forEach((params:Params) => {
				//this.idUser = params['idUser'];
				//if(this.idUser > 0)
		this.buscarProyectosPorIdUser();
			//});	
	}

	buscarProyectosPorIdUser(){
			//console.log(this._authService.getToken());
			return this._proyectoService.getByUserId(this._authService.getToken()).subscribe(
				result => {
					this.proyectos = result;
					//console.log(this.proyectos);

					if(this.proyectos.Error)
					{
						alert(this.proyectos.Mensaje);
						this._router.navigate(['/']);
					}
					else
					{
						if(this.proyectos.Mensaje)
						{
							this.proyectos = [];
						}
					}
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