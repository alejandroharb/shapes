var Shape = function(type) {
    this.type = type
}

Shape.prototype.get_type  = function(type) {
    //return constructor
    return this.constructor;
};

//square, triangle, and pentagon constructors inherit Shape prototype





module.exports = Shape;