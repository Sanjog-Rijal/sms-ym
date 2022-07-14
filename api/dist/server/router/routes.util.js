"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleController_router_1 = require("../controllers/ExampleController/ExampleController.router");
const teacher_router_1 = __importDefault(require("../controllers/Teacher/teacher.router"));
const main = () => {
    let routers = [];
    const exampleRouter = new ExampleController_router_1.ExampleControllerRouter().returnRoutes();
    const teacherRouter = new teacher_router_1.default().returnRoutes();
    routers = [...exampleRouter, ...teacherRouter];
    console.log(routers);
    return routers;
};
exports.default = main();
//# sourceMappingURL=routes.util.js.map