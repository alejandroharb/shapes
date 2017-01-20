var Shape = require('./square.js');

var Triangle = function() {
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
};

Triangle.prototype = Object.create(Shape.prototype);
Tringle.prototype.constructor = Triangle;

module.exports = Shape;