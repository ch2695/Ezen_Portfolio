$(function(){
    $("div#chk input#email").click(function(){
        $("table.findEmail").css({"display": "block"});
        $("table.findPhone").css({"display": "none"});
    });

    $("div#chk input#phone").click(function(){
        $("table.findEmail").css({"display": "none"});
        $("table.findPhone").css({"display": "block"});
    });
});
