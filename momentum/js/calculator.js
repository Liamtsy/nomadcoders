const calculator = {
	plus: function (a, b) {
		return a + b;
	},
	minus: function (a, b) {
		return a - b;
	},
	multiply: function (a, b) {
		return a * b;
	},
	divide: function (a, b) {
		return a / b;
	},
	square: function (a) {
		return a * a;
	},
	power: function (a, b) {
		return Math.pow(a, b);
		// return a ** b;
	}
};
console.log(calculator);
console.log(calculator.plus(5, 10));
console.log(calculator.minus(8, 2));
console.log(calculator.multiply(8, 6));
console.log(calculator.divide(9, 3));
console.log(calculator.square(10));
