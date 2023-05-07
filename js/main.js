let chatContact = document
    .getElementById("chatList")
    .getElementsByTagName("div");
let chatBox = document.querySelector(".chat-box");
let chatScreen = document.querySelector(".chat-screen");

for (let i = 0; i < chatContact.length; i++) {
    chatContact[i].addEventListener("click", doStuff, false);
}

function doStuff() {
    chatBox.style.display = "none";
    chatScreen.style.display = "flex";
    let el = document.querySelectorAll(".chat-list .chat-list-item");
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
            let c = 0;
            while (c < el.length) {
                el[c++].className = "row chat-list-item";
            }
            el[i].className = "row chat-list-item active";
        };
    }
}

