import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';

@Component({

	selector: 'proyecto-nuevo',
	templateUrl: './proyecto-nuevo.component.html',
	providers: [ProyectoService]

	})

export class ProyectoNuevoComponent{

	public proyecto:FormGroup;

	constructor(){
		this.proyecto = new FormGroup({
			'nombre': new FormControl(),
			'descripcion': new FormControl(),
			'urlTesting': new FormControl(),
			'urlProduccion': new FormControl(),
			});
	}

	crear(){
		console.log(this.proyecto.value);
		//console.log("Proyecto", this.proyecto);

	}


}