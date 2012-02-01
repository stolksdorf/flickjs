var flick = {
		timeThreshold : 80,
		distanceThreshold : 15,
		
		add : function(element, callback){
			element.mousedown(function(event){
				flick.starttime = new Date();
				flick.startx = event.pageX;
				flick.starty = event.pageY;
			
			})
			.mouseup(function(event){
				var endTime = new Date();
				diff = {
					time : endTime - flick.starttime,
					x : event.pageX - flick.startx,
					y : event.pageY - flick.starty,
				};
				var flickCheck = diff.time > flick.timeThreshold && (Math.abs(diff.x) > flick.distanceThreshold || Math.abs(diff.y) > flick.distanceThreshold);
				if(typeof callback === 'function' && flickCheck ){
					callback(diff.x, diff.y, diff.time);
				}
			});
		}
	};