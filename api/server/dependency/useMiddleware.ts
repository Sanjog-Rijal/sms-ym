interface IMiddleware {
    registerMiddleware();
    unregisterMiddleware();
}

export class Middleware implements IMiddleware{
    app: any;
    middlewareInstances: Array<any>;
    
    constructor(app, middlewareInstances: Array<any>) {
        this.app = app;
        this.middlewareInstances = middlewareInstances;
    }

    registerMiddleware = () => {
        this.middlewareInstances.forEach((data: any) => {
            this.app.use(data);
        });
    }

    unregisterMiddleware = () => {
        this.middlewareInstances.forEach((data: any) => {
        })
    }
}