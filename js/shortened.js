

















$(document).ready(function() {
	var showChar = 50;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();
		if(content.length > showChar) {
			// set details box height -> customized by Abdulrahman
			$('.details p').css('height', 'fit-content');
			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);
			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';			
			$(this).html(html);
		}
	});

	// customized better code
	$(".morelink").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('less');
		if($(this).hasClass('less')){
			$(this).html('less');
		} else {
			$(this).html('more');
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
	
	// $(".morelink").click(function(){
	// 	if($(this).hasClass("less")) {
	// 		$(this).removeClass("less");
	// 		$(this).html(moretext);
	// 	} else {
	// 		$(this).addClass("less");
	// 		$(this).html(lesstext);
	// 	}
	// 	$(this).parent().prev().toggle();
	// 	$(this).prev().toggle();		
	// 	return false;
	// });
	
});