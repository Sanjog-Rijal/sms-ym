"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
let main = () => {
    let smsServer = new server_1.default();
    try {
        smsServer.registerDependency(); //dotenv registered
        smsServer.middlewareRegistration(); // cors registered 
        smsServer.registerRoute(); // routes registered
        smsServer.startServer(process.env.PORT); //server start
    }
    catch (err) {
        console.error(`[SERVER Err]: Server Encountered Error: ${err}`);
    }
};
main();
//# sourceMappingURL=index.js.map