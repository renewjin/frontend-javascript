function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleButton = document.getElementById("toggle-button");
    //chatContainer.style.display=="" -> 초기값이 빈 문자일수도 있기 때문
    if (chatContainer.style.display=="none" ||chatContainer.style.display=="") {
        chatContainer.style.display="flex";
        toggleButton.textContent = "채팅숨기기";
    } else {
        chatContainer.style.display="none";
        toggleButton.textContent = "채팅보이기";
    }
}


// 자바스크립트는 매개변수가 함수에서 설정한 매개변수와 작성해야하는
// 개수가 달라도 문제없이 실행됨
메세지보이기("안녕하세요.kh 상담봇입니다. 원하는 메뉴를 입력하세요.");
메세지보이기("안녕하세요.kh 상담봇입니다. 원하는 메뉴를 입력하세요.", "bot");
function sendMessage() {
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value.trim();// user-input에 작성한 내용에(inputbox.value) .trim()함수를 사용하여 공백제거
    // 만약에 빈칸으로 보낼 경우 아무런 메세지 없이 보내기를 방지하길 원한다면 설정
    if(message =="") {
        return;
    }
    메세지보이기(message, "user"); // 메세지보이기 함수를 사용할 때 작성한 메세지와 누가 보냈는지 매개변수 설정 -> user
    inputbox.value = ''; //input박스의 값 내용 초기화

    //채팅봇 띄우기
    setTimeout(() => {
        메세지보이기("저는 채팅봇입니다.", "bot");
    }, 1000); // 1초후 메세지 보이기
}


function 메세지보이기(message, sender) { // 매개변수값을 message, sender로 받아 sender로 추가할 클래스를 분리
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div"); // div요소 추가
    //                         div 클래스 명
    //                            message
    //                                    user | chatbot  -message
    //messageElement.classList.add("message", "user-message");
    //messageElement.classList.add("message", "bot-message");
    messageElement.classList.add("message", sender + "-message"); // message 클래스 와 sender-message 클래스가 추가(sender은 변수로 값은 user또는 bot)
    messageElement.textContent = message; // 메세지 보이기
    chatbox.appendChild(messageElement); // 보낸 내용 추가하기 -> div chat-box
}