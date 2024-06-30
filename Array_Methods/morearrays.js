let arr=[2,3,43,54,65,5]
console.log(typeof arr)
let arr2=arr.slice(2)
 arr=arr.slice(2,5)
console.log(arr)
console.log(arr2)
delete arr[0]
console.log(arr)
let arr3=arr.concat(arr2)
console.log(arr3)
let compare=(a,b)=>{
    return a-b
}
let another_array=[2,34,3546,57,5,868,7]
let sort1=another_array.sort()
console.log(sort1)
console.log(another_array.sort(compare))
console.log(another_array.reverse())