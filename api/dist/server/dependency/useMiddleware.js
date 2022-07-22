"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
class Middleware {
    constructor(app, middlewareInstances) {
        this.registerMiddleware = () => {
            this.middlewareInstances.forEach((data) => {
                this.app.use(data);
            });
        };
        this.unregisterMiddleware = () => {
            this.middlewareInstances.forEach((data) => {
            });
        };
        this.app = app;
        this.middlewareInstances = middlewareInstances;
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=useMiddleware.js.map