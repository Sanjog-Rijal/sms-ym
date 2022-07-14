import IController from "../controller.interface";
import {Request, Response} from 'express';

class TeacherController implements IController {

    get(req: Request, res: Response){
        res.send("Hello Teacher!")
    };

    post() {
        
    };
    
    update(){

    };
    
    delete(){

    };
}

export default TeacherController;