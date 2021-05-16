$(function(){
	$("button#couch").click(function(){
        $("button").removeClass();
        $(this).addClass("selected");
		$("div.galleryList").css({"display": "none"});
		$("div#galleryList1").css({"display": "flex"});
	});

    $("button#corner").click(function(){
        $("button").removeClass();
        $(this).addClass("selected");
		$("div.galleryList").css({"display": "none"});
		$("div#galleryList2").css({"display": "flex"});
	});

    $("button#pabric").click(function(){
        $("button").removeClass();
        $(this).addClass("selected");
		$("div.galleryList").css({"display": "none"});
		$("div#galleryList3").css({"display": "flex"});
	});
});
