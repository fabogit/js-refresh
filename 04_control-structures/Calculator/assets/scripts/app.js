const defaultResult = 0;
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	if (
		(calculationType !== ADD &&
			calculationType !== SUBTRACT &&
			calculationType !== MULTIPLY &&
			calculationType !== DIVIDE) ||
		!enteredNumber
	) {
		return;
	}

	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === ADD) {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculationType === SUBTRACT) {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculationType === MULTIPLY) {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculationType === DIVIDE) {
		currentResult /= enteredNumber;
		mathOperator = "*";
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculateResult.bind(this, ADD));
subtractBtn.addEventListener("click", calculateResult.bind(this, SUBTRACT));
multiplyBtn.addEventListener("click", calculateResult.bind(this, MULTIPLY));
divideBtn.addEventListener("click", calculateResult.bind(this, DIVIDE));
