import express from 'express';
import cors from 'cors';
import Dependency from './dependency/dependency';
import Middleware from './dependency/middleware';
import RegisterRouter from './router/registerRouter';

class Server {
    app;
    constructor() {

        this.app = express();
        this.registerDependency = this.registerDependency.bind(this);
    }
    middlewareRegistration(){
        let registerMiddleware = new Middleware(this.app, [cors()]);
        try {
            registerMiddleware.registerMiddleware();
        }
        catch(err) {
            console.error(`[Server Error]: ${err}`);
        }
    }

    registerRoute() {
        let Register = new RegisterRouter(this.app);
        Register.registerRoutes();
        
    }

    registerDependency () {
        const dependency =  new Dependency();
        dependency.dotEnvRegister();
    }

    startServer(port) {
        this.app.listen(port, () => {
            console.info(`[SERVER]: APP RUNNING IN PORT: ${port}`);
        });
    }
}

export default Server;