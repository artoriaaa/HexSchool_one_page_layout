$(document).ready(function() {
	$('.upmenu>li').hover(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).find('ul').stop().slideToggle(600);
	});

	
});