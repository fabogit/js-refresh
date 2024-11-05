const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let isGameRunning = false;

const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		""
	).toUpperCase();
	if (selection !== ROCK && selection !== SCISSORS && selection !== SCISSORS) {
		alert(`Invalid choice! We choose ${DEFAULT_CHOICE} for you`);
		return ROCK;
	}
	return selection;
};

const getComputerChice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = function (pChoice, cChoice) {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === ROCK && pChoice === PAPER) ||
		(cChoice === PAPER && pChoice === SCISSORS) ||
		(cChoice === SCISSORS && pChoice === ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener("click", function () {
	if (isGameRunning) {
		return;
	}
	isGameRunning = true;
	console.log("Game is starting...");
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChice();
	const winner = getWinner(playerChoice, computerChoice);
	console.log(winner);
});
