$(document).ready(function(){
    // Mobile Menu Icon
    $(document).ready(function(){
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
            $('.header-display').slideToggle();
        });
    });
   // Owl carousel
    $('.partner-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });
    // all testmonial gallery
    $('.all-testimonial-gallery').owlCarousel({
        loop:true,
        nav:false,
        margin: 40,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            575:{
                items:3
            },
            767:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
      // Owl carousel
    $('.industries').owlCarousel({
        loop:true,
        nav:false,
        margin: -1,
        center:true,
        // autoplay:true,
        responsive:{
            0:{
                items:2
            },
            767:{
                items:3
            },
        }
    });

    $('.test-popup-link').magnificPopup({
        type: 'iframe',
        // other options
    });
});

