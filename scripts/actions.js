//Tour Box Open and Close
$(document).ready(function(){
	$("#tourbutton").click(function(){
		$("#tourcontent").fadeToggle();
	});
	$("#closetour").click(function(){
		$("#tourcontent").fadeOut();
	});
});

//Album Box Open and Close
$(document).ready(function(){
	$("#socialcuescontent").click(function(){
		$("#bigalbumimage").fadeOut();
		$(".hiddenalbum").fadeIn();
		$(".albumtitle").toggleClass(".heading");
	});
	$("#closealbum").click(function(){
		$("#bigalbumimage").fadeIn();
		$(".hiddenalbum").fadeOut();
	});

});

//About Open and Close
$(document).ready(function(){
	$("#aboutcontent").click(function(){
		$("#aboutimagedisappear").fadeOut();
		$(".hiddenabout").fadeIn();
		$(".abouttitle").toggleClass(".heading");
	});
	$("#closeabout").click(function(){
		$("#aboutimagedisappear").fadeIn();
		$(".hiddenabout").fadeOut();
	});

});
