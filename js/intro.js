// JS document to demonstrate the if... else decision construct.
// Variable to hold the id of the container
let container = document.getElementById("container");
// create a dib that will hold the contents of this JS document
let selectionDiv = document.createElement('div');
let age = 20, votingStatus = "";
// Assign a voting status based on users age
if (age>= 18)
    votingStatus = `You are ${age} years old, hence can vote.`;
else
    votingStatus = `Unfortunetly you are ${age} and hence cannot vote.`;
// Add the voting status message to the selectionDiv
selectionDiv.innerHTML = votingStatus;
// Add the contents of the selection div to the container div
container.appendChild(selectionDiv);
 