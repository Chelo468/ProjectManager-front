import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Proyecto } from '../clases/proyecto';

import { ProyectoService } from '../services/proyecto.service';
import { AuthService } from '../services/auth.service';

@Component({

	selector: 'proyecto-nuevo',
	templateUrl: './proyecto-nuevo.component.html',
	providers: [ProyectoService,AuthService]

	})

export class ProyectoNuevoComponent{

	public proyecto:Proyecto = {
		nombre: "",
		descripcion: "",
		urlTesting: "",
		urlProduccion: ""
	};

	public idUser;

	constructor(
			private _authService:AuthService,
			private _proyectoService:ProyectoService,
			private _router:Router
			){
		/*this.proyecto = new FormGroup({
			'nombre': new FormControl('', 		[Validators.required, Validators.maxLength(50)]),
			'descripcion': new FormControl('',  [Validators.required, Validators.maxLength(200)]),
			'urlTesting': new FormControl(),
			'urlProduccion': new FormControl(),
			});*/

		this.idUser = this._authService.getIdUser();
	}

	crear(proyecto:NgForm){
		/*this.proyecto.nombre = proyecto.nombre;
		this.proyecto.descripcion = proyecto.descripcion;
		this.proyecto.urlTesting = proyecto.urlTesting;
		this.proyecto.urlProduccion = proyecto.urlProduccion;*/

		//console.log(proyecto.value);

		//console.log("this", this.proyecto);
		//console.log("Proyecto", proyecto);
		this._proyectoService.nuevoProyecto(proyecto.value, this._authService.getToken()).subscribe(

			result => {
				if(result.Error)
					alert(result.Mensaje);
				else
					if(result.id_proyecto > 0)
						this._router.navigate(['/']);
				},
			error => console.log(error)

			);
		//console.log("Proyecto", this.proyecto);

	}

	volver(){
		this._router.navigate(['/proyecto']);
	}


}