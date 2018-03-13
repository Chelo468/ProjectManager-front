import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';

@Component({

	selector: 'proyecto-nuevo',
	templateUrl: './proyecto-nuevo.component.html',
	providers: [ProyectoService]

	})

export class ProyectoNuevoComponent{
}