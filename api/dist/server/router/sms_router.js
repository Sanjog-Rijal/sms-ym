"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleController_router_1 = require("../controllers/ExampleController/ExampleController.router");
const teacher_router_1 = __importDefault(require("../controllers/Teacher/teacher.router"));
//Middle ware that is specific to this router
class SMSRouter {
    constructor(router) {
        this.router = router;
        this.registerRoutes = () => {
            console.log("MAIN IS: " + this.routings);
            this.routings.forEach((route) => {
                switch (route.method) {
                    case 'get':
                        this.router.get(route.url, route.handler);
                        break;
                    case 'post':
                        this.router.post(route.url, route.handler);
                        break;
                    case 'update':
                        this.router.put(route.url, route.handler);
                        break;
                    case 'delete':
                        this.router.delete(route.url, route.handler);
                        break;
                    default:
                        console.error("[SERVER: ] METHOD NOT ALLOWED");
                        break;
                }
                return this.router;
            });
        };
        this.registerPostRoutes = () => {
            console.log("MAIN IS: " + this.routings);
            this.routings.forEach((route) => {
                this.router.post(route.url, route.handler);
                return this.router;
            });
        };
        this.main = () => {
            this.registerRoutes();
            return this.router;
        };
        this.main = this.main.bind(this);
        let routers = [];
        this.exampleRouter = new ExampleController_router_1.ExampleControllerRouter().returnRoutes();
        this.teacherRouter = new teacher_router_1.default().returnRoutes();
        this.routings = [...this.exampleRouter, ...this.teacherRouter];
    }
}
exports.default = new SMSRouter((0, express_1.default)()).main();
//# sourceMappingURL=sms_router.js.map