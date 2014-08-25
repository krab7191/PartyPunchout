

var language = '0';

var checkLangAndLoadPage = function (){
	console.log("Script fired...");
	
    setInterval(function() {
        console.log(language);
        if (language == 1) {
            window.location.href = "spanish/index.html";
        } else {
            window.location.href = "english/index.html";
        }
    }, 1500);
};


//Mouseover and mouseleave functions:
$("#campaignsaveimg").mouseover(function() {
	console.log("mouseover fired");
    $("#campaignsaveimg").attr("src", "../img/btns/a_unique_game_pushed.png");
});
$("#campaignsaveimg").mouseleave(function() {
    $("#campaignsaveimg").attr("src", "../img/btns/a_unique_game.png");
});

$("#campaignsaveimg2").mouseover(function() {
    $("#campaignsaveimg2").attr("src", "../img/btns/campaign_fundraising_pushed.png");
});

$("#campaignsaveimg2").mouseleave(function() {
    $("#campaignsaveimg2").attr("src", "../img/btns/campaign_fundraising.png");
});

$("#campaignsaveimg3").mouseover(function() {
    $("#campaignsaveimg3").attr("src", "../img/btns/voter_education_pushed.png");
});

$("#campaignsaveimg3").mouseleave(function() {
    $("#campaignsaveimg3").attr("src", "../img/btns/voter_education.png");
});
         
