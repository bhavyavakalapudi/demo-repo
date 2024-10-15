function wait(n) {
    return new Promise(function(res){
        setTimeout(res,n)
    })
}

const p = wait(1000)

p.then(()=>{
    console.log("a")
})
console.log(p)