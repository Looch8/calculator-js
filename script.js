// Query selectors
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

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

const storeNumbers = (button) => {
	// Store first value
	if (
		button.id == "add" ||
		button.id == "subtract" ||
		button.id == "multiply" ||
		button.id == "divide"
	) {
		firstNum = parseFloat(displayValue);
		displayValue = "";
		operator = button.id;
		console.log(`first num: ${firstNum}`);
		console.log(operator);
	}
	// Store second value
	if (button.id == "=") {
		secondNum = parseFloat(displayValue);
		console.log(`second num: ${secondNum}`);
		const result = operate(operator, firstNum, secondNum);
		display.textContent = result;
	}
};

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
console.log(operate());
// display value numbers gets added to this variable
let displayValue = "";

const populateDisplay = () => {
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			// button inputs to display on calc screen
			display.textContent += button.textContent;
			displayValue += button.id;
			storeNumbers(button, operator);
			console.log(`display value ${displayValue}`);
		});
	});
};
populateDisplay();

// Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
