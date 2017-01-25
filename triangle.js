var Shape = require('./square.js');

var Triangle = function(one, two, three) {
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;


module.exports = Shape;