import dotenv from 'dotenv';

export class Dependency{
	app: any;
	dependencyInstance: any;
	constructor(){
	}

	dotEnvRegister = ()=> {
		return dotenv.config();
	}
}