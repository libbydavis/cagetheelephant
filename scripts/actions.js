$(document).ready(function(){
	$("#tourbutton").click(function(){
		$("#tourcontent").fadeToggle();
	});
	$("#closetour").click(function(){
		$("#tourcontent").fadeOut();
	});
});
$(document).ready(function(){
	$("#socialcuescontent").click(function(){
		$("#bigalbumimage").fadeToggle();
		$(".hiddenalbum").fadeToggle();
		$(".albumtitle").hide();
	});
});