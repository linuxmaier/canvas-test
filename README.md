canvas-test
===========

This repo contains material I'm using to test the HTML5 canvas feature with JS.

canvas-test-orig.html is just the simple canvas with a movable rectangle. It won't pass the canvas borders, but that's basically the height of its intelligence.

canvas-test-color-move.html is a page that contains a canvas, and a block whose color changes depending on the direction you move him. I made this because animating the character in prog-wiz is likely going to behave that way.

canvas-test-smooth.html is the difficult one I've been working on. The rectangle isn't moved by the keypresses, but instead acceleration is applied to it by the key presses and that acceleration affects its velocity, and thus its movement. All the bugs are ironed out now, and it appears to be working quite well after a complete rewrite. I also made it bounce off the walls, which is fun.

canvas-test.html is the main file of whatever I'm working on. It has tracked all the changes for the previously mentioned files.

The files in the jquery test folder are for an enhancement I'm working on for the canvas-test-smooth model. Visitors to the page will ideally be able to affect the values of physics-altering attributes of the rectangle, and perhaps its color. I've split the files out into a JS, CSS and HTML file to make it easier for me to follow. I'll likely use JQuery to interact with the user-inputted values, hence the name (plus trains me in jquery).
