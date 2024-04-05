// var rect = {
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log("I am a rectangle");
//         this.printProperties()
//         console.log(this);
//     },
//     printProperties: function(){
//         console.log("My Width is " + this.width);
//         console.log("My height is " + this.height);
//     }
// }
// rect.draw()
// // rect.height=100
// // rect.draw()

// function my(){
//     console.log(this);
//     rect.printProperties()
// }

// new my()
// // new my()
// var another = {
//     width: 20,
//     height: 40,
//     print: rect.printProperties
// }
// console.log(another.print);
// another.print()

//factory pattern
// var rect = {
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log("I am a rectangle");
//         this.printProperties()
//         console.log(this);
//     },
//     printProperties: function(){
//         console.log("My Width is " + this.width);
//         console.log("My height is " + this.height);
//     }
// }

// var createRect = function(width, height){
//     return {
//         width: width,
//         height: height,
//         draw: function(){
//             console.log("I am a rectangle");
//             this.printProperties()
//             console.log(this);
//         },
//         printProperties: function(){
//             console.log("My Width is " + this.width);
//             console.log("My height is " + this.height);
//         }
//     }
// }
// var rect1= createRect(3,4)
// rect1.draw()

// var rect2= createRect(5,6)
// rect2.draw()

//construtor
var Rectangle = function(width,height){
        this.width = width
        this.height = height
        this.draw = function(){
            console.log("I am a rectangle");
            this.printProperties()
            console.log(this);
        },
        this.printProperties= function(){
            console.log("My Width is " + this.width);
            console.log("My height is " + this.height);
        }
}

// var rect=new Rectangle()
// rect.draw()

//keyword
function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}

var rect4 = myNew(Rectangle, 33,44)
rect4.draw()