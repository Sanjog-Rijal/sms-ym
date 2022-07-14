import {Request, Response} from 'express'

class ExampleController {
    constructor(){

    }

    getAllExamples(req: Request, res: Response) {
        res.json({'data': 'This is json from data'});
    }
}

export default ExampleController;