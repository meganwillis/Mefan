//Waits until the document is loaded
$(document).ready(function() {
	
	$("ul#catList li").click(yeahtheyare);

	var carousel = new Carousel($("#catousel"));

});

function yeahtheyare()
{
	var bigalert = $(this).text();
	alert(bigalert + " YEAH THEY ARE!");
}

function Carousel($catousel)
{
	//Finds width of container
	var width = $catousel.width();
	//finds number of slides
	var numberofslides = $catousel.find("li").length;
	//multiplies width of container with number of slides
	var ulwidth = width*numberofslides;
	//uses ulwidth to set width of carousel
	$catousel.find("ul").width(ulwidth);
}

