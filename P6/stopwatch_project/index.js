let start = document.getElementById("start")
let stop = document.getElementById("stop")
let time = document.getElementById("time")
let second = document.getElementById("second")
let timer;

start.addEventListener("click", () => {
    let count = second.value
    time.innerText = `${second.value} seconds`
    timer = setInterval(() => {
        count--
        time.innerText = `${count} seconds`
        if(count == 0) clearInterval(timer)
    }, 1000)
})

stop.addEventListener("click", () => {
    clearInterval(timer)
})

// https://github.com/Shrey-9659/CSE_T3_Backend