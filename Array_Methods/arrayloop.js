let array1=[1,54,5,57,68,7,9,786]
for(i=0;i<array1.length;i++){
    console.log(array1[i])
}
array1.forEach(element => {
    console.log(element)
});
for(let a of array1){
    console.log(a)
}
for(let b in array1){
    console.log(array1[b])
}
let variable="Bishal"
let c=Array.from(variable)
console.log(c)