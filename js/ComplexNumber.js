// A Class representing a comlex number
function Complex(x, y) {
    this.x = x;
    this.y = y;
}

// Returns the modulus of the complex number
// sqrt(x^2 + y^2)
Complex.prototype.modulus = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}

// Returns the sum of this and another complex number
Complex.prototype.add = function(complexNumber) {
    return new Complex(this.x + complexNumber.x, this.y + complexNumber.y);
}

// Returns the product of this and another complex number
Complex.prototype.multiply = function(complexNumber) {
    var x = this.x * complexNumber.x - this.y * complexNumber.y;
    var y = 2 * this.x * this.y;
    return new Complex(x, y);
}

// Returns this complex number squared
Complex.prototype.square = function() {
    return this.multiply(this);
}

// Returns a string representing this complex number
Complex.prototype.toString = function() {
    return y >= 0 ? this.x + " + " + this.y + "i" 
                  : this.x + " - " + (-this.y) + "i"
}