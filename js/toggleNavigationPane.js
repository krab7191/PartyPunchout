
//For the navigation pane on education links page

$(window).load(function () {
	var leftNav = $('#leftNav');
	var isMoused = false;
	
	leftNav.mouseover(function () {
		isMoused = true;
		leftNav.css('opacity', '1.0');
		
		//if the div isn't being animated and it's not already slid out
		if ((!$(this).is(":animated")) && ($(this).css("width") == '0px')){
			$(this).animate({
				width: '+=250px'
			}, 600, function(){
				//animation complete.
				$("#navInstr").remove();
			});
		};
	});
	leftNav.mouseleave(function () {
			$(this).css("width", "0px");
	});
	
	function blink (time){
		if (!isMoused){
			leftNav.animate({
				opacity: '+=1'
			}, time, function(){
				//Done
				console.log("visible");
			});
		};
		if (!isMoused){
			leftNav.animate({
				opacity: '-=1'
			}, time, function() {
				if (isMoused){
					leftNav.css('opacity', '1.0');
				}
				blink(1200);
			});
		};
	};
	blink(1200);
});
