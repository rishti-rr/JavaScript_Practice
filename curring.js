function add(a,b,c){
    return a+b+c
}
// add(1,2,3)
function curring(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

var result = curring(5)(2)(9)
console.log(result);