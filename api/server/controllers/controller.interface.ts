export interface IController {
    get(req, res);
    getById(req,res);
    post(req, res);
    update(req,res);
    delete(req, res);
}
