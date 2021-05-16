$(function(){

    /* 수량 선택하면 총 금액 출력 */
    $("#itemCnt").change(function(){
		var price = parseInt($("div#panmega>span:nth-child(2)").text());
		var itemCnt = parseInt($(this).val());
        var res = price*itemCnt;
        $("#res").text(res);
    });
    /* 수량 선택하면 총 금액 출력 */

    /* 바로구매 버튼 */
    $("#couch1Odr").click(function(){
		var itemCnt = parseInt($("select#itemCnt").val());
        var color = $("select#color").val();
        if(itemCnt == "" || color == "") {
            alert("필수 선택항목을 선택하세요.");
        }else {
            location.href = "../order/order.html";
        }
    });
    /* 바로구매 버튼 */

	/* 모달 레이어 팝업 */

        /* 소파 모달 레이어 */
	$("div.review01>div.rvImg li:first-child").click(function(){
		$("div.modal1").css({"display": "block"});
	});

	$("div.review02>div.rvImg li:first-child").click(function(){
		$("div.modal2").css({"display": "block"});
	});

	$("div.review04>div.rvImg li:last-child").click(function(){
		$("div.modal5").css({"display": "block"});
	});

	$("div.review05>div.rvImg li:nth-child(2)").click(function(){
		$("div.modal6").css({"display": "block"});
	});

	$("div.review07>div.rvImg li").click(function(){
		$("div.modal5").css({"display": "block"});
	});

	$("div.review08>div.rvImg li:last-child").click(function(){
		$("div.modal6").css({"display": "block"});
	});

	$("div.review09>div.rvImg li:first-child").click(function(){
		$("div.modal7").css({"display": "block"});
	});

	$("div.recrv01>div.rvImg li:last-child").click(function(){
		$("div.modal3").css({"display": "block"});
	});

	$("div.recrv02>div.rvImg li:first-child").click(function(){
		$("div.modal4").css({"display": "block"});
	});
        /* 소파 모달 레이어 */

        /*  식탁 모달 레이어 */
    $("div#dsg07review01>div.rvImg li").click(function(){
        $("div.bahelamodal1").css({"display": "block"});
    });

     $("div#dsg07review02>div.rvImg li").click(function(){
        $("div.bahelamodal2").css({"display": "block"});
    });

    $("div#dsg07review03>div.rvImg li:last-child").click(function(){
        $("div.bahelamodal3").css({"display": "block"});
    });
        /*  식탁 모달 레이어 */

	/* 모달 레이어 팝업 */

	/* 모달 레이어 팝업 닫기 버튼 */
	$("span.closeBtn").click(function(){
		$("div#modalBackground").css({"display": "none"});
	});
	/* 모달 레이어 팝업 닫기 버튼 */

    /* 수량, 색상선택 유무 */
    $("div#btnArea>span#keepBtn").click(function(){
        var cntNo = parseInt($("select#itemCnt").val());
        var color = parseInt($("select#color").val());
        if(cntNo == "" || color == "") {
            alert("옵션을 선택하세요.");
        }else {
            /*location.href = "../payment/keepItem.html";*/

        }
    });
    /* 수량, 색상선택 유무 */

});




