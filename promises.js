

console.log('start')

// console.log("end")
const p = new Promise(res => {
    var a =1;
    setTimeout(()=> {
        console.log(a)
      
    },0)
    console.log('yo bhavs')
    res('done');
})
p.then((a)=> {
console.log(a)
})

console.log("end")