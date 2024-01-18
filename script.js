/* $(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 5000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });
*/

// counter section start
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 3468,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 557,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 4379,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 32,duration: 2500});

// counter section end




// owl carousel section start
    $('.owl-carousel').owlCarousel({
        rtl:true,
        ltr: true,
        loop:true,
        margin:10,
        autoplay:true,
        //autoplayTimeout:5000,
       // nav:true,
        responsive:{
            0:{
                items:1
            },
            700: {
                items:1
            },
           992 :{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
    // owl carousel section end
