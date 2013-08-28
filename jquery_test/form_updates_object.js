//uses form to update myRect. Will be called by animation.js
function updateObject (myRect) {
	myRect.acceleration = document.getElementById("accel").value;
	myRect.friction = document.getElementById("frict").value;
	myRect.maxSpeed = document.getElementById("speed").value;
}
