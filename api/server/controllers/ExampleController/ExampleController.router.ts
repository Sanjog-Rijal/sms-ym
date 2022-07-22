import ExampleController from './ExampleController.controller';
// import Routes from '../../router/routes';
import { IRouteInterface } from '../../router/RouterInterface';
export class ExampleControllerRouter {
    getRoutes: Array<IRouteInterface>;
    constructor() {
        this.getRoutes = [
            {method: 'get', url: '/', handler: new ExampleController().getAllExamples}
        ]
    }

    returnRoutes = () => {
        
        return this.getRoutes;
    }
}