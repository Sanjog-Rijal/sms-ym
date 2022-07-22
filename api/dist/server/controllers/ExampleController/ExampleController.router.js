"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleControllerRouter = void 0;
const ExampleController_controller_1 = __importDefault(require("./ExampleController.controller"));
class ExampleControllerRouter {
    constructor() {
        this.returnRoutes = () => {
            return this.getRoutes;
        };
        this.getRoutes = [
            { method: 'get', url: '/', handler: new ExampleController_controller_1.default().getAllExamples }
        ];
    }
}
exports.ExampleControllerRouter = ExampleControllerRouter;
//# sourceMappingURL=ExampleController.router.js.map