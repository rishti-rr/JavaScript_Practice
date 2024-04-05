// var b = 10
// function a(){
//     var x = 5
//     return function(){
//         console.log(x);
//     }
// }
// var abc = a()
// console.dir(abc)



//
// for(var i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000*i)
// }

//
for(var i=1; i<=5; i++){
    (function(n){
        setTimeout(function(){
        console.log(n);
    }, 1000*n)
})(i)
}