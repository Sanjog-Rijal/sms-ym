import registeredRoutes from './routes';

class RegisterRouter {
    router;
    app;
    constructor(app){
        this.app = app;
    }

    registerRoutes() {
        this.app.use(registeredRoutes);
    }
}

export default RegisterRouter;