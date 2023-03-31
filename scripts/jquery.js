$(document).ready(function () {

    //sticky-nav
    var waypoint = new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function (direction) {
            if (direction == "down") {
                $("nav").attr("id", "sticky-nav");
            } else {
                $("nav").removeAttr("id");
            }
        },
        offset: 80
    });

    //buttons and nav links click
    $(".button-order").click(function () {
        $("html, body").animate({
            scrollTop: $("#how-to-order-section").offset().top
        }, 1000);
    });

    $(".button-more").click(function () {
        $("html, body").animate({
            scrollTop: $("#restaurant-description").offset().top
        }, 1000);
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //animation
    var waypoint = new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function (direction) {
            $(".anim1").addClass("animate__animated animate__fadeIn");
        },
        offset: 80
    });

    var waypoint = new Waypoint({
        element: document.getElementById('cities-section'),
        handler: function (direction) {
            $(".anim2").addClass("animate__animated animate__fadeInRight");
        },
        offset: 80
    });

    var waypoint = new Waypoint({
        element: document.getElementById('how-to-order-section'),
        handler: function (direction) {
            $(".anim3").addClass("animate__animated animate__fadeInUp");
        },
        offset: 80
    });

    var waypoint = new Waypoint({
        element: document.getElementById('header-text'),
        handler: function (direction) {
            if (direction == "up") {
                $(".anim4").addClass("animate__animated animate__shakeX");
            } else {
                $(".anim4").removeClass("animate__animated animate__shakeX");
            }
        },
        offset: 60
    });

});