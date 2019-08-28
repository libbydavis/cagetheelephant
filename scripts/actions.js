var opentour;
//Tour Box Open and Close
$(document).ready(function(){
	$("#tourbutton").click(function(){
		opentour = 1;
		$("#tourcontent").fadeToggle();
		return opentour;
	});
	$("#tourmenu").click(function(){
		opentour = 1;
		$("#tourcontent").fadeToggle();
		return opentour;
	});
	$("#closetour").click(function(){
		opentour = 0;
		$("#tourcontent").fadeOut();
		return opentour;
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
		if (opentour === 1) {
			$("#tourcontent").fadeOut();
			opentour = 0;
		};
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
