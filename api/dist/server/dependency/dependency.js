"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
class Dependency {
    constructor() {
        this.dotEnvRegister = () => {
            return dotenv_1.default.config();
        };
    }
}
exports.default = Dependency;
//# sourceMappingURL=dependency.js.map