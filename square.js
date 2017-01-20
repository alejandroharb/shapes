var Shape = require('./shape.js');

var Square = function(side1, side2, side3, side4) {
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

//Square constructor inherits the Shape prototype
Square.prototype = Object.create(Shape.prototype);
//assigns prototype of Square to it's proper constructor
Square.prototype.constructor = Square;

module.exports = Square;