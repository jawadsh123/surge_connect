jQuery(document).ready(function($) {
	

	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 100 ){
            $("nav").addClass('sticky');
        } else {
        	$("nav").removeClass('sticky');
        }
	});


    $(".speaker_list").owlCarousel({
    loop:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

});