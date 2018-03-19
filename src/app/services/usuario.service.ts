import { Injectable } from '@angular/core';

//Modulos para trabajar con AJAX
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Comun } from '../comun/comun';

@Injectable()


export class UsuarioService{
	
	public url:string;

	constructor(
			private _http:Http,
			private _comun:Comun
		){
		this.url = _comun.url + "usuario/";
	}

	getUserById(idUser){
		//console.log(this.url + idUser);
		//idUser = idUser + "";
		/*console.log(this.url + "/login/mbrizuela/" + idUser);
		let _headers = new Headers();
		_headers.append('Content-Type', 'application/json');
		_headers.append('Access-Control-Allow-Origin', '*');
		_headers.append('Access-Control-Request-Method', '*');
	    _headers.append('login_name', 'mbrizuela');
	    _headers.append('password', '123456');*/
		return this._http.get(this.url + idUser).map(res => res.json());
	}

	logIn(login_name, password){

		return this._http.get(this.url + "login/" + login_name+"/" + password ).map(res => res.json());
	}

	cerrarSesion(token){

		let body = {token: token}

		let headers = this.createRequestHeader(body, token);


		return this._http.post(this.url + "logout", body, {headers}).map(res => res.json());
	}

	getArticulos(){
		return this._http.get(this.url).map(res => res.json());
	}

	registrar(registro){

		let body = JSON.stringify(registro);
		//let headers = this.createRequestHeader(body,token);

		return this._http.post(this.url + "crear", body).map(res => res.json());
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