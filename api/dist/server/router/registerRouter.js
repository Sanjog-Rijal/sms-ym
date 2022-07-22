"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sms_router_1 = __importDefault(require("./sms_router"));
class RegisterRouter {
    constructor(app) {
        this.app = app;
    }
    registerRoutes() {
        this.app.use(sms_router_1.default);
    }
}
exports.default = RegisterRouter;
//# sourceMappingURL=registerRouter.js.map