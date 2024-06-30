let arr=[1,2,3,"bishal",undefined,null,true,"$"]
console.log(arr)
arr[2]=333
arr[9]=BigInt("222")
console.log(arr)
console.log(arr.length)
arr=Number.parseInt(arr)
console.log(typeof arr)