$(function () {

    /* 헤더 GNB */
    $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().slideDown(300);
    });

    $("#mainMenu>li").mouseout(function () {
        $(".subMenu").stop().slideUp(300);
    });
    /* 헤더 GNB */

    /* 검색 아이콘 클릭시 */
    $("div#search>img").click(function () {
        var sch = $("input#sch").val();
        if(sch == "멜로우 천연면피 통가죽 4인 카우치형 소파") {
			location.href = "couch5.html";
		}
    });
    /* 검색 아이콘 클릭시 */

    /* div#topBtnArea */
    $("div#topBtnArea").click(function () {
        $(window).scrollTop(0);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("div#topBtnArea").fadeIn(90);
        } else {
            $("div#topBtnArea").fadeOut(90);
        }
    });
    /* div#topBtnArea */

});



