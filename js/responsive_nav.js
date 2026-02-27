//javascript document to handle the 'click' event on the humburger on the icon in our site
(function()
{
    let menuToggle = document.getElementById('menu-toggle');
    let navMenu = document.getElementById('nav-menu');

    if(menuToggle && mavMenu)
    {
        menuToggle.addEventListener('click',function()
        {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }          
    
    );
    //close the menu when clicking outside
    document.addEventListener('click'), function(event)
    {
        if(!navMenu.contains(event.target) && !menuToggle.contains(EventSource.target))
        {
         navMenu.classList.remove('active');
         menuToggle.classList.remove('active');
        }
    }
    }
})(); 


