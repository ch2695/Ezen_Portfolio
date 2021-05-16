$(function(){

	/* 네비게이션 */
	$("#aside>ul li.notice").click(function(){
		$("#aside>ul li").removeClass();
		$(this).addClass("selected");
		$("main#main #mainDiv").css({"height" : "900px"});
		$("div#inqArea>div").css({"display": "none"});
		$("div#inqArea>div#notice").css({"display": "block"});
	});

	$("#aside>ul li.asInq").click(function(){
		$("#aside>ul li").removeClass();
		$(this).addClass("selected");
		$("main#main #mainDiv").css({"height" : "1300px"});
		$("div#inqArea>div").css({"display": "none"});
		$("div#inqArea>div#asInquiry").css({"display": "block"});
	});
	/* 네비게이션 */

	/* 현재 페이지 표시 */
	$("ul#noticePage span").click(function(){
        var pgNum = $(this).text();
        $("div#notice>div span").text(pgNum);
//        alert("pgNum : " + pgNum);
    });

	$("ul#noticePage>li").click(function () {
        $("ul#noticePage>li").removeClass();
        $(this).addClass("selected");
    });
	/* 현재 페이지 표시 */

	/* 공지사항 페이지 이동 */
	$("ul#noticePage li:first-child").click(function(){
        $("div#notice table").css({"display" : "none"});
        $("table#noticeTbl1").css({"display" : "block"});
    });

	$("ul#noticePage li:nth-child(2)").click(function(){
        $("div#notice table").css({"display" : "none"});
        $("table#noticeTbl2").css({"display" : "block"});
    });

	$("ul#noticePage li:nth-child(3)").click(function(){
        $("div#notice table").css({"display" : "none"});
        $("table#noticeTbl3").css({"display" : "block"});
    });
	/* 공지사항 페이지 이동 */

	/* 생일 일수 입력하기 */
	var txtMsg = "<option>일</option>";
	for(var i=1; i<=31; i++) {
		txtMsg += "<option>" + i + "</option>";
	}
	$("#date").html(txtMsg);
	/* 생일 일수 입력하기 */

});




