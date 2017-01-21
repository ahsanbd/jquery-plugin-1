// Isotope activation js codes

jQuery(document).ready(function($){
   
    

     // Activate isotope in container
 
    $(".portfolio_items").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows',
    });




    // parallax scrollY

       $('.testimonial_bg').scrolly({bgParallax: true});



    
    // Add isotope click function
    
    $('.portfolio_filter li').click(function(){
        $(".portfolio_filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });






// wow.min.js



    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();





    
});