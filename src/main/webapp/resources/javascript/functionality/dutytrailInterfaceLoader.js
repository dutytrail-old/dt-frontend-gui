DT = {};
DT.duty = {};

DT = {
	
	buildTimeStamp: function(now){
		if(now == null){
			now = new Date();
		}
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var d = now.getDate();
		var m = months[now.getMonth()];
		var y = now.getFullYear();
		var h = now.getHours();
		var x = now.getMinutes();
		if(d < 10) d = "0" + d;
		if(h < 10) h = "0" + h;
		if(x < 10) x = "0" + x;
		return d+"-"+m+"-"+y+" "+h+":"+x;
	},
	
	msgAlertCreate: function(placeholder, message, msgType) {
		if(msgType == null){
			msgType = "danger";
		}
		$(placeholder).html('<div class="alert alert-'+msgType+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>'+message+'</span></div>')
	},
	
	msgAlertDestroy: function(placeholder){
		$(placeholder).html("");
	},
	
	msgAlertOn: function(placeholder) {
		$(placeholder).removeClass("hidden");
	},
	
	msgAlertOff: function(placeholder){
		$(placeholder).addClass("hidden");
	}
};

$(document).ready(function() {

});