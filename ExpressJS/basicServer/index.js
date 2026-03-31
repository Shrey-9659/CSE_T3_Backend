const express = require("express")
const path = require("path")
const users = require("./users.json")
const aboutPageFileLocation = path.join(__dirname, "about.html")
const app = express()

// serverName.methodName("/route", callbackFunction)
app.get("/", (req, res) => {
    res.send("Welcome to the home page")
})
app.get("/about", (req, res) => {
    res.sendFile(aboutPageFileLocation)
})
app.get("/users", (req, res) => {
    res.json({name : "Shrey", age : 25, year : 2026,
        university : "Shoolini"
    })
})

// API creation
app.get("/api/users", (req, res) => {
    res.json(users)
})
// Dynamic Routing
app.get("/api/users/:id", (req, res) => {
    const reqId = parseInt(req.params.id)
    const providedUser = users.find((user) => {
        return user.id == reqId
    })
    res.json(providedUser)
})


app.listen(3000, () => {
    console.log("Server started...")
})