$(function(){
    /* GNB 메뉴 시작 */
    $("#main button").click(function(){
        $("main#main button").removeClass();
        $(this).addClass("selected");
    });

    $("#main button:nth-child(2)").click(function(){
        $("#main>div.tabArea").css({"display": "none"});
        $("div#supersingBed").css({"display": "block"});
    });

    $("#main button:nth-child(3)").click(function(){
        $("#main>div.tabArea").css({"display": "none"});
        $("div#kingQueen").css({"display": "block"});
    });
    /* GNB 메뉴 끝 */

    /* 슈퍼싱글/싱글 침대 시작 */
    $("div#supersingBed ul li").click(function(){
        $("div#supersingBed ul li").removeClass();
        $(this).addClass("selected");
    });

    $("div#supersingBed ul li:nth-child(1)").click(function(){
        $("div#supersingBed div.galleryList").css({"display": "none"});
         $("div#supersingBed div#supsingbst").css({"display": "flex"});
    });

    $("div#supersingBed ul li:nth-child(2)").click(function(){
        $("div#supersingBed div.galleryList").css({"display": "none"});
         $("div#supersingBed div#supsingnew").css({"display": "flex"});
    });
    /* 슈퍼싱글/싱글 침대 끝 */

    /* 킹/큉 침대 시작 */
    $("div#kingQueen ul li").click(function(){
        $("div#kingQueen ul li").removeClass();
        $(this).addClass("selected");
    });

    $("div#kingQueen ul li:nth-child(1)").click(function(){
        $("div#kingQueen div.galleryList").css({"display": "none"});
         $("div#kingQueen div#kingQnbst").css({"display": "flex"});
    });

    $("div#kingQueen ul li:nth-child(2)").click(function(){
        $("div#kingQueen div.galleryList").css({"display": "none"});
         $("div#kingQueen div#kingQnnew").css({"display": "flex"});
    });
    /* 킹/퀸 침대 끝 */
});





