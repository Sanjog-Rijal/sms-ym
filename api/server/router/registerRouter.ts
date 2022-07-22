import registeredRoutes from './sms_router';

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