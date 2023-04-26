// function qwertyKeyboard() {
//   let key = document.getElementById("t").value;
//   alert(key);
// }

"use strict";
const container = document.querySelector(".container");
const textarea = document.querySelector(".text-input");
const alphabet = document.querySelectorAll(".alpha");
const key = document.querySelectorAll(".key");

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("key")) {
    if (e.target.classList.contains("space")) {
      textarea.textContent += " ";
    }
    if (e.target.classList.contains("content")) {
      const getContent = e.target.textContent;
      textarea.textContent += getContent;
    }
    if (e.target.classList.contains("backspace")) {
      textarea.textContent = textarea.textContent.substring(
        0,
        textarea.textContent.length - 1
      );
    }
  } else {
    return;
  }
});

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    let code = event.code;
    textarea = textarea + name;
  },
  false
);
