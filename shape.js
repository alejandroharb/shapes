var Shape = function(type) {
	this.type = type;
}

Shape.prototype.get_type  = function() {
	return "get type of shape"
};

module.exports = Shape;