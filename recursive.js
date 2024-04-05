function sayBye(n){
    if(n==0){
        return
    }
    console.log('Hi, I am leaving');
    sayBye(n-1)
}

sayBye(10)

function sum(n){
    if(n==0){
        return 0
    }
    return n+ sum(n-1)
}
console.log(sum(5));


function fact(n){
    if(n==1){
        return 1
    }
    return n * fact(n-1)
}
console.log(fact(4));


var arr = [ 2,4,6,8,9,1,3]
function sumOfArray(arr, lastIndex){
    if(lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex -1)
}
console.log(sumOfArray(arr, arr.length-1));