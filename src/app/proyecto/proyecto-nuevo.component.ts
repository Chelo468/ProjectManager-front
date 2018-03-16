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
		nombre: "asd",
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

	crear(){
		console.log(this.proyecto);
		/*this._proyectoService.nuevoProyecto(this.proyecto).subscribe(

			result => console.log(result),
			error => console.log(error)

			);*/
		//console.log("Proyecto", this.proyecto);

	}

	volver(){
		this._router.navigate(['/proyecto/' + this.idUser]);
	}


}