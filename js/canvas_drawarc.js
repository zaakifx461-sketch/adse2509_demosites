// Initial setup (Required to make the code below work)
        let docCanvas = document.getElementById("my-canvas");
        let myContext = docCanvas.getContext("2d");

        // --- CODE FROM YOUR SCREENSHOT STARTS HERE ---

        // Variables to hold the arc's x & y coordinates
        // (Centers the arc based on canvas size)
        let xCoord = docCanvas.width / 2;
        let yCoord = docCanvas.height / 2;

        // Set the radius of the arc from the center point
        let rad = 70;

        // Set the start and end angles of the arc
        // Math.PI represents 180 degrees
        let startAngle = Math.PI * .9;
        let endAngle = Math.PI * 1.8;

        // Draw the arc with the above parameters
        // Note: It is best practice to beginPath() before drawing
        myContext.beginPath(); 
        myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);

        myContext.lineWidth = 8;
        myContext.strokeStyle = "#00b0f0"; // The cyan color code
        myContext.stroke();