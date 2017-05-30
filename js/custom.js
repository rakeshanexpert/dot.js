$(function(){
	var template = doT.template($("#productBox").text())
	$.ajax({
		url:"json/data.json",
		success:function(resp){
			$(".container").append(template(resp));
		}
	});
});