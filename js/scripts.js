$(document).ready(function(){
	$('<a href="#" class="open-menu"><span></span><span></span><span></span> <p class="opened text-menu">Valmynd</p><p class="closed text-menu">Loka</p></a>').appendTo('#header > .container');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu, .text-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.bg-fader').click(function(){
		$('body').removeClass('menu-opened');
	});
	$('#main-nav li a').on("click", function (e) {
		$("body").removeClass("menu-opened");
			var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top;
		setTimeout(function() {
			$('html, body').stop().animate({
				scrollTop: offsetTop 
			}, 2000);
		 }, 300);
			return false;
	});
/* /Mobile menu */

/* Background image */
	$('.bg-img, .slider-item').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});
/* Slider*/
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: false,
		autospeed: 2000,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true
			}
		},
		]
	});
});
/* Equal-height */
function heightsEqualizer(selector) {
	var elements = document.querySelectorAll(selector),
	max_height = 0,
	len = 0,
	i;
	if ( (elements) && (elements.length > 0) ) {
		len = elements.length;
	for (i = 0; i < len; i++) {
			elements[i].style.height = '';
			if (elements[i].clientHeight > max_height) {
				max_height = elements[i].clientHeight;
			}
		}
	for (i = 0; i < len; i++) {
		elements[i].style.height = max_height + 'px';
		}
	}
}
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', function() {
			heightsEqualizer('.js-equal-height');
		});
		window.addEventListener('resize', function(){
			heightsEqualizer('.js-equal-height');
		});
	};
setTimeout(function () {
	heightsEqualizer('.js-equal-height');
}, 5000);

