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
	}
	// Store second value
	if (button.id == "=") {
		secondNum = parseFloat(displayValue);

		const result = operate(operator, firstNum, secondNum);
		display.textContent = result;
	}
	// Clear display
	if (button.id == "clear") {
		display.textContent = "";
		displayValue = "";
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

// display value numbers gets added to this variable
let displayValue = "";

const populateDisplay = () => {
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			// button inputs to display on calc screen

			display.textContent += button.textContent;
			displayValue += button.id;
			storeNumbers(button, operator);
		});
	});
};
populateDisplay();
