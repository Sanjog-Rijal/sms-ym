import ExampleController from './ExampleController.controller';
import Routes from '../../router/routes';
export class ExampleControllerRouter {
    getRoutes: Array<{'url': string, 'handler': any}>;
    constructor() {
        this.getRoutes = [
            {url: '/', handler: new ExampleController().getAllExamples}
        ]
    }

    returnRoutes = () => {
        
        return this.getRoutes;
    }
}