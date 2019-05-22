let wheelElement,
	buttonElement,
	rotation = -10;

function onload() {
	wheelElement = document.getElementsByClassName("wheel")[0];
	buttonElement = document.getElementsByClassName("spin-btn")[0];
}

function spin() {
	buttonElement.disabled = "true";
	
	rotation -= random(3,6) * -360;
	rotation -= random(0,17) * -20;
	wheelElement.style.transform = "rotate(" + rotation + "deg)";
	
	setTimeout(() => {
		buttonElement.disabled = undefined;
	}, 7000);
}

function random(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}