



var language = '0';
var urlPath = window.location.pathname;
var imageArray;

$(window).load(function () {
	setMouseovers();
	initLangSwitch();
	appendMediaLinks();
	slideTop();
});

var preloadMediaImages = new function (){
	var me = this;
	
	var $loader;
	var currImage = 0;
	
	me.init = function (){
		var s = [];
		
		for (vari=1; i<5; i++) {
			s.push('img/' + i + '.png');
		}
		$loader = $("#loadingBar");
		$loader.max = s.length;
		imageCache.pushArray(s, loadImageEvent, loadAllEvent);
	};
	function loadImageEvent (){
		var val = parseInt($loader.attr('value'));
		var incr = 100 / s.length;
		val += incr;
		$loader.attr('value', val);
	};
	function loadAllEvent () {
		$('body').addClass('loaded');
		showImage(1, true);
	};
	
	
};

var appendMediaLinks = function () {
	$("body").append("<div id='mediaLinks'><img id='slideTop' src='../img/5.png' /></div>");
	$("#mediaLinks").append("<div id='mediaLinksSlider'><a href='https://www.facebook.com/partypunchout?ref=br_tf'><img src='../img/1.png' /></a><a href='https://twitter.com/PartyPunchout'><img src='../img/2.png' /></a><a href='https://www.youtube.com/channel/UCSYtgNVwkavCbPsEwz1UYNw'><img src='../img/3.png' /></a><a href='https://plus.google.com/u/0/115190507198706382011/about'><img src='../img/4.png' /></a></div>");
};

var slideTop = function () {

	$("#mediaLinks").mouseover(function () {
		if (!$("#mediaLinks").is(':animated')){
			$("#mediaLinks").animate({
				width:235
			}, 400, function (){
			});
		};
	});
	$("#mediaLinks").mouseleave(function () {
		if (!$("#mediaLinks").is(':animated')){
			$("#mediaLinks").animate({
				width: 50
			}, 400, function (){
			});
	    };
    });
};
	
var initLangSwitch = function () {
	$("#EngLangImg").click(function () {
		console.log("Language changed to English");
		
		language = '0';
		checkLangAndLoadPage(250);
	});
	
	$("#SpanLangImg").click(function () {
		console.log("Language changed to Spanish");
		language = '1';
		checkLangAndLoadPage(250);
	});
};	

var checkLangAndLoadPage = function (timeout){
	
	//If page isn't original index...
	if (urlPath != "http://partypunchout.com/index.html"){
	    setTimeout(function() {
	        if (language == '1') {
	            window.location.href = "../spanish/" + urlPath.substring(urlPath.lastIndexOf('/')+1);
	        } else {
	            window.location.href = "../english/" + urlPath.substring(urlPath.lastIndexOf('/')+1);
	        }
	    }, timeout);
    }
    else {
    	setTimeout(function() {
	        if (language == '1') {
	            window.location.href = "http://partypunchout.com/spanish/index.html";
	        } else {
	            window.location.href = "http://partypunchout.com/english/index.html";
	        }
	    }, timeout);
    };
};


