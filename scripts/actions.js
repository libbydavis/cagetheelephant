//Tour Box Open and Close
$(document).ready(function(){
	$("#tourbutton").click(function(){
		$("#tourcontent").fadeToggle();
	});
	$("#tourmenu").click(function(){
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
		$(".albumtitle").hide();
	});
	$("#socialcuesmenu").click(function(){
		$("#bigalbumimage").fadeOut();
		$(".hiddenalbum").fadeIn();
		$(".albumtitle").hide();
	});
	$("#closealbum").click(function(){
		$("#bigalbumimage").fadeIn();
		$(".hiddenalbum").fadeOut();
		$(".albumtitle").show();
	});

});

//About Open and Close
$(document).ready(function(){
	$("#aboutcontent").click(function(){
		$("#aboutimagedisappear").fadeOut();
		$(".hiddenabout").fadeIn();
		$(".abouttitle").hide();
	});
	$("#aboutmenu").click(function(){
		$("#aboutimagedisappear").fadeOut();
		$(".hiddenabout").fadeIn();
		$(".abouttitle").hide();
	});
	$("#closeabout").click(function(){
		$("#aboutimagedisappear").fadeIn();
		$(".hiddenabout").fadeOut();
		$(".abouttitle").show();
	});

});
