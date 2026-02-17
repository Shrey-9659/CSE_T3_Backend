let api = "https://jsonplaceholder.typicode.com/users"

fetch(api)
.then((data) => {
    return data.json()
})
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})