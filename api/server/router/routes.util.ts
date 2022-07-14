import { ExampleControllerRouter } from "../controllers/ExampleController/ExampleController.router";
import TeacherRouter from '../controllers/Teacher/teacher.router'

const main = () => {
    let routers = []
    const exampleRouter = new ExampleControllerRouter().returnRoutes();
    const teacherRouter = new TeacherRouter().returnRoutes();

    routers = [...exampleRouter,...teacherRouter]
    console.log(routers);
    return routers;
}

export default main()