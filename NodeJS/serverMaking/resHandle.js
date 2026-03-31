const http = require("http")
// res.write()
// res.end()

const app = http.createServer((req, res) => {
    if(req.url != "/favicon.ico"){
    if(req.url === "/"){
        // console.log("I am on home page")
        res.write("I am on home page : 01")
        res.write("I am on home page : 02")
        res.end("I am on home page : 03")
        // res.end("I am on home page : 04")
    }else if(req.url === "/about"){
        // console.log("I am on about page")
        res.end("I am on about page")
    }else{
        console.log("404 : Page Not Found")
        res.end("<h1>404 : Page Not Found</h1>")
    }
}
})

app.listen(3000, () => {
    console.log("Server started...")
})