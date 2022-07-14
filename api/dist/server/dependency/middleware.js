"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Middleware {
    constructor(app, middlewareInstances) {
        this.registerMiddleware = () => {
            this.middlewareInstances.forEach((data) => {
                this.app.use(data);
            });
        };
        this.unregisterMiddleware = () => {
        };
        this.app = app;
        this.middlewareInstances = middlewareInstances;
    }
}
exports.default = Middleware;
//# sourceMappingURL=middleware.js.map