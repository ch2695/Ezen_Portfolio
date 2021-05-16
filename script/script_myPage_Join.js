$(function(){
	$("span#myPageLgnBtn").click(function(){
		var inputID = $("input#myuID").val().trim();
		var inputPW = $("input#myuPW").val().trim();
		var regIDList = ["test01", "guest01", "member01"];
		var regPWList = ["1111", "1234", "5678"];
		var idUseChk = false;
		var pwUseChk = false;

		$.each(regIDList, function(i, v){	//입력한 아이디와 일치하면
			if(inputID == v) {
				idUseChk = true;
			}
		});

		$.each(regPWList, function(i, v){	//입력한 패스워드와 일치하면
			if(inputPW == v) {
				pwUseChk = true;
			}
		});

		if(idUseChk == false || pwUseChk == false) {
			alert("아이디 혹은 비밀번호가 틀렸습니다.");
		}else {
			location.href = "../member/myPage_OrderList.html";
		}

	});
});
