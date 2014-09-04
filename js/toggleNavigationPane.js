
//For the navigation pane on education links page

$(window).load(function () {
	var leftNav = $('#leftNav');
	var leftLink = $("#leftNav a");
	var isMoused = false;
	
	leftNav.mouseover(function () {
		isMoused = true;
		leftNav.css('opacity', '1.0');
		
		//if the div isn't being animated and it's not already slid out
		if ((!$(this).is(":animated")) && ($(this).css("width") == '0px')){
			$(this).animate({
				width: '+=275px'
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
	
	leftLink.click(function(event){
		var target = event.target.href;

		target = target.substr(target.lastIndexOf('#'), target.length);

		var DOMtarget = $(target);

		DOMtarget.css('background-color', 'rgba(255,0,0,.5)');
		
		setTimeout(function(){
			DOMtarget.animate({
				backgroundColor: "rgba(255,0,0,0)"
			}, 1000, function() {
				//Fade out done!
			});
		}, 1000);
		
		$("#leftNav").css("width", "0px");
	});
	
});

