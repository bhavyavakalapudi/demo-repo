// const a = 10;
a = 99
a1 = 99
// console.log(a)
// console.log("hello world")

// var getName = () =>{
//     console.log(a+a1)
// }
// getName();

let isMarried = true;

// if(isMarried){
//     console.log(a +"is maaried")
// } else{
//     console.log(a + "is not married")
// }

// let ans = 0;
// for(let i=0;i<=3;i++){
//     ans+=1;
// }

let b = [1,5,3,4];
let large = b[0]
for(let i=0;i<b.length;i++){
    if(b[i]>large)
    {
        large = b[i]
    }
}
// console.log(large)

const val = sum(1,2)
// console.log(val)

function sum(a,b){
    return a+b
}

function mul(a,b,c){
    return a*b*c;
}
function arith(a,b,c,func){
    return func(a,b,c)
}

console.log(arith(7,2,1,sum))

let str = "Debit Card"
let str1 = "Bad Credit"
// console.log(str.toLowerCase().split('').sort().join(''))
// console.log(str1.toLowerCase().split('').sort().join(''))


function findSum(n){
    let ans=0
    for(let i=0;i<n;i++){
        ans+=i
    }
    return ans
}

function findSumTill1000(){
    console.log(findSum(100))
}

// setTimeout(findSumTill1000,1000)
// console.log("hell yeah!!!")

