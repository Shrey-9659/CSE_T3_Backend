const http = require("http")
const fs = require("fs")
const app = http.createServer((req, res) => {
    // console.log(fs)
    // Writing in a file - Sync
    // fs.writeFileSync("myFile.txt", "This is added using writeFileSync")

    // Writing in a file - Async
    // fs.writeFile("myFile.txt", "Added from Async WriteFile", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Write success...")
    // })

    // Reading a file - Sync
    // let readData = fs.readFileSync("myFile.txt", "utf-8")
    // console.log(readData)

    // Reading a file - Async
    // fs.readFile("myFile.txt", "utf-8", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log(data)
    // })

    // Appending in a file - Sync
    // fs.appendFileSync("myFile.txt", "Appending using appendFileSync")

    // Appending in a file - Async
    // fs.appendFile("myFile.txt", "Appending using Append File", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Appended...")
    // })
    // Copying a file - Sync
    // fs.cpSync("myFile.txt", "copyFile.txt")

    // Deleting a file - Async
    // fs.unlink("myFile.txt", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Deleted...")
    // })
    // Stats of a file - Sync
    // let statData = fs.statSync("copyFile.txt")
    // console.log(statData)
})

app.listen(3000, () => {
    console.log("Server started...")
})