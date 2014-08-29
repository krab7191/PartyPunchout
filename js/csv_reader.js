
//read contents of csv file into html table

$(document).ready(function () {
	$('#CSVTable').CSVToTable('../voter_education.csv', 
	{
		loadingText: "Loading data...",
		loadingImage: "../img/loading_dots.gif"
	}).bind("loadComplete",function() { 
    	$('#CSVTable').find('TABLE').tablesorter();
    });
});

