var Shape = require('./shape.js');
var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js');

var newTriangle = new Triangle("triangle");
var newSquare = new Square("square");
var newPent = new Pentagon("pentagon");


console.log("============ Constructor Method ===============");
console.log(newTriangle.get_type());
console.log('------------');
console.log(newSquare.get_type());
console.log('------------');
console.log(newPent.get_type());
console.log('------------');

console.log("============ Instances ===============");
console.log("triangle object instanceof Triangle: ");
console.log(newTriangle instanceof Triangle);
console.log("triangle object instanceof Shape: ");
console.log(newTriangle instanceof Shape);
console.log('------------');
console.log("square object instanceof Square: ");
console.log(newSquare instanceof Square);
console.log("square object instanceof Shape: ");
console.log(newSquare instanceof Shape);
console.log('------------');
console.log("pentagon object instanceof Pentagon: ");
console.log(newPent instanceof Pentagon);
console.log("pentagon object instanceof Shape: ");
console.log(newPent instanceof Shape);
console.log('------------');