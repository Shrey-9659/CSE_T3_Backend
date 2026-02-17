let api = "https://jsonplaceholder.typicode.com/posts";

fetch(api)
.then((rawData) => {
    return rawData.json()
})
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})