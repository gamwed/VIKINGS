$(document).ready(function(){
	
	window.addEventListener("resize",function(){
		var w =  window.innerWidth;
		console.log(w);
		if (w>768) {
			$("#menuroll").css("display","block");
		} else {
			$("#menuroll").hide();
		}
	});

	$("#amb").click(function(){
		$("#menuroll").slideToggle("slow");
	});

});