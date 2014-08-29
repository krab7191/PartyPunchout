
//For the navigation pane on education links page

$(window).load(function () {
	$("#leftNav").mouseover(function () {
		//if the div isn't being animated and it's not already slid out
		if ((!$(this).is(":animated")) && ($(this).css("width") == '0px')){
			$(this).animate({
				width: '+=250px'
			}, 600, function(){
				//animation complete.
			});
		};
	});
	$("#leftNav").mouseleave(function () {
			$(this).css("width", "0px");
	});
});
