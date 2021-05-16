$(function(){

    var idChk = false;
	var phcert = false;
	var certNo = false;
    // idChk 변수는 아이디 중복확인에서도 사용하고 가입완료에서도 사용해야 하니까
    // 전역변수로 만든다.

    /* 아이디 중복확인 */
    $("button#idChk").click(function(){
        var inputID = $("input#uID").val().trim();      // 사용자가 입력한 아이디
        var regIDList = ["test01", "guest01", "member01"];  // 사용중인 아이디
        var idUseChk = true;    // 아이디 사용가능 유무

        $.each(regIDList, function(i, v) {
            if(inputID == v) {
                idUseChk = false;
                idChk = false;
            }
        });

        if(inputID == "") {
            alert("아이디를 입력하세요.");
        }else if(idUseChk) {
            alert("사용가능한 아이디입니다.");
            $("#uPW").focus();
            idChk = true;
        }else {
			alert("이미 사용중인 아이디입니다.");
			$("#uID").focus();
        }

    });
    /* 아이디 중복확인 */

    /* 비밀번호 보기 */
    $("#pwchkBtn").click(function(){
        var chkTF = $("#pwchkBtn").prop("checked");
        if(chkTF) {
            $(".uPW").attr("type", "text");
        }else {
            $(".uPW").attr("type", "password");
        }
    });
    /* 비밀번호 보기 */

	/* 출생년도 입력하기 */
	var now = new Date();
	var startYear = now.getFullYear();
	var endYear = 1940;

	var txtYear = "<option>년도</option>";
	for(var i=startYear; i>=endYear; i--) {
		txtYear += "<option>" + i + "</option>";
	}
	$("#birthYear").html(txtYear);
	/* 출생년도 입력하기 */

	/* 생일 일수 입력하기 */
	var txtMsg = "<option>일</option>";
	for(var i=1; i<=31; i++) {
		txtMsg += "<option>" + i + "</option>";
	}
	$("#Date").html(txtMsg);
	/* 생일 일수 입력하기 */

	/* 휴대전화 인증 */
	$("span#phcert").click(function(){
		var phNum = $("#phNum").val().trim();
		if(phNum == "") {
			alert("휴대폰 번호를 입력해주세요.");
		}else {
			phcert = true;
			alert("인증번호를 발송했습니다.");
			$("#certNum").focus();
		}
	});

	$("div#sms span#certNo").click(function(){
		var certNum = $("#certNum").val().trim();
		if(certNum == "") {
			alert("인증번호를 입력하세요")
		}else {
			certNo = true;
			alert("확인되었습니다.");
		}
	});
	/* 휴대전화 인증 */

	/* 체크박스 동기화 시작 */

		/* 1. 전체동의 체크 => 하위 체크박스 체크여부 결정 */
	$("div#Chk #wholeChk").click(function(){
		var chkYN = $(this).prop("checked");
		if(chkYN) {
			$(".subChkbox").prop("checked", true);
		}else {
			$(".subChkbox").prop("checked", false);
		}
	});
		/* 1. 전체동의 체크 => 하위 체크박스 체크여부 결정 */

		/* 2. 하위 체크박스 체크 => 전체동의 체크여부 결정 */
	$(".subChkbox").click(function(){
		var chk1 = $("#chk1").prop("checked");
		var chk2 = $("#chk2").prop("checked");
		var chk3 = $("#chk3").prop("checked");
		var chk4 = $("#chk4").prop("checked");
		if(chk1 && chk2 && chk3 && chk4) {
			$("#wholeChk").prop("checked", true);
		}else {
			$("#wholeChk").prop("checked", false);
		}
	});
		/* 2. 하위 체크박스 체크 => 전체동의 체크여부 결정 */

	/* 체크박스 동기화 끝 */

    /* 가입완료 버튼 눌렀을 때 필수항목 체크유무 */
    $("div#joinBtn").click(function(){
        var uNm = $("#uNm").val().trim();
        var uID = $("#uID").val().trim();
        var uPW = $("#uPW").val().trim();
        var uPW_Re = $("#uPW_Re").val().trim();
        var wholeChkYN = $("#wholeChk").prop("checked");
        var ageChkYN = $("#agechkbox").prop("checked");
		var uEmail = $("#uEmail").val().trim();
		var phNum = $("#phNum").val().trim();
		var certNum = $("#certNum").val().trim();

        if(uNm == "") {
            alert("이름을 입력하세요.");
        }else if(uID == ""){
            alert("아이디를 입력하세요.");
        }else if(idChk == false) {
            alert("아이디 중복검사를 하세요.");
        }else if(uPW == ""){
            alert("비밀번호를 입력하세요.");
        }else if(uPW != uPW_Re){
            alert("비밀번호가 일치하지 않습니다.");
        }else if(uEmail == ""){
			alert("이메일을 입력하세요.");
		}else if(phNum == ""){
			alert("휴대전화 번호를 입력하세요");
		}else if(phcert == false){
			alert("휴대폰 인증을 하세요.");
		}else if(certNum == ""){
			alert("인증번호를 입력하세요");
		}else if(certNo == false){
			alert("인증번호를 확인하세요.");
		}else if(!ageChkYN){
            alert("14세 이상 체크를 해주세요.");
        }else if(!wholeChkYN){
            alert("전체동의를 체크해주세요.");
        }else {
            alert("회원가입 되었습니다.");
        }
    });
    /* 가입완료 버튼 눌렀을 때 필수항목 체크유무 */

});







