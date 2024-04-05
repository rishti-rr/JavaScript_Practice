function sample(a,b,cb){
    // var c = a+b
    // var d = a-b
    var result = cb(a,b)
    return result
}
 
function sum(a,b){
    return a+b
}

var result = sample(3,9,sum)
console.log(result);

sample(5,4, function(c,d){
    return c-d
})