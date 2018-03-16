import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';
import { AuthService } from '../services/auth.service';

@Component({

	selector: 'proyecto-detalle',
	templateUrl: './proyecto-detalle.component.html',
	providers: [ProyectoService]

	})

export class ProyectoDetalleComponent{


	public proyecto = {
		nombre: "",
		descripcion: "",
		urlTesting: "",
		urlProduccion: ""
	};

	public editarTesting = false;
	public editarProduccion = false;

	public id;

constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _proyectoService:ProyectoService,
		private _authService:AuthService
		){
		//this.usuario = new Usuario("","","","","","","","");
	}

	ngOnInit(){
		this._route.params.forEach((params:Params) => {
				this.id = params["id"];
				this.buscarProyectoPorId(this.id );
			});	
	}

	buscarProyectoPorId(id){
		this._proyectoService.getById(id, this._authService.getToken()).subscribe(
				result => {
					if(result.id_proyecto > 0)
						this.successGetById(result);
					else
						this._router.navigate(['/']);
					},
				error => console.error(error)
			);
	}

	successGetById(result){
		this.proyecto = result;
		console.log(this.proyecto);
	}

	actualizar(proyecto){
		this._proyectoService.actualizarProyecto(proyecto.value, this._authService.getToken(), this.id).subscribe(

			result => console.log(result),
			error => console.log(error)

			);
	}

}