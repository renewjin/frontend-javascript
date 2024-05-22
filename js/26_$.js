function 알람띄우기() {
    //변수선언
    const num = 10;
    const srt = "양수";

    // $ 사용해서 메세지 생성
    
    const msg = '${num} 은/는 ${str} 입니다.';
    /*
    const msg = "${num} 은/는 ${str} 입니다.";
        ${변수명} 을 작성 후'(백틱)이 아닌 "" 나 ''를 작성하면 작동하지 않음
    */

    alert(msg);
}