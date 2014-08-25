



var language = '0';
var urlPath = window.location.pathname;

$(window).load(function () {
	setMouseovers();
	initLangSwitch();
});
	
var initLangSwitch = function () {
	$("#EngLangImg").click(function () {
		console.log("Language changed to English");
		language = '0';
		checkLangAndLoadPage();
	});
	
	$("#SpanLangImg").click(function () {
		console.log("Language changed to Spanish");
		language = '1';
		checkLangAndLoadPage();
	});
};	

var checkLangAndLoadPage = function (){
	
    setInterval(function() {
        if (language == '1') {
            window.location.href = "../spanish/index.html";
        } else {
            window.location.href = "english/index.html";
        }
    }, 800);
};


//Mouseover and mouseleave functions:
var setMouseovers = function () {
	var leftButton, leftButtonDown;
	var midLeftButton = "../img/btns/campaign_fundraising.png";
	var midLeftButtonDown = "../img/btns/campaign_fundraising_pushed.png";
	var midRightButton = "../img/btns/video_contest.png";
	var midRightButtonDown = "../img/btns/video_contest_pushed.png";
	var rightButton = "../img/btns/voter_education.png";
	var rightButtonDown = "../img/btns/voter_education_pushed.png";
	
	var currentPage = urlPath.substring(urlPath.lastIndexOf('/')+1);
	
	console.log("current page: " + currentPage);
	console.log("In the spanish folder? " + urlPath.indexOf('spanish'));
	
	//check if page is in spanish or english: indexof returns -1 when string can't be found
	if (urlPath.indexOf("spanish") != "-1"){
		//Set spanish variables:
		midLeftButton = "";
		midLeftButtonDown = "";
		midRightButton = "";
		midRightButtonDown = "";
		rightButton = "";
		rightButtonDown = "";
        if (currentPage == 'index.html'){
			leftButton = "../img/btns/a_unique_game_s.png";
			leftButtonDown = "../img/btns/a_unique_game_pushed_s.png";
		}
		else{
			leftButton = "../img/btns/home_s.png";
			leftButtonDown = "../img/btns/home_pushed_s.png";
		};
	}
	else{
		//Do English stuff
		if (currentPage == 'index.html'){
			leftButton = "../img/btns/a_unique_game.png";
			leftButtonDown = "../img/btns/a_unique_game_pushed.png";
		}
		else{
			leftButton = "../img/btns/home.png";
			leftButtonDown = "../img/btns/home_pushed.png";
		};
	};
	
	
	$("#campaignsaveimg").mouseover(function() {
	    $("#campaignsaveimg").attr("src", leftButtonDown);
	});
	$("#campaignsaveimg").mouseleave(function() {
	    $("#campaignsaveimg").attr("src", leftButton);
	});
	
	$("#campaignsaveimg2").mouseover(function() {
	    $("#campaignsaveimg2").attr("src", midLeftButtonDown);
	});
	$("#campaignsaveimg2").mouseleave(function() {
	    $("#campaignsaveimg2").attr("src", midLeftButton);
	});
	
	$("#videoContest").mouseover(function() {
	    $("#videoContest").attr("src", midRightButtonDown);
	});
	$("#videoContest").mouseleave(function() {
	    $("#videoContest").attr("src", midRightButton);
	});
	
	$("#campaignsaveimg3").mouseover(function() {
	    $("#campaignsaveimg3").attr("src", rightButtonDown);
	});
	$("#campaignsaveimg3").mouseleave(function() {
	    $("#campaignsaveimg3").attr("src", rightButton);
	});
};
         
