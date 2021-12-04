let numberDartLeft = 18;

function fireDart() {
	if (numberDartLeft > 0) {

		playShotNerfSound();
	
		const newDart = document.createElement("img");
		newDart.src = "./assets/elite-dart.png"
		newDart.classList.add("nerfdart");
		newDart.classList.add("dart-starting-position");

		const bloodSplatterElement = document.createElement("img");
		bloodSplatterElement.src = "./assets/bloodsplatter.png";
		bloodSplatterElement.classList.add("bloodsplatter");
		bloodSplatterElement.classList.add("hidden");
		setTimeout(function(){
			playRandomZombieSound()
			bloodSplatterElement.classList.remove("hidden");
			newDart.classList.remove("dart-starting-position");
		}, 300);
		setTimeout(function(){
			bloodSplatterElement.classList.add("fade");
		},350)


		const imageContainer = document.querySelector(".image-container");
		
		imageContainer.append(bloodSplatterElement);
		imageContainer.append(newDart);

		numberDartLeft = numberDartLeft - 1;



	} 
		


}

function reload() {
	console.log("is reloading");
	numberDartLeft = 18;
	playReloadSound();

}

document.onkeypress = function (e) {
    e = e || window.event;
    
    // when you hit r it reloads after 18 shots
    if (e.keyCode  === 114) {
		console.log(e.keyCode);
		reload()
    } 
};

function playShotNerfSound(){
	const audio = new Audio("./assets/nerfshot3.wav");

	audio.play();
}

function playReloadSound(){
	const audio = new Audio("./assets/reload.wav");

	audio.play();

}
function playRandomZombieSound(){
	const audio = new Audio(`./assets/zombieSound${getRandomNumberBetween(1, 7)}.wav`);

	audio.play();

}
function getRandomNumberBetween(startingNum, endingNum){
	var difference = endingNum - startingNum
	return Math.round((Math.random() * difference) + startingNum, 10);
}

