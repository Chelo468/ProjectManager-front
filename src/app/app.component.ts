import { Component } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'Testing!';

  constructor(
  	private _authService:AuthService,
  	private _router:Router,
  	){}

  ngOnInit(){
  	if(!this._authService.isAuthenticated())
  	{
  		this._router.navigate(['/']);
  	}
  }

}
