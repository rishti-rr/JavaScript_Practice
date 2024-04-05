// function greet(msg){
// function greetings(name){
//     return msg + ',' + name + '!'
// }
// return greetings
// }
// var gm = greet('Good Morning')
// var gn = greet('Good Night')
// var hl = greet('Hello')
// // console.log(typeof gm);
// var msg=gm('Rishti Rahman Rafin')
// console.log(msg);
// console.log(gn('Rishti'));
// console.log(hl('Rafin'));


function base(b){
  return  function(n){
        var result = 1
        for(i=0; i<b; i++){
            result *= n
        }
        return result
    }
}
var base10 =base(10)
console.log(base10(2));

var base5 = base(5)
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));