"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRouter = void 0;
const teacher_controller_1 = __importDefault(require("./teacher.controller"));
class TeacherRouter {
    constructor() {
        this.returnRoutes = () => {
            return this.getRoutes;
        };
        this.getRoutes = [
            { url: '/teacher', handler: new teacher_controller_1.default().get }
        ];
    }
}
exports.TeacherRouter = TeacherRouter;
exports.default = TeacherRouter;
//# sourceMappingURL=teacher.router.js.map