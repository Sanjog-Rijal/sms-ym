import Router from 'express';
import { IRouteInterface } from './RouterInterface';
import { ExampleControllerRouter } from '../controllers/ExampleController/ExampleController.router';
import TeacherRouter from '../controllers/Teacher/teacher.router';
//Middle ware that is specific to this router

class SMSRouter {
    exampleRouter: Array<IRouteInterface>;
    teacherRouter: Array<IRouteInterface>;
    routings: any;
    constructor(private router) {
        this.main = this.main.bind(this);

        let routers = []
        this.exampleRouter = new ExampleControllerRouter().returnRoutes();
        this.teacherRouter = new TeacherRouter().returnRoutes();
    
        this.routings = [...this.exampleRouter,...this.teacherRouter]
    }

    registerRoutes = () => {
        console.log("MAIN IS: " + this.routings);
        this.routings.forEach((route: {'method': string;'url': string, 'handler': any}) => {
            switch(route.method){
                case 'get':
                    this.router.get(route.url, route.handler);
                    break;
                
                case 'post':
                    this.router.post(route.url, route.handler)
                    break;
                
                case 'update':
                    this.router.put(route.url, route.handler)
                    break;
                
                case 'delete':
                    this.router.delete(route.url, route.handler);
                    break;
                
                default:
                    console.error("[SERVER: ] METHOD NOT ALLOWED");
                    break;
                }
            return this.router;
        });
    }

    main = () => {
        return this.registerRoutes();
    }
}

export default new SMSRouter(Router()).main();
