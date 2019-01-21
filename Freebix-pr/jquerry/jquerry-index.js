$('.slick-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


    $(document).ready(function(){
	  var allPanels = $('.accordion > .content-text-acordion');
	  $('.accordion > .title-acordion > a').click(function() {
	    allPanels.slideUp();
	    $(this).parent().next().slideDown();
	    return false;
	  });
	})

	 $(document).ready(function(){
	  var allButtons = $('.accordion > .title-acordion');
	  $('.accordion > .title-acordion > a').click(function() {
	    allButtons.css('background-position','right 5px');
	     $(this).parent().css('background-position','right -80px');
	     return false;
	   
	  });
	})

	 $(document).ready(function() {
    	$('.menu-items').click(function() {
        	$('.menu-options').toggleClass('visible');
        	
    	});
	});


