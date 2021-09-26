console.log("test 1 2 3 4")

function fireDart() {
	const newDart = document.createElement("img");
	newDart.src = "./assets/elite-dart.png"
	newDart.classList.add("nerfdart");
	newDart.classList.add("dart-starting-position");

	const bloodSplatterElement = document.createElement("img");
	bloodSplatterElement.src = "./assets/bloodsplatter.png";
	bloodSplatterElement.classList.add("bloodsplatter");
	bloodSplatterElement.classList.add("hidden");
	setTimeout(function(){
		bloodSplatterElement.classList.remove("hidden");
		newDart.classList.remove("dart-starting-position");
	}, 300);
	setTimeout(function(){
		bloodSplatterElement.classList.add("fade");
	},350)


	const imageContainer = document.querySelector(".image-container");
	
	imageContainer.append(bloodSplatterElement);
	imageContainer.append(newDart);



}