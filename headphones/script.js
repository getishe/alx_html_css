document.addEventListener("DOMContentLoaded", function(){
    const humburger = document.getElementById("humburger");
    const navlinks = document.getElementById("nav-links");
 
    humburger.addEventListener("click", function() {
        humburger.classList.toggle("active");
        navlinks.classList.toggle("active");
    });
 

});