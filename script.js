document.body.innerHTML =
  "<div class='wrapper'><div class='container'><textarea name='textarea' id='' cols='95' rows='10' class='text-input' readonly ></textarea><div class='keyboard'></div></div></div>";

const keyboardKeys = [
  { value: "~", code: 192, class: "key content symbol" },
  { value: "1", code: 49, class: "key content number" },
  { value: "2", code: 50, class: "key content number" },
  { value: "3", code: 51, class: "key content number" },
  { value: "4", code: 52, class: "key content number" },
  { value: "5", code: 53, class: "key content number" },
  { value: "6", code: 54, class: "key content number" },
  { value: "7", code: 55, class: "key content number" },
  { value: "8", code: 56, class: "key content number" },
  { value: "9", code: 57, class: "key content number" },
  { value: "0", code: 48, class: "key content number" },
  { value: "-", code: 189, class: "key content symbol" },
  { value: "=", code: 187, class: "key content symbol" },
  { value: "Backspace", code: 8, class: "key backspace" },

  { value: "Tab", code: 9, class: "key tab" },
  { value: "q", code: 81, class: "key content alpha" },
  { value: "w", code: 87, class: "key content alpha" },
  { value: "e", code: 69, class: "key content alpha" },
  { value: "r", code: 82, class: "key content alpha" },
  { value: "t", code: 84, class: "key content alpha" },
  { value: "y", code: 89, class: "key content alpha" },
  { value: "u", code: 85, class: "key content alpha" },
  { value: "i", code: 73, class: "key content alpha" },
  { value: "o", code: 79, class: "key content alpha" },
  { value: "p", code: 80, class: "key content alpha" },
  { value: "[", code: 219, class: "key content symbol" },
  { value: "]", code: 221, class: "key content symbol" },
  { value: "/", code: 220, class: "key content symbol" },
  { value: "Del", code: 46, class: "key delete" },

  { value: "CapsLock", code: 20, class: "key capslock" },
  { value: "a", code: 65, class: "key content alpha" },
  { value: "s", code: 83, class: "key content alpha" },
  { value: "d", code: 68, class: "key content alpha" },
  { value: "f", code: 70, class: "key content alpha" },
  { value: "g", code: 71, class: "key content alpha" },
  { value: "h", code: 72, class: "key content alpha" },
  { value: "j", code: 74, class: "key content alpha" },
  { value: "k", code: 75, class: "key content alpha" },
  { value: "l", code: 76, class: "key content alpha" },
  { value: ";", code: 186, class: "key content symbol" },
  { value: "'", code: 222, class: "key content symbol" },
  { value: "enter", code: 13, class: "key enter" },

  { value: "Shift", code: 16, class: "key shift_left" },
  { value: "/", code: 220, class: "key content symbol" },
  { value: "z", code: 90, class: "key content alpha" },
  { value: "x", code: 88, class: "key content alpha" },
  { value: "c", code: 67, class: "key content alpha" },
  { value: "v", code: 86, class: "key content alpha" },
  { value: "b", code: 66, class: "key content alpha" },
  { value: "n", code: 78, class: "key content alpha" },
  { value: "m", code: 77, class: "key content alpha" },
  { value: ",", code: 190, class: "key content symbol" },
  { value: ".", code: 188, class: "key content symbol" },
  { value: "/", code: 191, class: "key content symbol" },
  { value: ">", code: 38, class: "key arrow_top" },
  { value: "Shift", code: 16, class: "key shift_right" },

  { value: "Ctrl", code: 17, class: "key ctrl" },
  { value: "Win", code: 91, class: "key win" },
  { value: "Alt", code: 18, class: "key alt" },
  { value: "", code: 32, class: "key space" },
  { value: "Alt", code: 18, class: "key alt" },
  { value: "Ctrl", code: 17, class: "key ctrl" },
  { value: "<", code: 37, class: "key arrow_left" },
  { value: ">", code: 40, class: "key arrow_bottom" },
  { value: ">", code: 39, class: "key arrow_right" },
];

const keyboard = document.querySelector(".keyboard");

let keyboardDone = "";

for (key of keyboardKeys) {
  keyboardDone +=
    "<button class='" + key.class + "'>" + key.value + "</button>";
}
keyboard.innerHTML = keyboardDone;

// const container = document.querySelector(".container");
// const textarea = document.querySelector(".text-input");
// const alphabet = document.querySelectorAll(".alpha");
// const key = document.querySelectorAll(".key");

// function keyboardClick(e) {
//   if (e.target.classList.contains("key")) {
//     if (e.target.classList.contains("space")) {
//       textarea.textContent += " ";
//     }
//     if (e.target.classList.contains("content")) {
//       const getContent = e.target.textContent;
//       textarea.textContent += getContent;
//     }
//     if (e.target.classList.contains("backspace")) {
//       textarea.textContent = textarea.textContent.substring(
//         0,
//         textarea.textContent.length - 1
//       );
//     }
//   } else {
//     return;
//   }
// }

// container.addEventListener("click", );

// document.addEventListener(
//   "keydown",
//   (event) => {
//     let name = event.key;
//     let code = event.code;
//     console.log(code, name);
//     textarea.textContent = textarea.textContent + name;
//     //if (event)
//   },
//   false
// );
