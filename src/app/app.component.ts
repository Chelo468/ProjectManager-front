import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, UsuarioService]
})
export class AppComponent {
  title = 'Testing!';

  public autenticado = false;

  constructor(
  	private _authService:AuthService,
  	private _router:Router,
    private _usuarioService:UsuarioService
  	){}

  ngOnInit(){

    this.autenticado = this._authService.isAuthenticated();
  	if(!this.autenticado)
  	{
  		this._router.navigate(['/']);
  	}
  }

  cerrarSesion(){
    this._usuarioService.cerrarSesion(this._authService.getToken()).subscribe(
      result => this._authService.cerrarSesion()
      );
  }

}
