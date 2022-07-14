"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
class RegisterRouter {
    constructor(app) {
        this.app = app;
    }
    registerRoutes() {
        this.app.use(routes_1.default);
    }
}
exports.default = RegisterRouter;
//# sourceMappingURL=registerRouter.js.map