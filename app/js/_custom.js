document.addEventListener("DOMContentLoaded", function() {

	// Service add switcher

	let switches = $('.service .onoffswitch-label');
	
	switches.on('click', function(){

		$( this ).children('.onoffswitch-switch').toggleClass('switch-active');
		$('.onoffswitch-inner').toggleClass('inner-active');
		
	})

});
