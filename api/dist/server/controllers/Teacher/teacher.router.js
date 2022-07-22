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
            return this.teacherRoutes;
        };
        this.teacherRoutes = [
            { method: 'get', url: '/teacher', handler: new teacher_controller_1.default().get },
            { method: 'post', url: '/teacher', handler: new teacher_controller_1.default().post }
        ];
    }
}
exports.TeacherRouter = TeacherRouter;
exports.default = TeacherRouter;
//# sourceMappingURL=teacher.router.js.map