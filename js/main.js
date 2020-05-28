/* =================================
------------------------------------
	Template Name: Industry.INC 
	Description: Industry.INC HTML Template
	Author: colorlib
	Author URI: https://www.colorlib.com/
	Version: 1.0
	Created: colorlib
 ------------------------------------
 ====================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.site-nav-menu > ul').slicknav({
		appendTo:'.header-section',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>',
		allowParentLinks: true
	});

	$('.slicknav_nav').append('<li class="search-switch-warp"><button class="search-switch"><i class="fa fa-search"></i></button></li>');

	/*------------------
		PORTFOLIO
	--------------------*/
	
  var contentWayPoint = function() {
	var i = 0;
	$('.ftco-animate').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
			
			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .ftco-animate.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeIn') {
							el.addClass('fadeIn ftco-animated');
						} else if ( effect === 'fadeInLeft') {
							el.addClass('fadeInLeft ftco-animated');
						} else if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight ftco-animated');
						} else {
							el.addClass('fadeInUp ftco-animated');
						}
						el.removeClass('item-animate');
					},  k * 50, 'easeInOutExpo' );
				});
				
			}, 100);
			
		}

	} , { offset: '95%' } );
};

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		 gallery: {
		  enabled: true,
		  navigateByImgClick: true,
		  preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
		  verticalFit: true
		},
		zoom: {
		  enabled: true,
		  duration: 300 // don't foget to change the duration also in CSS
		}
	  });

	  



	/*------------------
		Search model
	--------------------*/
	$('.search-switch').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay: true,
		items: 1,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});
   

	/*------------------
		Brands Slider
	--------------------*/
	$('#client-carousel').owlCarousel({
		nav: false,
		loop: true,
		margin:20,
		autoplay: true,
		responsive:{
			0:{
				items:2,
				margin: 0
			},
			600:{
				items:3
			},
			800:{
				items:4
			},
			992:{
				items:4
			},
			1200:{
				items:5
			},
		}
	});

	/*---------------------
		Testimonial Slider
	----------------------*/
	$('.testimonial-slider').owlCarousel({
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		items: 1,
	});

	/*------------------
		Image Popup
	--------------------*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	
	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

	/*------------------
		Progress Bar
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});

	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).prepend('<div class="'+ cpid +' circle-warp"><h2>'+ cpvalue +'%</h2></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 112,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 112,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);
