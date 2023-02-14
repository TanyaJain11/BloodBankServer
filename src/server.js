const http = require('http');
const app = require('./app');
const connectDatabase = require('./mongodb'); 
const PORT = process.env.PORT|8000;


const server = http.createServer(app);

async function serverConnect(){
    await connectDatabase();

    server.listen(PORT,()=>{
        console.log(`Server Listning On PORT 8000`);
    })
}
serverConnect();