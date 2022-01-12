let score = 0;
let disableGame = false
function hitZombie() {
	if (!disableGame) {	
		const scoreElement = document.querySelector(".score")
		score = score + 100;
		scoreElement.innerHTML = score;
	}
}

let timer = 100;
const id = setInterval(function(){
	const timerElement = document.querySelector(".timer")
	timer = timer - 1
	timerElement.innerHTML = timer;
	if (timer <= 0){
		clearInterval(id);
		disableGame = true;
		const zombieElement = document.querySelector(".zombie")
		zombieElement.style.animation = "none"
		alert("You Lose your score is " + score)
	}
}, 1000)

function addTime(time) {
	timer += time;
}























