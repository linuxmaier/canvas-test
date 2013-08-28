//uses form to update myRect. Will be called by animation.js
function updateObject (myRect) {
	myRect.acceleration = getElementById("accel").value;
	myRect.friction = getElementById("frict").value;
	myRect.maxSpeed = getElementById("speed").value;
}
