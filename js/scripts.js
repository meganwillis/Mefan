//Waits until the document is loaded
$(document).ready(function() {
	
	$("ul#catList li").click(yeahtheyare);
});

function yeahtheyare()
{
	var bigalert = $(this).text();
	alert(bigalert + " YEAH THEY ARE!");
}