const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;

let isGameRunning = false;

const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		""
	).toUpperCase();
	if (
		selection !== ROCK &&
		selection !== SCISSORS &&
		selection !== SCISSORS
	) {
		alert(`Invalid choice! We choose ${DEFAULT_CHOICE} for you`);
		return ROCK;
	}
	return selection;
};

startGameBtn.addEventListener("click", function () {
	if (isGameRunning) {
		return;
	}
	isGameRunning = true;
	console.log("Game is starting...");
	const playerSelection = getPlayerChoice();
	console.log(playerSelection);
});
