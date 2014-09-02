
//read contents of csv file into html table

$(document).ready(function () {
	$('#CSVTable').CSVToTable('../voter_education.csv', 
	{
		loadingText: "Loading data...",
		loadingImage: "../img/loading_dots.gif"
	}).bind("loadComplete",function() {
    	$('#CSVTable').find('TABLE').tablesorter();
    	appendIDs();
    	//appendLinks();
    });
    
    var appendIDs = function () {
    	var $banking = $("td:contains('BANKING/ FINANCIAL')");
    	console.log($banking.innerHTML);
    	$banking.attr('id', 'banking');
	};
    
    var appendLinks = function () {                                //FIX THIS IT'S BROKEN!!!!
	    var $links = new Array;
	    $links = $( "td:contains('http')" );
        console.log($links);
        for (var i=0; i<$links.length; i++){
        	var text = $links[i].innerHTML;
        	$links[i].empty;
        	$links[i].append("<a>" + text + "</a>");
        	console.log($links[i]);
        };
    };
});

