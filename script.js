document.body.innerHTML =
  "<div class='wrapper'><div class='container'><textarea name='textarea' id='' cols='95' rows='10' class='text-input' ></textarea><div class='keyboard'></div></div></div>";

const keyboardKeys = [
  { value: "~", code: "Backquote", class: "key content symbol" },
  { value: "1", code: "Digit1", class: "key content number" },
  { value: "2", code: "Digit2", class: "key content number" },
  { value: "3", code: "Digit3", class: "key content number" },
  { value: "4", code: "Digit4", class: "key content number" },
  { value: "5", code: "Digit5", class: "key content number" },
  { value: "6", code: "Digit6", class: "key content number" },
  { value: "7", code: "Digit7", class: "key content number" },
  { value: "8", code: "Digit8", class: "key content number" },
  { value: "9", code: "Digit9", class: "key content number" },
  { value: "0", code: "Digit0", class: "key content number" },
  { value: "-", code: "Minus", class: "key content symbol" },
  { value: "=", code: "Equal", class: "key content symbol" },
  {
    value: "Backspace",
    code: "Backspace",
    class: "key backspace",
  },

  { value: "Tab", code: "Tab", class: "key tab" },
  { value: "q", code: "KeyQ", class: "key content alpha" },
  { value: "w", code: "KeyW", class: "key content alpha" },
  { value: "e", code: "KeyE", class: "key content alpha" },
  { value: "r", code: "KeyR", class: "key content alpha" },
  { value: "t", code: "KeyT", class: "key content alpha" },
  { value: "y", code: "KeyY", class: "key content alpha" },
  { value: "u", code: "KeyU", class: "key content alpha" },
  { value: "i", code: "KeyI", class: "key content alpha" },
  { value: "o", code: "KeyO", class: "key content alpha" },
  { value: "p", code: "KeyP", class: "key content alpha" },
  {
    value: "[",
    code: "BracketLeft",
    class: "key content symbol",
  },
  {
    value: "]",
    code: "BracketRight",
    class: "key content symbol",
  },
  { value: "/", code: "Slash", class: "key content symbol" },
  { value: "Del", code: "Delete", class: "key delete" },

  { value: "CapsLock", code: "CapsLock", class: "key capslock" },
  { value: "a", code: "KeyA", class: "key content alpha" },
  { value: "s", code: "KeyS", class: "key content alpha" },
  { value: "d", code: "KeyD", class: "key content alpha" },
  { value: "f", code: "KeyF", class: "key content alpha" },
  { value: "g", code: "KeyG", class: "key content alpha" },
  { value: "h", code: "KeyH", class: "key content alpha" },
  { value: "j", code: "KeyJ", class: "key content alpha" },
  { value: "k", code: "KeyK", class: "key content alpha" },
  { value: "l", code: "KeyL", class: "key content alpha" },
  { value: ";", code: "Semicolon", class: "key content symbol" },
  { value: "'", code: "Quote", class: "key content symbol" },
  { value: "enter", code: "Enter", class: "key enter" },

  { value: "Shift", code: "ShiftLeft", class: "key shift_left" },
  { value: "\\", code: "Backslash", class: "key content symbol" },
  { value: "z", code: "KeyZ", class: "key content alpha" },
  { value: "x", code: "KeyX", class: "key content alpha" },
  { value: "c", code: "KeyC", class: "key content alpha" },
  { value: "v", code: "KeyV", class: "key content alpha" },
  { value: "b", code: "KeyB", class: "key content alpha" },
  { value: "n", code: "KeyN", class: "key content alpha" },
  { value: "m", code: "KeyM", class: "key content alpha" },
  { value: ",", code: "Comma", class: "key content symbol" },
  { value: ".", code: "Period", class: "key content symbol" },
  { value: "/", code: "Slash", class: "key content symbol" },
  { value: ">", code: "ArrowUp", class: "key arrow_top" },
  {
    value: "Shift",
    code: "ShiftRight",
    class: "key shift_right",
  },

  { value: "Ctrl", code: "ControlLeft", class: "key ctrl" },
  { value: "Win", code: "MetaLeft", class: "key win" },
  { value: "Alt", code: "AltLeft", class: "key alt" },
  { value: "", code: "Space", class: "key space" },
  { value: "Alt", code: "AltRight", class: "key alt" },
  { value: "Ctrl", code: "ControlRight", class: "key ctrl" },
  { value: "<", code: "ArrowLeft", class: "key arrow_left" },
  { value: ">", code: "ArrowDown", class: "key arrow_bottom" },
  { value: ">", code: "ArrowRight", class: "key arrow_right" },
];

const keyboard = document.querySelector(".keyboard");

let keyboardDone = "";

for (const key of keyboardKeys) {
  keyboardDone +=
    "<button id='" +
    key.code +
    "' class='" +
    key.class +
    "'>" +
    key.value +
    "</button>";
}
keyboard.innerHTML = keyboardDone;

const container = document.querySelector(".container");
const textarea = document.querySelector(".text-input");
const alphabet = document.querySelectorAll(".alpha");
const key = document.querySelectorAll(".key");

function keyboardClick(e) {
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
}

container.addEventListener("click", keyboardClick);

document.addEventListener(
  "keydown",
  (event) => {
    let code = event.code;
    const keyElement = document.getElementById(code);
    keyElement.click();
    keyElement.classList.add("active");
    console.log(code, keyElement);
  },
  false
);
document.addEventListener(
  "keyup",
  (event) => {
    let code = event.code;
    const keyElement = document.getElementById(code);
    keyElement.classList.remove("active");
  },
  false
);
