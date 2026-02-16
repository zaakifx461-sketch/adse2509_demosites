let docCanvas = document.getElementById("my-canvas");
        let myContext = docCanvas.getContext("2d");

        // 1. Center the circle
        let xCoord = docCanvas.width / 2;
        let yCoord = docCanvas.height / 2;

        // 2. Set the radius
        let rad = 70;

        // 3. Set angles for a FULL CIRCLE
        // Start at 0
        let startAngle = 0; 
        // End at 2 * PI (which is 360 degrees)
        let endAngle = 2 * Math.PI;

        // 4. Draw
        myContext.beginPath();
        myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);

        myContext.lineWidth = 8;
        myContext.strokeStyle = "#00b0f0";
        myContext.stroke();