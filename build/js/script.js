$(document).ready(function () {
    let x = document.getElementById("burger-icon");

    x.addEventListener("click", myFunction);

    function myFunction() {
        let element = document.getElementById("mobile-menu__list");

        element.classList.toggle("open");

        x.classList.toggle("change");

        $('body').toggleClass('lock');

    }

});




