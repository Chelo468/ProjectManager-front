export class Comun{

	public url;
	public token;

	constructor(){
		
		//DESARROLLO
		//this.url = "http://localhost:51427/api/";

		//PRODUCCION
		//this.url = "http://10.1.1.132/api/";

		//CASA
		this.url = "http://192.168.0.4/api/"
	}
}