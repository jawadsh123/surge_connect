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


    // resize video on window resize
	$(window).resize(function(){
		sizeTheVideo();
	});


});



// Script to play a video from youtube
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'rESBxsSdhnY',
		playerVars: {
			'wmode': 'opaque',
			'autoplay': 1,
			'controls': 0,
			'showinfo': 0,
			'modestbranding': 1,
			'rel': 0,
		},
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(event) {
	sizeTheVideo();
	event.target.mute();
	event.target.playVideo();
}


function sizeTheVideo(){
	// Aspect ratio of a 1080p video
	var aspectRatio = 1.78;

	var video = $('.player_wrapper iframe');
	var videoHeight = video.outerHeight();
	var newWidth = videoHeight*aspectRatio;
	var halfNewWidth = newWidth/2;

	//Define the new width and centrally align the iframe
	video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
}