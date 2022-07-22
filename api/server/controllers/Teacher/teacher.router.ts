import TeacherController from './teacher.controller';
import {IRouteInterface} from '../../router/RouterInterface';

export class TeacherRouter {
    teacherRoutes: Array<IRouteInterface>;
    constructor() {
        this.teacherRoutes = [
            {method: 'get', url: '/teacher', handler: new TeacherController().get}, 
            {method: 'post', url: '/teacher', handler: new TeacherController().post}
        ]
        
    }

    returnRoutes = () => {
        return this.teacherRoutes;
    }
}

export default TeacherRouter;