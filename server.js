require('dotenv').config();
require("./settings");
const http = require("http");
const app = require("./index");
const PORTHOST = port || 8080;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`
    █████╗ ██████╗ ██╗     █████╗ ███████╗████████╗██╗  ██╗███████╗██████╗ ███████╗
   ██╔══██╗██╔══██╗██║    ██╔══██╗██╔════╝╚══██╔══╝██║  ██║██╔════╝██╔══██╗╚══███╔╝
   ███████║██████╔╝██║    ███████║█████╗     ██║   ███████║█████╗  ██████╔╝  ███╔╝ 
   ██╔══██║██╔═══╝ ██║    ██╔══██║██╔══╝     ██║   ██╔══██║██╔══╝  ██╔══██╗ ███╔╝  
   ██║  ██║██║     ██║    ██║  ██║███████╗   ██║   ██║  ██║███████╗██║  ██║███████╗
   ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝
                                                                           @aethersss17
Server running on http://localhost:` + PORTHOST)
console.log(`Hello ${creator}`)
})
