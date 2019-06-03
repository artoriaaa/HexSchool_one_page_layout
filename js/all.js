$(document).ready(function() {
	$('.upmenu>li').hover(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).find('ul').stop().slideToggle(600);
	});

	//top效果
	$('.top a').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0,
		}, 800 );
	});










//lightbox
 lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop': 200,
  'showImageNumberLabel':false
 })
//swiper
 //初始化
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect:'coverflow',
    speed:1500,
    autoplay:{
    	delay:3000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      dynamicBullets: true,
    },
  })
});