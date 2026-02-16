/* //javascript to get and display local storage values 

//variables to store local storage details 
let localStorageDetails = "";
function storeDetails(event){
    event.preventDefault(); //prevent the form from submitting 
    

    //get the form values  
    const username = document.getElementById('txtUsername').value;
    const email = document.getElementById('txtEmail').value;
    //store the values in local storage
    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
      
    //redirect to the page to display the user's details 
    window.location.href = 'js-localstorage.html';

}
function deleteDetails(){
//clear the localstorage values
localStorage.removeItem('username');
localStorage.removeItem('email');
}
function printLocalStorage(){

    let contentDiv = document.getElementById('contentDiv');

    //check whether the browser supports localStorage 
    if(('localStorage' in window) && window ['localStorage'] !== null)
    {
        //check that username and email are set 
        if(localStorage.getItem('username') !== null && localStorage.getItem('email') !== null)
            {
                let username = localStorage.getItem('username');
                let useremail = localStorage.getItem('email');
            localStorageDetails  += `<p>User&rsquo;s Name: <b>${username}</b><br>email address : $${useremail}</br></p>`;

        }
        else 
            localStorageDetails += `<p>The Username and email addresses have been cleared or were not set.</p>`;
     contentDiv.innerHTML = localStorageDetails;
    } 
   
    else 
        alert("sorry ,you browser doesnt support local storage .\nPlease try a newer version or switch  to a different browser.");
}
//Automatically call printLocalStorage() in display page
document.addEventListener("DOMContentLoaded",function(){
    if(document.getElementById('contentDiv'))
        printLocalStorage();
}); */// Define variable but reset it inside the function to avoid duplication
   function storeDetails(event) {
            event.preventDefault(); // Stop page reload

            // 1. Get values
            const username = document.getElementById('txtUsername').value;
            const email = document.getElementById('txtEmail').value;

            // 2. Save to Local Storage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);

            alert("Success! Data saved.");

            // 3. Update the display immediately
            printLocalStorage();
        }

        function deleteDetails() {
            // Remove items from memory
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            
            alert("Data deleted from storage.");
            
            // Refresh display to show it's gone
            printLocalStorage();
        }

        function printLocalStorage() {
            const contentDiv = document.getElementById('contentDiv');
            let outputHTML = ""; // Create a fresh variable every time

            if (('localStorage' in window) && window['localStorage'] !== null) {
                
                // Check if data exists
                if (localStorage.getItem('username') && localStorage.getItem('email')) {
                    const username = localStorage.getItem('username');
                    const useremail = localStorage.getItem('email');
                    
                    outputHTML = `
                        <p>
                            <strong>User's Name:</strong> ${username}<br>
                            <strong>Email Address:</strong> ${useremail}
                        </p>`;
                } else {
                    outputHTML = `<p style="color: #777;"><em>No data found in Local Storage.</em></p>`;
                }
                
                contentDiv.innerHTML = outputHTML;
            } else {
                alert("Your browser does not support Local Storage.");
            }
        }

        // Initialize on page load
        document.addEventListener("DOMContentLoaded", function() {
            printLocalStorage();
        });