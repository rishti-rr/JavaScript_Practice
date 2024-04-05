var arr = [3,2,5,7,8,9]
// var filterArr = arr.filter(function(value){
//      return value%2==1
// })

// console.log(filterArr);\

function myFilter(arr,cb){
    var newArr = []
    for(var i = 0; i< arr.length; i++){
        // if(arr[i]% 2 ==0){
            if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr, function(value){
    return value % 2 == 1
}));
console.log(myFilter(arr, function(value){
    return value> 4
}));