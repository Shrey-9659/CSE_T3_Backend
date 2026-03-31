const http = require("http")
const url = require("url")
const youtubeURL = "http://www.youtube.com/watch?video=abc&code=xyz"

const app = http.createServer((req, res) => {
    const myUrl = url.parse(youtubeURL, true)
    console.log(myUrl)
})

app.listen(3000, () => {
    console.log("Server started...")
})

// http://www.youtube.com/watch?video=abc&code=xyz

// http - protocol
// www.youtube.com - hostname/domain
// /watch - pathname
// [video=abc]&[code=xyz] - query/searchParams
