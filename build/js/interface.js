$(document).ready(function() {
	flexibility(document.documentElement);
	//ACCORDEON
	$("body").on("click", ".accordeon__link", function(e){
		e.preventDefault();
		$(this).parents('.accordeon__item').toggleClass('active');
		$(this).next('.accordeon__info').slideToggle();
	});
	//MAIN SLIDER
	if ($('.top-slider').length>0) {
		$('.top-slider').slick({
			// infinite: false,
			slidesToShow: 1,
			fade: true,
			lazyLoad: 'progressive',
			dots:false,
			useTransform:true,
			equalizeHeight: false,
			"accessibility": false,
			adaptiveHeight: true,
			nextArrow: $('.top-slider__right'),
  			prevArrow: $('.top-slider__left'),
  			responsive: [
			    {
			      	breakpoint: 768,
			      	settings: {
				        infinite: false,
						slidesToShow: 1,
						fade: true,
						lazyLoad: 'progressive',
						useTransform:true,
						"accessibility": false,
						nextArrow: $('.top-slider__right'),
			  			prevArrow: $('.top-slider__left'),
			  			dots:false,
			  			arrows:true,
			    	}
			    },
		    ]
		});
	}
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions



