$(document).ready(function () {
    let x = document.getElementById("burger-icon");

    x.addEventListener("click", myFunction);

    function myFunction() {
        let element = document.getElementById("mobile-menu__list");

        element.classList.toggle("open");

        x.classList.toggle("change");

        $('body').toggleClass('lock');

    }

    // $(document).ready(function () {
    //     $('.header__burger').click(function (event) {
    //         $('.header__burger,.header__menu').toggleClass('active');
    //         $('body').toggleClass('lock');
    //     });
    // });

    let isMobile = {

        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    let body = document.querySelector('body');

    if (isMobile.any()) {
        body.classList.add('touch');
        let arrow = document.querySelectorAll('.arrow');
        for (i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling;
            let subMenu = arrow[i].nextElementSibling;
            let thisArrow = arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function () {
                subMenu.classList.toggle('open');
                thisArrow.classList.toggle('active');
            });
        }
    } else {
        body.classList.add('mouse');
    }


});




