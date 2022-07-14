interface IController {
    get(req, res);
    post(req,res);
    update(req, res);
    delete(req, res);
}

export default IController;