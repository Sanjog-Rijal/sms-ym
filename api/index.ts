import Server from './server/server';

let main = () =>{
    let smsServer = new Server();
    try {
        smsServer.registerDependency(); //dotenv registered
        smsServer.middlewareRegistration(); // cors registered 
        smsServer.registerRoute(); // routes registered
        smsServer.startServer(process.env.PORT); //server start
    } catch(err) {
        console.error(`[SERVER Err]: Server Encountered Error: ${err}`);
    }
    
}

main();