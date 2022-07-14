import dotenv from 'dotenv';
import cors from 'cors';
import { appendFile } from 'fs';

class Dependency{
	app: any;
	dependencyInstance: any;
	constructor(){
	}

	dotEnvRegister = ()=> {
		return dotenv.config();
	}
}

export default Dependency;