//Mouseover and mouseleave handling for all pages:
var setMouseovers = function () {
	var leftButton = "../img/btns/home.png";
	var leftButtonDown = "../img/btns/home_pushed.png";
	var midLeftButton = "../img/btns/campaign_fundraising.png";
	var midLeftButtonDown = "../img/btns/campaign_fundraising_pushed.png";
	var midRightButton = "../img/btns/voter_education.png";
	var midRightButtonDown = "../img/btns/voter_education_pushed.png";
	var rightButton = "../img/btns/video_contest.png";
	var rightButtonDown = "../img/btns/video_contest_pushed.png";
	
	var currentPage = urlPath.substring(urlPath.lastIndexOf('/')+1);
	
	console.log("current page: " + currentPage);
	console.log("In the spanish folder? " + urlPath.indexOf('spanish'));
	
	//check if page is in spanish or english: indexof returns -1 when string can't be found
	if (urlPath.indexOf("spanish") != "-1"){
		//Set spanish variables:
		leftButton = "../img/btns/home_long_s.png";
		leftButtonDown = "../img/btns/home_long_pushed_s.png";
		midLeftButton = "../img/btns/campaign_fundraising_s.png";
		midLeftButtonDown = "../img/btns/campaign_fundraising_pushed_s.png";
		midRightButton = "../img/btns/voter_education_s.png";
		midRightButtonDown = "../img/btns/voter_education_pushed_s.png";
		rightButton = "../img/btns/video_contest_s.png";
		rightButtonDown = "../img/btns/video_contest_pushed_s.png";
		
        if (currentPage == 'index.html'){
			leftButton = "../img/btns/a_unique_game_s.png";
			leftButtonDown = "../img/btns/a_unique_game_pushed_s.png";
		}
		else if (currentPage == 'campaign_fundraising.html'){
			midLeftButton = "../img/btns/a_unique_game_s.png";
			midLeftButtonDown = "../img/btns/a_unique_game_pushed_s.png";
			
			//handle 'register now' button
			$("#register").mouseover(function() {
				$(this).attr("src", "../img/btns/register_pushed_s.png");
			});
			$("#register").mouseleave(function() {
				$(this).attr("src", "../img/btns/register_s.png");
			});
		}
		else if (currentPage == "voter_education.html"){
			//voter education...
			midLeftButton = "../img/btns/a_unique_game_s.png";
			midLeftButtonDown = "../img/btns/a_unique_game_pushed_s.png";
			midRightButton = "../img/btns/campaign_fundraising_s.png";
			midRightButtonDown = "../img/btns/campaign_fundraising_pushed_s.png";
		}
		else{
			//a unique game in spanish! Do nothing!
		};
	}
	else{
		//Do English stuff
		if (currentPage == 'index.html'){
			leftButton = "../img/btns/a_unique_game.png";
			leftButtonDown = "../img/btns/a_unique_game_pushed.png";
		}
		else if (currentPage == 'campaign_fundraising.html'){
			midLeftButton = "../img/btns/a_unique_game.png";
			midLeftButtonDown = "../img/btns/a_unique_game_pushed.png";
			
			//handle 'register now' button
			$("#register").mouseover(function() {
				$(this).attr("src", "../img/btns/register_pushed.png");
			});
			$("#register").mouseleave(function() {
				$(this).attr("src", "../img/btns/register.png");
			});
		}
		else if (currentPage == "voter_education.html"){
			//voter education...
			midLeftButton = "../img/btns/a_unique_game.png";
			midLeftButtonDown = "../img/btns/a_unique_game_pushed.png";
			midRightButton = "../img/btns/campaign_fundraising.png";
			midRightButtonDown = "../img/btns/campaign_fundraising_pushed.png";
		}
		else{
			//a unique game! do nothing!
		};
	};
	
	
	$("#campaignsaveimg").mouseover(function() {
	    $(this).attr("src", leftButtonDown);
	});
	$("#campaignsaveimg").mouseleave(function() {
	    $(this).attr("src", leftButton);
	});
	
	$("#campaignsaveimg2").mouseover(function() {
	    $(this).attr("src", midLeftButtonDown);
	});
	$("#campaignsaveimg2").mouseleave(function() {
	    $(this).attr("src", midLeftButton);
	});
	
	$("#campaignsaveimg3").mouseover(function() {
	    $(this).attr("src", midRightButtonDown);
	});
	$("#campaignsaveimg3").mouseleave(function() {
	    $(this).attr("src", midRightButton);
	});
	
	$("#videoContest").mouseover(function() {
	    $(this).attr("src", rightButtonDown);
	});
	$("#videoContest").mouseleave(function() {
	    $(this).attr("src", rightButton);
	});
};
         
