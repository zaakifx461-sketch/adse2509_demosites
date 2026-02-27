// JavaScript file to illustrate how to draw a rectangle on an HTML canvas

// Function to be called when the document loads
window.onload = function()
{
	// Get a reference to the canvas on the HTML document/page
	let docCanvas = document.getElementById('my-canvas');
	let myContext = docCanvas.getContext('2d');
	
	// Set up and draw the image
	// Create an image object
	let myImage = new Image();
	// Set the starting x and y positions
	let xPos = 50, yPos = 15;
	// Set the image's height and width
	let imageWidth = 150, imageHeight = 150;
	// Set the image's source
	myImage.src = "../../images/html5_logo.png";
	
	// Funciton to load the image
	myImage.onload = function()
	{
		myContext.drawImage(myImage,xPos,yPos,imageWidth,imageHeight)
	};
	
	
	
	
	
	
}