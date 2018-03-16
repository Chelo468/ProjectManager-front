import { Injectable } from '@angular/core';

//Modulos para trabajar con AJAX
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Comun } from '../comun/comun';
import { Proyecto } from '../clases/proyecto';

@Injectable()


export class ProyectoService{

	public url:string;

	constructor(
			private _http:Http,
			private _comun:Comun
		){
		this.url = _comun.url + "proyecto/";
	}

	getByIdUser(idUser, token){
		//Ejemplo Spotify
		//let _headers = new Headers({'authorization': 'Bearer token'});
		//if(idUser != undefined && idUser != null)
			return this._http.get(this.url + "getByIdUser/" + idUser + "/" + token).map(res => res.json());
	}

	nuevoProyecto(proyecto:Proyecto){

		
		let body = JSON.stringify(proyecto);
		let headers = new Headers({
			'Content-type': 'application/json',
			'access-control-allow-headers': '*',
			'nombre': proyecto.nombre,
			'descripcion': proyecto.descripcion,
			'urlTesting': proyecto.urlTesting,
			'urlProduccion': proyecto.urlProduccion
			});

		return this._http.post(this.url + "crear", body, {headers}).map(res => res.json());

	}

}