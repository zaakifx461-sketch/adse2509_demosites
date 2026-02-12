//javascript to get and display local storage values 

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
    }
    else 
        alert("sorry ,you browser doesnt support local storage .\nPlease try a newer version or switch  to a different browser.");
}
//Automatically call printLocalStorage() in display page
document.addEventListener("DOMContentLoaded",function(){
    if(document.getElementById('contentDiv'))
        printLocalStorage();
});