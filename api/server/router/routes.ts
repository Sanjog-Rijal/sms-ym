import Router from 'express';
import main from './routes.util'
//Middle ware that is specific to this router

class Routes {
    constructor(private router) {
        this.main = this.main.bind(this);
    }

    registerGetRoutes = () => {
        console.log("MAIN IS: " + main);
        main.forEach((route: {'url': string, 'handler': any}) => {
            this.router.get(route.url, route.handler);
            return this.router;
        });
    }

    main = () => {
        this.registerGetRoutes();
        return this.router;
    }
}

export default new Routes(Router()).main();
