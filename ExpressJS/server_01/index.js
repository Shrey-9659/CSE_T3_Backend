const express = require("express")
const path = require("path")

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

app.get("/home/submit", (req, res) => {
    res.redirect("/home/form")
})
app.post("/home/submit", (req, res) => {
    const newUser = req.body
    res.json({success : true,
        msg : "User added successfully",
        newUser
    })
})

app.listen(3000, () => {
    console.log("Server started...")
})