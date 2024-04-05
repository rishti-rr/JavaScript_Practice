var persons = [
    {
        name: 'A',
        age: 19
    },
    {
        name: 'B',
        age: 24
    },
    {
        name: 'C',
        age: 16
    },
    {
        name: 'D',
        age: 28
    }
]

var arr = [2,4,3,6,4,8,9,0,2,1]

// arr.sort()
// console.log(arr);
// persons.sort()
// console.log(persons);

arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else {
        return 0
    }
})
console.log(arr);

persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})

console.log(persons);

var res1=arr.every(function(value){
    return value %2 ==0
})
console.log(res1);

var res2=arr.every(function(value){
    return value  >=0
})
console.log(res2);

var res3=arr.every(function(value){
    return value %2 ==1
})
console.log(res3);

var res4=arr.every(function(value){
    return value <0
})
console.log(res4);