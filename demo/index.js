
$(document).ready(function () {
	
	flick.add($("body"), function(pageX, pageY, time){
		alert(time +" - " + pageX + " - " + pageY);
	});
	
});

