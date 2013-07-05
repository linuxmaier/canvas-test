//draws rectangle
function drawRect (myRect, ctext) {
	ctext.beginPath();
	ctext.rect(myRect.x, myRect.y, myRect.width, myRect.height); //gets dimensions from myRect
	ctext.fillStyle = myRect.fillStyling; //pulls inner color from myRect
	ctext.fill();
	ctext.lineWidth = myRect.borderWidth; //sets border width from myRect
	ctext.strokeStyle = "black";
	ctext.stroke();
}

function applyAccel (velocity, maxSpeed, dimension, acceleration, time) {
	var newVel = 0;	

	//determines newVel for x based on keypress
	if (dimension == "x") {
		if (keys[37]) {
			newVel += acceleration * time * -1;
		}
		if (keys[39]) {
			newVel += acceleration * time;
		}
	}
	if (dimension == "y") {
		if (keys[38]) {
			newVel += acceleration * time * -1;
		}
		if (keys[40]) {
			newVel += acceleration * time;
		}
	}
	
	//enforce max speed of 20 or -20
	if (velocity + newVel > maxSpeed) {
		return maxSpeed;
	}
	else if (velocity + newVel < -maxSpeed) {
		return -maxSpeed;
	}
	else return velocity + newVel;
}

function animate (myRect, ctext, tground, startTime) {
	var time = (new Date()).getTime() - startTime;
	var calcTime = time / 100;
	var acceleration = 10;
	var maxSpeed = 50;
	var borderEAbsorb = .75;
	
	//sets Velocity
	if (keys[37] || keys[39]) {
		myRect.xVelocity = applyAccel(myRect.xVelocity, maxSpeed, "x", acceleration, calcTime);
	}
	else {
		myRect.xVelocity *= myRect.friction;
	}
	if (keys[38] || keys[40]) {
		myRect.yVelocity = applyAccel(myRect.yVelocity, maxSpeed, "y", acceleration, calcTime);
	}
	else {
		myRect.yVelocity *= myRect.friction;
	}
	
	//rounds to 0
	if (myRect.xVelocity > -1 && myRect.xVelocity < 1) myRect.xVelocity = 0;
	if (myRect.yVelocity > -1 && myRect.yVelocity < 1) myRect.yVelocity = 0;

	myRect.x += myRect.xVelocity * calcTime;
	//checks right border
	if (myRect.x > tground.width - myRect.width - myRect.borderWidth / 2) { 
		myRect.x = tground.width - myRect.width - myRect.borderWidth / 2;
		myRect.xVelocity *= -borderEAbsorb;
	}
	//checks left border
	if (myRect.x < 0) {
		myRect.x = 0;
		myRect.xVelocity *= -borderEAbsorb;
	}

	myRect.y += myRect.yVelocity * calcTime;
	//checks bottom border
	if (myRect.y > tground.height - myRect.height - myRect.borderWidth / 2) {
		myRect.y = tground.height - myRect.height - myRect.borderWidth / 2;
		myRect.yVelocity *= -borderEAbsorb;
	}
	//checks top border
	if (myRect.y < 0) {
		myRect.y = 0;
		myRect.yVelocity *= -borderEAbsorb;
	}

	//clears canvas
	ctext.clearRect(0, 0, tground.width, tground.height);
	//draws new myRect location
	drawRect(myRect, ctext);
	
	time = (new Date()).getTime();
	requestAnimationFrame(function() {animate(myRect, ctext, tground, time)});
}