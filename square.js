var Shape = require('./shape.js');


var Square = function(type) {
	this.type = type
}

//Square constructor inherits the Shape prototype

//assigns prototype of Square to it's proper constructor


Square.prototype = Object.create(Shape.prototype);
//reassign constructor to its original constructor
Square.prototype.constructor = Square;

module.exports = Square;