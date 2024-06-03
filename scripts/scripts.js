$(document).ready(function() {
	
	var viewportWidth = $(window).width();
	
	if(viewportWidth > 540){
	
		$('#slideshow').uncomment();
		
		$('#slideshow').cycle({
			fx: 'fade', 
			pause:   1, 
			speed: 1500,
			timeout:  1500 
		});	
	
	}else{
		if($('body').hasClass('bar') || $('body').hasClass('contactus') || $('body').hasClass('aboutus') || $('body').hasClass('home') || $('body').hasClass('restaurant')){
			var imageTag = '<img src="images/mobile-static-bg-default.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('wine')){
			var imageTag = '<img src="images/mobile-static-bg-wine.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('appetisers')){
			var imageTag = '<img src="images/mobile-static-bg-appetisers.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('beverages')){
			var imageTag = '<img src="images/mobile-static-bg-beverages.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('desserts')){
			var imageTag = '<img src="images/mobile-static-bg-desserts.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('dimsum')){
			var imageTag = '<img src="images/mobile-static-bg-dimsum.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
		if($('body').hasClass('maincourses')){
			var imageTag = '<img src="images/mobile-static-bg-maincourses.jpg" class="bgM" />';
			$('#slideshow').append(imageTag);
		}
	}

});