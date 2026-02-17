let btn = document.getElementById("btn")
let quote = document.getElementById("quote")
btn.addEventListener("click", () => {
    fetch("https://api.quotable.io/random")
    .then((rawData) => rawData.json())
    .then((response) => quote.innerText = response.content)
    .catch((error) => console.log(error))
})


