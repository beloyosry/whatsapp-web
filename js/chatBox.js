const inputMsg = document.querySelector(".msg-input");
const sendMsg = document.querySelector(".msg-box-send");
const chatMsgArea = document.querySelector(".chatbox-message-content");
const recordBtn = document.querySelector(".msg-box-record");

document.onkeydown = function () {
    if (window.event.keyCode == "13") {
        if (isValid(inputMsg.value)) {
            msg();
        }
    }
};
sendMsg.addEventListener("click", () => {
    if (isValid(inputMsg.value)) {
        msg();
    }
});

function msg() {
    const today = new Date();
    let row = document.createElement("div");
    row.className = "row";

    function writeMessage() {
        let messageSent = `
		<div class="col-6 chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${inputMsg.value.trim().replace(/\n/g, "<br>\n")}
			</span>
			<span class="chatbox-message-item-time">${addZero(
                today.getHours()
            )}:${today.getMinutes()} ${today.getHours() < 12 ? "AM" : "PM"}
            <span class="seen">
                <svg viewBox="0 0 18 18" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px"
                    y="0px" enable-background="new 0 0 18 18" xml:space="preserve">
                    <path fill="currentColor"
                        d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z">
                    </path>
                </svg>
            </span></span>
		</div>
	`;
        row.insertAdjacentHTML("beforeend", messageSent);
        inputMsg.value = "";
        if (inputMsg.value) {
            sendMsg.style.display = "block";
            recordBtn.style.display = "none";
        } else {
            sendMsg.style.display = "none";
            recordBtn.style.display = "block";
        }
        scrollBottom();
    }

    writeMessage();

    setTimeout(() => {
        let messageReceived = `
		<div class="col-6 chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Thank you for your awesome support!
			</span>
			<span class="chatbox-message-item-time">${addZero(
                today.getHours()
            )}:${today.getMinutes()} ${
            today.getHours() < 12 ? "AM" : "PM"
        }</span>
		</div>
	`;

        row.insertAdjacentHTML("beforeend", messageReceived);
        scrollBottom();
    }, 1000);

    chatMsgArea.appendChild(row);
}

function addZero(num) {
    return num < 10 ? "0" + num : num - 12;
}

inputMsg.addEventListener("input", () => {
    let line = inputMsg.value.split("\n").length;

    if (inputMsg.rows < 6 || line < 6) {
        inputMsg.rows = line;
    }

    if (inputMsg.value) {
        sendMsg.style.display = "block";
        recordBtn.style.display = "none";
    } else {
        sendMsg.style.display = "none";
        recordBtn.style.display = "block";
    }
});

function scrollBottom() {
    chatMsgArea.scrollTo(0, chatMsgArea.scrollHeight);
}

function isValid(value) {
    let text = value.replace(/\n/g, "");
    text = text.replace(/\s/g, "");

    return text.length > 0;
}
