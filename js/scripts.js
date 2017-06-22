jQuery(document).ready(function($) {
	

	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 100 ){
            $("nav").addClass('sticky');
        } else {
        	$("nav").removeClass('sticky');
        }
	});

});