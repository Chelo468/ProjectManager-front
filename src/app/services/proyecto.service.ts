import { Injectable } from '@angular/core';

//Modulos para trabajar con AJAX
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Comun } from '../comun/comun';

@Injectable()


export class ProyectoService{

	public url:string;

	constructor(
			private _http:Http,
			private _comun:Comun
		){
		this.url = _comun.url + "proyecto/";
	}

	getByIdUser(idUser){
		//Ejemplo Spotify
		//let _headers = new Headers({'authorization': 'Bearer token'});
		//if(idUser != undefined && idUser != null)
			return this._http.get(this.url + "getByIdUser/" + idUser).map(res => res.json());
	}

}