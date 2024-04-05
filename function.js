// function add(){
//     var a = 12
//     var b = 13
//     console.log(a+b);
// }

//function call
// function Rafin(){
//     console.log('I am Rishti Rahman Rafin');
// }
// for(var i=0; i<10; i++){
//     Rafin()
// }

//function parameter
// function add(a,r){
//      var result = a+r
//      console.log(result);
// }   
// add(2,5)

// var arr1 = [1,3,6]
// var arr2 = [2,5,9]
// var arr3 = [4,7,8]

// var sum1 = 0
// for (var i=0; i<arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0
// for (var i=0; i<arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2);

// var sum3 = 0
// for (var i=0; i<arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3);

// function sumOfArray(arr){
//      var sum = 0
//      for(i=0; i<arr.length; i++){
//         sum += arr[i]
//      }
//      console.log(sum);
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

//arguments
// function test(a,b,c){
//     //    console.log(arguments);
//     //    console.log(JSON.stringify( arguments));
//     for(var i=0; i<arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// test(111,222,333)

// function test(){
//     //    console.log(arguments);
//     //    console.log(JSON.stringify( arguments));
//     for(var i=0; i<arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// test(111,222,333)

// function addAll(){
//     var sum=0;
//     for(var i=0;i<arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum);
// }

// addAll(2,3,5)
// addAll(3,7,6,4,3,2,2,3,5)


//return
// function addAll(){
//     var sum=0;
//     for(var i=0;i<arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// var result = addAll(2,5,8,9)
// console.log(result);

// function person(name,email){
//     return{
//         Name: name,
//         Email: email
//     }
// }
// var p1=person('Rafin', 'rafin@gmail.com')
// console.log(p1);


//expression
// var add = function(a,b){
//      return a+b
// }
// add(2,5)

// setTimeout(function(){
//     console.log('I will call after 5 seconds later');
// },5000)

// var another = add
// console.log(another(7,8));

//inner
// function something(greet,name){
//     function sayHi(){
//         console.log(greet, name);
//     }
//     sayHi()
// }
// something('Good Bye', 'Rafin')

// function something(greet,name){
//     function getFirstName(){
//         if(name){
//             return name.split(' ')[0]
//         }else{
//             return ''
//         }
//     }
//     var message = greet + ' ' + getFirstName()
//     console.log(message);
// }
// something('Good Morning', 'Rishti Rahman Rafin')
 

//function scoping
var a = 'abc'
// if(true){
//     if(true){
//         var b = 'I am R' 
//     }
// }
// console.log(b);
// function x(){
//     var a = 9
//     function y(){
//         var a = 10
//         console.log(a);
//     }
//     console.log(a);
//     y()
// }
// x()

// function test(n){
//     function a(){
//         return n%3==0
//     }
//     function b(){
//         return n%5==0
//     }
//     if(a() && b()){
//         console.log(n + ' is divisible by both 3 and 5');
//     }
//     else{
//         console.log('Not a valid number');
//     }
// }
// test(15)

//pure function
// function sqr(n){
//     return n*n
// }
// console.log(sqr(3));
// console.log(sqr(3));

//non pure
// var n = 10
// function change(){
//     n = 100
// }
// change()
// console.log(n);

// var point = {
//     x: 3,
//     y: 7
// }
// function printPoint(point){
//     point.x = 100
//     point.y = 200

//     console.log(point)
// }
// printPoint(point)
// console.log(point);

//firstclass
// function add(a,b){
//     return a+b
// }
// var sum = add
// console.log(sum(3,6));
// console.log(typeof sum);

// var arr = []
// arr.push(add)
// console.log(arr);
// console.log(arr[0](3,7));

// var obj = {
//     sum: add
// }
// console.log(obj);
// console.log(obj.sum(3,8));

// setTimeout(function (){
//     console.log('I have created');
// }, 1000)

//higher order
function add(a,b){
    return a+b
}
function manipulate(a,b,func){
    var c = a+b
    var d = a-b

    // function multiply(){
    //     var m = func(a,b)
    //     return c*d*m
    // }
    return function(){
        var m = func(a,b)
        return c*d*m
    }
}
var multiply = manipulate(3,5,add)

console.log(multiply());