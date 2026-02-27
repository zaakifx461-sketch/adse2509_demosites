// JavaScript file to illustrate how to draw a rectangle on an HTML canvas

// Function to be called when the document loads
window.onload = function()
{
	// Get a reference to the canvas on the HTML document/page
	let docCanvas = document.getElementById('my-canvas');
	let myContext = docCanvas.getContext('2d');
	
	// Set up and draw the rectangle
	myContext.beginPath();
	// Set the rectangle's start points and its width and height
	myContext.rect(10,40,200,100);
	myContext.fillStyle = "#00b0f0";
	myContext.lineWidth = 5;
	myContext.strokeStyle = "#fff";
	myContext.stroke();
	myContext.fill();
	
	
	
}