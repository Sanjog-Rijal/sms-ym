"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dependency_1 = __importDefault(require("./dependency/dependency"));
const middleware_1 = __importDefault(require("./dependency/middleware"));
const registerRouter_1 = __importDefault(require("./router/registerRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.registerDependency = this.registerDependency.bind(this);
    }
    middlewareRegistration() {
        let registerMiddleware = new middleware_1.default(this.app, [(0, cors_1.default)()]);
        try {
            registerMiddleware.registerMiddleware();
        }
        catch (err) {
            console.error(`[Server Error]: ${err}`);
        }
    }
    registerRoute() {
        let Register = new registerRouter_1.default(this.app);
        Register.registerRoutes();
    }
    registerDependency() {
        const dependency = new dependency_1.default();
        dependency.dotEnvRegister();
    }
    startServer(port) {
        this.app.listen(port, () => {
            console.info(`[SERVER]: APP RUNNING IN PORT: ${port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map