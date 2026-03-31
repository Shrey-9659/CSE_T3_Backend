const http = require("http")
const path = require("path")
const indexLocation = "P6/stopwatch_project/index.js"
const urlLocation = path.join(__dirname, "urlModule.js")
const app = http.createServer((req, res) => {
    const myPath = path.parse(indexLocation)
    console.log(urlLocation)
})

app.listen(3000, () => {
    console.log("Server started...")
})

// P6/stopwatch_project/index.js