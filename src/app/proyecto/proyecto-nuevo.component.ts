import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';
import { AuthService } from '../services/auth.service';

@Component({

	selector: 'proyecto-nuevo',
	templateUrl: './proyecto-nuevo.component.html',
	providers: [ProyectoService,AuthService]

	})

export class ProyectoNuevoComponent{

	public proyecto:FormGroup;
	public idUser;

	constructor(
			private _authService:AuthService,
			private _router:Router
			){
		this.proyecto = new FormGroup({
			'nombre': new FormControl('', 		[Validators.required, Validators.maxLength(50)]),
			'descripcion': new FormControl('',  [Validators.required, Validators.maxLength(200)]),
			'urlTesting': new FormControl(),
			'urlProduccion': new FormControl(),
			});

		this.idUser = this._authService.getIdUser();
	}

	crear(){
		console.log(this.proyecto.value);
		//console.log("Proyecto", this.proyecto);

	}

	volver(){
		this._router.navigate(['/proyecto/' + this.idUser]);
	}


}