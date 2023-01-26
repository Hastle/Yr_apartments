$(document).ready(function() {

	wow = new WOW({
		mobile: false
	})

	wow.init();

	$("#feedback-1").submit(function() {
		var response = grecaptcha.getResponse(captcha);
		if (response.length == 0) {
			alert("Не пройдена captcha, попробуйте еще раз.")
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.close();
				alert("Ваше сообщение успешно отправено!");
				$("#feedback-1")[0].reset();
				grecaptcha.reset();
				setTimeout(function() {
					$.fancybox.close();
				}, 1000);
			});
		}
		return false;
	});

	$(".scroll").mPageScroll2id();


	$('.popup-modal').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});

	$('[data-fancybox="images"]').fancybox({
		transitionEffect: "slide",
		loop: false
	});

	$('[data-fancybox]').fancybox({
		
	});

	$('.popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
    });

	var slider = tns({
		container: '.slider',
		items: 3,
		swipeAngle: true,
		controls: true,
		slideBy: 'page',
		speed: 700,
		arrowKeys: true,
		mouseDrag: true,
		autoplay: false,
		nav: true,
		navPosition: 'bottom',
		prevButton: '.slider-prev',
		nextButton: '.slider-next',
	});

	// $('.slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	asNavFor: '.slider',
	// 	speed: 450,
	// 	dots: true,
	// 	cssEase: 'linear',
	// 	focusOnSelect: true,
	// 	nextArrow: '<button type="button" class="slider-next"><i class="fa fa-arrow-right"></i></button>',
	// 	prevArrow: '<button type="button" class="slider-prev"><i class="fa fa-arrow-left"></i></button>'
	// });

});