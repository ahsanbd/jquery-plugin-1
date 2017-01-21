
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top li").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top li").removeClass("top-nav-collapse");
//     }
	
// });

 $(window).scroll(function() { 
   			 $(".navbar-custom").removeClass("menutop");
			    var scroll = $(window).scrollTop();
			    if (scroll > 50) {
                    $(".navbar-custom").addClass("menutop"); 
				}
});
	
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
 /*
$('.navbar-custom ul li').click(function(e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});
*/