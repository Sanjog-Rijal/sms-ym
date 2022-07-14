import TeacherController from './teacher.controller';
export class TeacherRouter {
    getRoutes: Array<{'url': string, 'handler': any}>;
    constructor() {
        this.getRoutes = [
            {url: '/teacher', handler: new TeacherController().get}
        ]
    }

    returnRoutes = () => {
        return this.getRoutes;
    }
}

export default TeacherRouter;