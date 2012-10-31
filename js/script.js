var totaldist;
var icybottleheight;

// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

// Catch touchevents on dont_scroll-objects
$("#container").bind("touchmove", {}, function(event){
  event.preventDefault();
});

$("#redbg").bind("touchmove", {}, function(event){
  event.preventDefault();
});

$(document).ready(function() {

	function test(){
		  //$("#cap").delay(200).addClass("cap-on");
	  	//$("#cap").delay(200).animate({"bottom":"622px", "right":"146px"}, 200);
	  	$("#girl").delay(800).animate({"left":"0px"},400);
	  	$("#redbg").delay(800).animate({"left":"0px"},400);
	  	$("#girl").delay(1000).fadeOut(200);
	  	$("#refresh").delay(2000).animate({"left":"20px"},200);
	  	$("#click").delay(2200).animate({"left":"20px"},200);
	  	$("#havesay").delay(2400).animate({"left":"20px"},200);
      $("#the-form").delay(2600).animate({"left":"20px"},200);
      $("#logo").delay(2800).animate({"left":"105px"},200);
	  }
  // Handler for .ready() called.
  $("#mercury").hammer({prevent_default:true, drag_horizontal:false, drag_min_distance:0}).bind("drag dragstart dragend", function(ev){
  		//console.log(ev.direction);
  		//console.log(ev.distanceY);
  		
  		totaldist = ev.distanceY/3;
  		icybottleheight = totaldist * (348/321);
  		//var currentHeight = 321 - ev.distanceY;
  		//var currentTop = 5 + ev.distanceY;

  		var maxHeight = $("#mercury").css("height").slice(0,-2);
  		var maxBottom = $("#mercury").css("bottom").slice(0,-2);
  		
  		var fmh= parseInt(maxHeight);
  		var fmb= parseInt(maxBottom);

  		//console.log(fmh+fmb);

  		if (ev.direction == "down" ){
  			$("#mercury").css("bottom","-="+totaldist);
  			$("#mercury").css("height","-="+totaldist);
  			$("#icy").css("height","+="+(icybottleheight*4));


  			if (parseInt($("#mercury").css("height").slice(0,-2))<1){
          
  				_gaq.push(['_trackEvent','userAction', 'thermoSwipeDown', '']);
  				$("#bottle").css("opacity", "0");
          $("#icy").css("bottom","565px");
  				$("#icy").css("height","351px");
  				$("#icy").delay(200).addClass("getTransformed");
  				/*$("#icy").addClass("icy-opencap");*/
  				test();
  			}

  		} else if (ev.direction == "up" && fmh<=321 && fmb<=395){
  			$("#mercury").css("bottom","-="+totaldist);
  			$("#mercury").css("height","-="+totaldist);
  			$("#icy").css("height","+="+(icybottleheight*4));
  				if(parseInt($("#mercury").css("height").slice(0,-2))>321 || parseInt($("#mercury").css("bottom").slice(0,-2))>395){
  					$("#mercury").css("height", "321px");
  					$("#mercury").css("bottom", "395px");
  				}
  		}
  });
});