 //javascript file to illustrate how to draw a line on an HTML canvas 
//Function to be called when the document loads 
window.onload = function() {
            // 1. Get reference to the canvas element
            let docCanvas = document.getElementById('my-canvas');

            // 2. Get the 2D drawing context (the "toolset")
            let myContext = docCanvas.getContext('2d');

            
            myContext.beginPath(); 
            myContext.moveTo(50, 100);

            // 5. Draw a line to the ending point (x, y)
            myContext.lineTo(250, 50);

            // 6. Define the style
            myContext.lineWidth = 5;
            myContext.strokeStyle = "#fff"; // White color

            myContext.stroke();
        }