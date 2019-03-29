
// Homepage Slider
$('.basicslider').flexslider({
	slideshow: false, // Change to "true" to make the slides slide automatically
	animation: "slide",
	pauseOnHover: true,
	controlNav: true,
	directionNav: false,
	smoothHeight: true,
	start: function(slider) {
		$('body').removeClass('loading');
	}
});
