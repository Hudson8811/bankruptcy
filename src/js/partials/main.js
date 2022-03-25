$(document).ready(function() {
	$('.js-open-menu').on('click',function (){
		$('.mainmenu').addClass('active');
	});

	$(document).mouseup( function(e){
		var div = $( ".mainmenu" );
		if ( !div.is(e.target)
			&& div.has(e.target).length === 0 ) {
			div.removeClass('active');
		}
	});

	$('.to-top').on('click',function (){
		$(window).scrollTop(0);
	});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 400) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}
	});

	$('.form__input input,.form__input textarea').on('change, paste, keyup',function (){
		if ($(this).val().length > 0){
			$(this).addClass('filed');
		} else {
			$(this).removeClass('filed');
		}
	});
})