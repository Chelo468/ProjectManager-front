import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

@Component({
	selector: 'registro',
	templateUrl: 'registro.component.html',
	providers: [UsuarioService]
	})

export class RegistroComponent{

	public registro = {
		nombre: "",
		apellido: "",
		email: "",
		password: "",
		passwordConfirm: "",
		login_name: "",
		telefono: ""
	}

	constructor(
		private _usuarioService:UsuarioService,
		private _router:Router
		){}

	crear(registro){
		//console.log(registro.value)
		this._usuarioService.registrar(registro.value).subscribe(

			result => {
				console.log(result);
				if(result.Error)
					alert(result.Mensaje);
				else
					if(result.id_usuario > 0)
						this._router.navigate(['/login']);
					else
						alert('Ocurrió un error al generar la solicitud');
				},
			error => console.error(error)

			);
	}

}