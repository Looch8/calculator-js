const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
	return a * b;
};

const divide = (a, b) => {
	return a / b;
};

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
let firstNum;
let secondNum;
let operator;
const operate = (operator, firstNum, secondNum) => {
	if (operator == "add") {
		return add(firstNum, secondNum);
	} else if (operator == "subtract") {
		return subtract(firstNum, secondNum);
	} else if (operator == "multiply") {
		return multiply(firstNum, secondNum);
	} else if (operator == "divide") {
		return divide(firstNum, secondNum);
	} else {
		return null;
	}
};

console.log(operate("divide", 10, 2));
