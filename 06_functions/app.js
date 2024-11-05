const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let isGameRunning = false;

const getPlayerChoice = () => {
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

const getComputerChice = () => {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = (pChoice, cChoice) =>
	cChoice === pChoice
		? RESULT_DRAW
		: (cChoice === ROCK && pChoice === PAPER) ||
			(cChoice === PAPER && pChoice === SCISSORS) ||
			(cChoice === SCISSORS && pChoice === ROCK)
			? RESULT_PLAYER_WINS
			: RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
	if (isGameRunning) {
		return;
	}
	isGameRunning = true;
	console.log("Game is starting...");
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChice();
	const winner = getWinner(playerChoice, computerChoice);
	let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
	if (winner === RESULT_DRAW) {
		message = message + "had a draw.";
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + "won.";
	} else {
		message = message + "lost.";
	}
	alert(message);
	isGameRunning = false;
});
