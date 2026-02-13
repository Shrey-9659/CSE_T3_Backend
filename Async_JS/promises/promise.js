let random = Math.ceil(Math.random() * 10);
let myPromise = new Promise((resolve, reject) => {
    if(random%2 == 0){
        console.log("The random number is even, number : " + random)
        resolve("Shrey Khandelwal");
    }else{
        console.log("The random number is odd, number : " + random)
        reject("Error aa gaya")
    }
})

myPromise
.then((data) => {
    console.log("Promise is resolved, name : " + data)
})
.catch((error) => {
    console.log("Promise is rejected, error : " + error)
})
.finally(() => {
    console.log("Hamesha chalega")
})