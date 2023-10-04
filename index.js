const http = require('http');
const app = require('./src/config/express.config');

//creating a server
const server = http.createServer(app);

server.listen('8000', 'localhost', (err)=>{
    if(!err){
        console.log("Server Running on port 8000...");
        console.log("Press ctrl+c to stop the server");
        console.log("Browse http://localhost:8000");
    }
})