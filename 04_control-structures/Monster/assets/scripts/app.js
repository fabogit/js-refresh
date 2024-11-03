const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Select max life value for player and monster", "100");
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let battleLog = [];
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
	let logEntry = {
		event,
		value,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth
	};
	if (event === LOG_PLAYER_ATTACK) {
		logEntry.target = "MONSTER";
	} else if (event === LOG_PLAYER_STRONG_ATTACK) {
		logEntry.target = "MONSTER";
	} else if (event === LOG_MONSTER_ATTACK) {
		logEntry.target = "PLAYER";
	} else if (event === LOG_PLAYER_HEAL) {
		logEntry.target = "PLAYER";
	}
	battleLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(LOG_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert("Bonus life used!");
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You won!");
		writeToLog(LOG_GAME_OVER, "Player WON", currentMonsterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("You lost!");
		writeToLog(LOG_GAME_OVER, "Monster WON", currentMonsterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert("A draw!");
		writeToLog(LOG_GAME_OVER, "A draw", currentMonsterHealth, currentPlayerHealth);
	}

	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(mode) {
	const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent = mode === MODE_ATTACK ? LOG_PLAYER_ATTACK : LOG_PLAYER_STRONG_ATTACK;
	// if (mode === MODE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
	// 	logEvent = LOG_PLAYER_ATTACK;
	// } else if (mode === MODE_STRONG_ATTACK) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
	// 	logEvent = LOG_PLAYER_STRONG_ATTACK;
	// }
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("Can't heal over max life");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;
	writeToLog(LOG_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function printLogHandler() {
	console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);