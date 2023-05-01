document.body.innerHTML =
  "<div class='wrapper'><div class='container'><textarea name='textarea' id='' cols='95' rows='10' class='text-input' ></textarea ><div class='keyboard'></div><span class='change_lang'>Press to change language: Alt + Shift</span></div ></div > ";

const keyboardKeys = [
  {
    value: "`",
    code: "Backquote",
    class: "key content symbol",
    valueShift: "~",
    valueRus: "ё",
    valueRusUppercase: "Ё",
  },
  {
    value: "1",
    code: "Digit1",
    class: "key content number",
    valueShift: "!",
  },
  {
    value: "2",
    code: "Digit2",
    class: "key content number",
    valueShift: "@",
  },
  {
    value: "3",
    code: "Digit3",
    class: "key content number",
    valueShift: "#",
  },
  {
    value: "4",
    code: "Digit4",
    class: "key content number",
    valueShift: "$",
  },
  {
    value: "5",
    code: "Digit5",
    class: "key content number",
    valueShift: "%",
  },
  {
    value: "6",
    code: "Digit6",
    class: "key content number",
    valueShift: "^",
  },
  {
    value: "7",
    code: "Digit7",
    class: "key content number",
    valueShift: "&",
  },
  {
    value: "8",
    code: "Digit8",
    class: "key content number",
    valueShift: "*",
  },
  {
    value: "9",
    code: "Digit9",
    class: "key content number",
    valueShift: "(",
  },
  {
    value: "0",
    code: "Digit0",
    class: "key content number",
    valueShift: ")",
  },
  {
    value: "-",
    code: "Minus",
    class: "key content symbol",
    valueShift: "_",
  },
  {
    value: "=",
    code: "Equal",
    class: "key content symbol",
    valueShift: "+",
  },
  {
    value: "Backspace",
    code: "Backspace",
    class: "key backspace",
  },

  { value: "Tab", code: "Tab", class: "key tab" },
  {
    value: "q",
    code: "KeyQ",
    class: "key content alpha",
    valueUppercase: "Q",
    valueRus: "й",
    valueRusUppercase: "Й",
  },
  {
    value: "w",
    code: "KeyW",
    class: "key content alpha",
    valueUppercase: "W",
    valueRus: "ц",
    valueRusUppercase: "Ц",
  },
  {
    value: "e",
    code: "KeyE",
    class: "key content alpha",
    valueUppercase: "E",
    valueRus: "у",
    valueRusUppercase: "У",
  },
  {
    value: "r",
    code: "KeyR",
    class: "key content alpha",
    valueUppercase: "R",
    valueRus: "к",
    valueRusUppercase: "К",
  },
  {
    value: "t",
    code: "KeyT",
    class: "key content alpha",
    valueUppercase: "T",
    valueRus: "е",
    valueRusUppercase: "Е",
  },
  {
    value: "y",
    code: "KeyY",
    class: "key content alpha",
    valueUppercase: "Y",
    valueRus: "н",
    valueRusUppercase: "Н",
  },
  {
    value: "u",
    code: "KeyU",
    class: "key content alpha",
    valueUppercase: "U",
    valueRus: "г",
    valueRusUppercase: "Г",
  },
  {
    value: "i",
    code: "KeyI",
    class: "key content alpha",
    valueUppercase: "I",
    valueRus: "ш",
    valueRusUppercase: "Ш",
  },
  {
    value: "o",
    code: "KeyO",
    class: "key content alpha",
    valueUppercase: "O",
    valueRus: "щ",
    valueRusUppercase: "Щ",
  },
  {
    value: "p",
    code: "KeyP",
    class: "key content alpha",
    valueUppercase: "P",
    valueRus: "з",
    valueRusUppercase: "З",
  },
  {
    value: "[",
    code: "BracketLeft",
    class: "key content symbol",
    valueRus: "х",
    valueRusUppercase: "Х",
  },
  {
    value: "]",
    code: "BracketRight",
    class: "key content symbol",
    valueRus: "ъ",
    valueRusUppercase: "Ъ",
  },
  {
    value: "\\",
    code: "Backslash",
    class: "key content symbol",
    valueShift: "/",
  },
  { value: "Del", code: "Delete", class: "key delete" },

  {
    value: "CapsLock",
    code: "CapsLock",
    class: "key capslock",
  },
  {
    value: "a",
    code: "KeyA",
    class: "key content alpha",
    valueUppercase: "A",
    valueRus: "ф",
    valueRusUppercase: "Ф",
  },
  {
    value: "s",
    code: "KeyS",
    class: "key content alpha",
    valueUppercase: "S",
    valueRus: "ы",
    valueRusUppercase: "Ы",
  },
  {
    value: "d",
    code: "KeyD",
    class: "key content alpha",
    valueUppercase: "D",
    valueRus: "в",
    valueRusUppercase: "В",
  },
  {
    value: "f",
    code: "KeyF",
    class: "key content alpha",
    valueUppercase: "F",
    valueRus: "а",
    valueRusUppercase: "А",
  },
  {
    value: "g",
    code: "KeyG",
    class: "key content alpha",
    valueUppercase: "G",
    valueRus: "п",
    valueRusUppercase: "П",
  },
  {
    value: "h",
    code: "KeyH",
    class: "key content alpha",
    valueUppercase: "H",
    valueRus: "р",
    valueRusUppercase: "Р",
  },
  {
    value: "j",
    code: "KeyJ",
    class: "key content alpha",
    valueUppercase: "J",
    valueRus: "о",
    valueRusUppercase: "О",
  },
  {
    value: "k",
    code: "KeyK",
    class: "key content alpha",
    valueUppercase: "K",
    valueRus: "л",
    valueRusUppercase: "Л",
  },
  {
    value: "l",
    code: "KeyL",
    class: "key content alpha",
    valueUppercase: "L",
    valueRus: "д",
    valueRusUppercase: "Д",
  },
  {
    value: ";",
    code: "Semicolon",
    class: "key content symbol",
    valueRus: "ж",
    valueRusUppercase: "Ж",
  },
  {
    value: "'",
    code: "Quote",
    class: "key content symbol",
    valueRus: "э",
    valueRusUppercase: "Э",
  },
  { value: "Enter", code: "Enter", class: "key enter" },

  { value: "Shift", code: "ShiftLeft", class: "key shift_left" },
  {
    value: "\\",
    code: "Backslash",
    class: "key content symbol",
    valueRus: ",",
  },
  {
    value: "z",
    code: "KeyZ",
    class: "key content alpha",
    valueUppercase: "Z",
    valueRus: "я",
    valueRusUppercase: "Я",
  },
  {
    value: "x",
    code: "KeyX",
    class: "key content alpha",
    valueUppercase: "X",
    valueRus: "ч",
    valueRusUppercase: "Ч",
  },
  {
    value: "c",
    code: "KeyC",
    class: "key content alpha",
    valueUppercase: "C",
    valueRus: "с",
    valueRusUppercase: "С",
  },
  {
    value: "v",
    code: "KeyV",
    class: "key content alpha",
    valueUppercase: "V",
    valueRus: "м",
    valueRusUppercase: "М",
  },
  {
    value: "b",
    code: "KeyB",
    class: "key content alpha",
    valueUppercase: "B",
    valueRus: "и",
    valueRusUppercase: "И",
  },
  {
    value: "n",
    code: "KeyN",
    class: "key content alpha",
    valueUppercase: "N",
    valueRus: "т",
    valueRusUppercase: "Т",
  },
  {
    value: "m",
    code: "KeyM",
    class: "key content alpha",
    valueUppercase: "M",
    valueRus: "ь",
    valueRusUppercase: "Ь",
  },
  {
    value: ",",
    code: "Comma",
    class: "key content symbol",
    valueRus: "б",
    valueRusUppercase: "Б",
  },
  {
    value: ".",
    code: "Period",
    class: "key content symbol",
    valueRus: "ю",
    valueRusUppercase: "Ю",
  },
  { value: "/", code: "Slash", class: "key content symbol", valueRus: "." },
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

function buildKeyboard() {
  let keyboardDone = "";

  for (const key of keyboardKeys) {
    if (key.hasOwnProperty("valueShift")) {
      keyboardDone +=
        "<button id='" +
        key.code +
        "' class='" +
        key.class +
        "'>" +
        key.value +
        "<div class='shift_key'>" +
        key.valueShift +
        "</div></button>";
    } else {
      keyboardDone +=
        "<button id='" +
        key.code +
        "' class='" +
        key.class +
        "'>" +
        key.value +
        "</button>";
    }
  }
  keyboard.innerHTML = keyboardDone;
}
buildKeyboard();

const keyboardElement = document.querySelector(".keyboard");
const textarea = document.querySelector(".text-input");
const alphabet = document.querySelectorAll(".alpha");
const key = document.querySelectorAll(".key");

function keyboardClick(e) {
  const cursorPosition = textarea.selectionStart;
  const isEnd = textarea.selectionStart === textarea.value.length;

  console.log("!", textarea.selectionStart, cursorPosition);
  if (e.target.classList.contains("key")) {
    if (e.target.classList.contains("content")) {
      const getContent = e.target.childNodes[0].nodeValue;
      if (isEnd) {
        textarea.value += getContent;
      } else {
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          getContent +
          textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains("backspace")) {
      if (isEnd) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1);
      } else if (textarea.selectionStart !== 0) {
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart - 1) +
          textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosition - 1;
        textarea.selectionEnd = cursorPosition - 1;
      }
    }
    if (e.target.classList.contains("delete")) {
      if (!isEnd) {
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          textarea.value.slice(textarea.selectionStart + 1);
        textarea.selectionStart = cursorPosition;
        textarea.selectionEnd = cursorPosition;
      }
    }
    if (e.target.classList.contains("enter")) {
      if (isEnd) {
        textarea.value = textarea.value + "\r\n";
      } else if (textarea.selectionStart !== 0) {
        let slicedElement = textarea.value.slice(textarea.selectionStart);
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          "\r\n" +
          slicedElement;
        textarea.selectionStart =
          textarea.selectionStart - slicedElement.length;
        textarea.selectionEnd = textarea.selectionEnd - slicedElement.length;
      }
    }
  } else {
    return;
  }
}

keyboardElement.addEventListener("click", keyboardClick);

document.addEventListener(
  "keydown",
  (event) => {
    event.preventDefault();
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
