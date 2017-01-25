var Shape = require('./shape.js');

var Pentagon = function(type) {
}


Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;