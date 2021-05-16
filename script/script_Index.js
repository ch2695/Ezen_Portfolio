$(function () {

    /* 메인이미지 슬라이드 */
    setInterval(fnFade, 6000);

    function fnFade() {
        $("#shuttleFrame a:first-child").fadeOut(500);
        $("#shuttleFrame a:nth-child(2)").fadeIn(
            1000,
            function(){
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
            }
        );
    }
    /* 메인이미지 슬라이드 */

	/* 인기상품 이미지 슬라이드 */

		/* 자동슬라이드 */
	setInterval(fnSlide, 8000);

	function fnSlide() {
		$("#bstFrame").animate({
			"margin-left": "-420px"
			},
			1000,
			function(){
				$("#bstFrame table:first-child").insertAfter("#bstFrame table:last-child");
				$("#bstFrame").css({"margin-left": "0px"});
			}
		);
	}
		/* 자동슬라이드 */

		/* 이전 슬라이드로 이동 */
	$("div#prevBtn img").click(function () {
		$("div#bstFrame").css({"margin-left": "-423px"});
		$("#bstFrame table:last-child").insertBefore("#bstFrame table:first-child");
		$("#bstFrame").animate({
			"margin-left": "0",
			},
			300
		);
	});
        /* 이전 슬라이드로 이동 */

        /* 다음 슬라이드로 이동 */
	$("div#nextBtn img").click(function () {
		$("div#bstFrame").animate({
				"margin-left": "-423px"
			},
			300,
			function () {
				$("#bstFrame table:first-child").insertAfter("#bstFrame table:last-child");
				$("#bstFrame").css({
					"margin-left": "0"
				});
			});
	});
		/* 다음 슬라이드로 이동 */

	/* 인기상품 이미지 슬라이드 */

});
