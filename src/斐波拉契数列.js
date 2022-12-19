function Fibonacci(n){
    // write code here
    let f1 = 1
    let f2 = 1
    if(n<=0){
        return 0
    }
    if(n == 1 || n== 2) {
        return 1
    }
    while(n-- > 2){
        f1 = f1+f2
        f2 = f1 - f2
    }
    return f1
}

function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function yellow(){
    console.log('yellow')
}
function light(timer, cb){
    return new Promise(resolve  =>{
        setTimeout(() => {
            cb()
            resolve()
        }, timer);
    })
}

function step(){
    Promise.resolve().then(()=>{
        return light(3000, red)
    }).then(()=>{
        return light(2000, green)
    }).then(()=>{
        return light(1000, yellow)
    })
}

step()