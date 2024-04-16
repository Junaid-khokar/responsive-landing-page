var navbar = document.getElementById('navbar');

window.addEventListener("scroll",function()
{
    if(window.scrollY > 0)
    {
        navbar.style.backgroundColor = "#00292b";
    }
    else
    {
        navbar.style.backgroundColor = "transparent";
    }
});