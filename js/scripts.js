jQuery(document).ready(function($) {
	

	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 50 ){
            $("nav").addClass('sticky');
        } else {
        	$("nav").removeClass('sticky');
        }
	});

	// Side nav inititalization
	$(".button-collapse").sideNav();


	// Owl carousel inititalization for speakers list
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


    // Initializing Materialize Scroll-spy
    $(".scrollspy").scrollSpy();


});



// Script to play a video from youtube

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		playerVars: {
			'autoplay': 1,
			'loop': 1,
			'controls': 0,
			'autohide': 1,
			'showinfo': 0,
			'mute': 1,
			'modestbranding': 0,
			'playlist': 'rESBxsSdhnY'
		},
		videoId: 'rESBxsSdhnY',
		events: {
			'onReady': onPlayerReady
		}
	});

}

function onPlayerReady(event) {
	event.target.mute();
}

$(window).scroll(function() {
	var hT = $('#player').height(),
	wS = $(this).scrollTop();
	if (wS > hT) {
		player.pauseVideo();
	}
	else {
		player.playVideo();
	}
});