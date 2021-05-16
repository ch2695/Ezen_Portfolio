$(function(){
	$("div#period1 ul li").click(function(){
		$("div#period1 ul li").removeClass();
		$(this).addClass('selected');
	});

	$("div#period1 ul li:nth-child(2)").click(function(){
		$("table#odrTable tr:nth-child(2)").css({"display": "table-row"});
		$("table#odrTable tr:nth-child(3)").css({"display": "table-row"});
		$("#mainDiv").css({"height": "1380px"});
	});

	$("div#period1 ul li:nth-child(1)").click(function(){
		$("table#odrTable tr:nth-child(2)").css({"display": "none"});
		$("table#odrTable tr:nth-child(3)").css({"display": "none"});
		$("#mainDiv").css({"height": "1150px"});
	});
});
