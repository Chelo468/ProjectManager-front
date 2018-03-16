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

	getById(id, token){
		let body = {id: id};
		let headers = this.createRequestHeader(body,token);
		return this._http.get(this.url + "getById/" + id,  { headers }).map(res => res.json());
	}

	getByUserId(token){
		//Ejemplo Spotify
		//let _headers = new Headers({'authorization': 'Bearer token'});
		//if(idUser != undefined && idUser != null)
			return this._http.get(this.url + "getByIdUser/" + token).map(res => res.json());
	}

	nuevoProyecto(proyecto:Proyecto, token:string){

		//console.log(token);
		let body = JSON.stringify(proyecto);
		//console.log(body);
		let headers = this.createRequestHeader(body,token);

		/*'access-control-allow-headers': '*',
			*/

		return this._http.post(this.url + "crear/", body, {headers:headers}).map(res => res.json());

	}

	actualizarProyecto(proyecto:Proyecto, token:string, id){

		//console.log(token);
		let body = JSON.stringify(proyecto);
		//console.log(body);
		let headers = this.createRequestHeader(body,token);

		/*'access-control-allow-headers': '*',
			*/

		return this._http.post(this.url + "actualizar/" + id, body, {headers:headers}).map(res => res.json());

	}

	 private createRequestHeader(body,token) {

		 let headers = new Headers();
		 //let _token = token;
		 if (token != "") {
		 headers.set("X-AUTH-TOKEN", token);
		 }
		 //headers.set("Accept", body);
		 headers.set("Content-Type", "application/json");
		 return headers;
	 }

}