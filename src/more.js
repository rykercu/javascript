let score = 0;
function hitZombie() {
	console.log("Testing")
	const scoreElement = document.querySelector(".score")
	console.log(scoreElement)
	score += 100;
	scoreElement.innerHTML = score;
}
