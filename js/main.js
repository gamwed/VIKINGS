$(document).ready(function(){

	Data = new Date();
	Year = Data.getFullYear();
	Month = Data.getMonth();
	Day = Data.getDate();

	$("#clndr").html("Сегодня: "+Day+":0"+Month+":"+Year);	

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