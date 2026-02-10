let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let time = document.getElementById("time")
let count = 0;
let timer;
let isStartActive = false;

start.addEventListener("click", () => {
    if(isStartActive == false){
        isStartActive = true;
        timer = setInterval(() => {
            count++
            time.innerText = `${count} Seconds`
        }, 1000)
    }
})

stop.addEventListener("click", () => {
    isStartActive = false
    clearInterval(timer)
})

reset.addEventListener("click", () => {
    isStartActive = false
    clearInterval(timer);
    count = 0;
    time.innerText = "0 Seconds"
})