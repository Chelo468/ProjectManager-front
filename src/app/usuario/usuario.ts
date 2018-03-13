export class Usuario{
	constructor(
		public id_usuario:string,
		public login_name:string,
		public password:string,
		public fecha_alta:string,
		public email:string,
		public token_clave:string,
		public habilitado:string,
		public roles:string
		){}
}