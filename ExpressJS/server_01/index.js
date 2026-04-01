const express = require("express")
const path = require("path")
const fs = require("fs")
const users = require("./users.json")

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Home Page
const HomePageFileLocation = path.join(__dirname, "/views/HomePage/index.html")
app.get("/", (req, res) => {
    res.sendFile(HomePageFileLocation)
})

// Form Page
const RegistrationPageFileLocation = path.join(__dirname, "/views/RegistrationPage/index.html")
app.get("/home/form", (req, res) => {
    res.sendFile(RegistrationPageFileLocation)
})

const SubmitPageFileLocation = path.join(__dirname, "/views/SubmittedPage/index.html")

app.get("/home/submit", (req, res) => {
    res.redirect("/home/form")
})
app.post("/home/submit", (req, res) => {
    users.push({
        "msg" : "New user added"
    })
    fs.writeFile("users.json", JSON.stringify(users), (err, data) => {
        if(err) console.log(err)
    })
    const newUser = req.body
    console.log(newUser)
    fs.readFile(SubmitPageFileLocation, "utf-8", (err, data) => {
        if(err) console.log(err)
            else{
            const newData = data
            .replace("{firstName}", newUser.firstName)
            .replace("{lastName}", newUser.lastName)
            .replace("{email}", newUser.email)
            .replace("{title}", newUser.jobTitle)
            res.send(newData)
        }
    })
})

app.listen(3000, () => {
    console.log("Server started...")
})