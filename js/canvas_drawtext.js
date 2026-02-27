// JavaScript file to illustrate how to draw a rectangle on an HTML canvas

// Function to be called when the document loads
window.onload = function()
{
	// Get a reference to the canvas on the HTML document/page
	let docCanvas = document.getElementById('my-canvas');
	let myContext = docCanvas.getContext('2d');
	
	// Set up and draw the text
	// Choose the font family and its size
	myContext.font = "28pt Verdana";
	myContext.fillStyle = "#f00";
	myContext.lineWidth = 2;
	myContext.strokeStyle = "#ccc";
	myContext.strokeText("HTML5 Canvas",20,85);
	myContext.fillText("HTML5 Canvas",20,85);
	
	
	
}