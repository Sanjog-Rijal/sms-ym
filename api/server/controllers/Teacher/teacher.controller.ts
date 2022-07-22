import {IController} from "../controller.interface";
import {Request, response, request,Response} from 'express';



class TeacherController implements IController {
    
    constructor() {
    }
    
    get(_: Request, res: Response){
        res.send('hello world fffggg ');
    };

    getById(_: any, res: any) {
        
    }

    post(req: Request, res: Response) {
        res.send('teacher post nodemon');        
    };
    
    update(){

    };
    
    delete(){

    };
}

export default TeacherController;