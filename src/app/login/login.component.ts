import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

//Importo el servicio de usuario
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';

@Component({

	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UsuarioService, AuthService]

	})

export class LoginComponent{

	public usuario;
	public login_name;
	public password;
	public autenticado;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _usuarioService:UsuarioService,
		private _authService:AuthService
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
				if(this.usuario.tokenSession != "")
				{
					this._authService.setIdUserToken(this.usuario.id_usuario,this.usuario.tokenSession);
					this._router.navigate(['/proyecto/' + this.usuario.id_usuario]);
				}
				else
				{
					alert("Ocurrió un error inesperado");
				}
			}
			else
			{
				this.autenticado = false;
			}
		}
		
	}

	signUp(){
		alert('TODO');
	}

}