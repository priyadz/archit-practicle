document.addEventListener('DOMContentLoaded', function() {
    
        var menuopen = document.getElementsByClassName("menuBtn");
        var mainmenu = document.getElementsByClassName("mainNav");

        menuopen[0].addEventListener('click', function() {
            mainmenu[0].classList.toggle("menuOpen");
            setTimeout(function(){ mainmenu[0].classList.toggle("showLinks"); }, 500);
          });

        

        

 });