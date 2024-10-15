function transform(i){
    return i*2
}

const arr = [1,2,3,4,5]

// const ans = arr.map(transform)

const ans = arr.map((i) => {
    return i*2;
})

// console.log(ans)

// function map1(arr, fn){
//     for(let i=0;i<arr.length;i++)
//         arr[i] = fn(arr[i])
//     return arr;
// }

// function transform(i){
//     return i*2;
// }

// console.log(map1(arr, transform))

 // filter

 function filterLogic(n){
    if(n % 2 == 0)
        return true;
    else
        return false;
 }

 const ans1 = arr.filter(filterLogic)
console.log(ans1)
