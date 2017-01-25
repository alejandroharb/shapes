var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js');

var Shape = function(type) {
    this.type = type
}

Shape.prototype.get_type  = function(type) {

    var that = this;
    //return constructor
    console.log("==========================");
    return console.log(this.constructor);
};
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

var newTriangle = new Triangle("triangle");
var newSquare = new Square("square");
var newPent = new Pentagon("pentagon");

console.log(newTriangle.get_type());

console.log(newSquare.get_type());

console.log(newPent.get_type());

module.exports = Shape;