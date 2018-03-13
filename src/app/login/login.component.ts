import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

//Importo el servicio de usuario
import { UsuarioService } from '../services/usuario.service';

@Component({

	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UsuarioService]

	})

export class LoginComponent{

	public usuario;
	public login_name;
	public password;
	public autenticado;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _usuarioService:UsuarioService
		){}

	ngOnInit(){
		
	}

	iniciarSesion(){
		//Metodo para iniciar Sesion
		
		this._usuarioService.logIn(this.login_name, this.password).subscribe(
			result => {
					//console.log(JSON.stringify(result));

					this.usuario = JSON.parse(JSON.stringify(result));

					this.successIniciarSesion();
					//console.log(this.usuario);
					},
				error => {
					var errorMessage = <any>error;
					console.log(errorMessage);
				}
			);
	}

	successIniciarSesion(){
		if(this.usuario)
		{
			if(this.usuario.id_usuario > 0)
			{
				this._router.navigate(['/proyecto/' + this.usuario.id_usuario]);
			}
			else
			{
				this.autenticado = false;
			}
		}
		
	}

}