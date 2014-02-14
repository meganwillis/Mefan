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

	var currentSlide = 1;

	var carouselClick = function(e)
	{
		e.preventDefault();
		var $next = $("#next");
		var $previous = $("#previous");

		var nextSlide = $(this).attr("id") == "next" ? currentSlide + 1 : currentSlide - 1;

		//Disable the next button if at the end
		if(nextSlide>=numberofslides){
			$next.addClass("disabled");
		}
		else{
			$next.removeClass("disabled");
		}

		//Disable previous button if at the start
		if(nextSlide<=1){
			$previous.addClass("disabled");
		}
		else{
			$previous.removeClass("disabled");
		}

		if($(this).attr("id") == "next")
		{
			//Do next stuff
			if(currentSlide<numberofslides)
			{
				currentSlide++;

				$catousel.find("ul").animate({
					left: '-=' + width + 'px'
				});
			}
		}
		else{
			//Do previous stuff
			if(currentSlide>1)
			{
				currentSlide--;

				$catousel.find("ul").animate({
					left: '+=' + width + 'px'
				});
			}
		}

	}

	$("#next").click(carouselClick);
	$("#previous").click(carouselClick);
}



