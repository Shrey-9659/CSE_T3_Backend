let btn = document.getElementById("btn")
let quote = document.getElementById("quote")
let api = "https://api.quotable.io/random"

btn.addEventListener("click", () => {
    fetch(api)
    .then((rawData) => {
        return rawData.json()
    })
    .then((response) => {
        // console.log(response.content)
        quote.innerText = response.content
    })
    .catch((error) => {
        console.log(error)
    })
})

