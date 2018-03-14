// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';

//Importamos el router para aceptar parametros
import { Router, ActivatedRoute, Params} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private _router:Router    
    ){}

  setToken(token){
    localStorage.setItem("tokenSession",token);
  }

  getToken(){
   return localStorage.getItem("tokenSession");
  }

  isAuthenticated(){
    //console.log(this.getToken());
      if(this.getToken() != undefined && this.getToken() != null)
      {
        return true;
      }
      else
      {
        return false;
      }
  }

  cerrarSesion(){
    localStorage.removeItem("tokenSession");
    this._router.navigate(['/']);
  }
        

}