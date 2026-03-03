const http = require("http")
const PORT = 3000;

const server = http.createServer((req, res) => {
    // console.log("Request aa gyi...")
    // console.log(req.url)
    if(req.url == "/"){
        console.log("Home Page...")
    }else if(req.url == "/contact"){
        console.log("Contact Page...")
    }else{
        console.log("404 : Page Not Found")
    }
})

server.listen(PORT, () => {
    console.log("Server Started on port number 3000...")
})

/* 
TERM 1 - Syllabus
Async JS :
setTimeout -- clearTimeout
setInterval -- clearInterval
Callbacks -- Callback hell
Promises -- Promise Chaining
FetchAPI
Async-Await -- Try/Catch

NodeJS :
Introduction to NodeJS
Import/Export
Server Creation
FS Module
*/