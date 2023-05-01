document.body.innerHTML = "<div class='wrapper'><div class='container'><textarea name='textarea' id='' cols='95' rows='10' class='text-input' ></textarea ><div class='keyboard'></div><p class='change_lang'>Press to change language: Ctrl + Alt</p><p class='windows'>Клавиатура создана в операционной системе Windows</p></div ></div > ";

const keyboardKeys = [
  {
    value: '`',
    code: 'Backquote',
    class: 'key content symbol',
    valueShift: '~',
    valueRus: 'ё',
    valueRusUppercase: 'Ё',
  },
  {
    value: '1',
    code: 'Digit1',
    class: 'key content number',
    valueShift: '!',
  },
  {
    value: '2',
    code: 'Digit2',
    class: 'key content number',
    valueShift: '@',
  },
  {
    value: '3',
    code: 'Digit3',
    class: 'key content number',
    valueShift: '#',
  },
  {
    value: '4',
    code: 'Digit4',
    class: 'key content number',
    valueShift: '$',
  },
  {
    value: '5',
    code: 'Digit5',
    class: 'key content number',
    valueShift: '%',
  },
  {
    value: '6',
    code: 'Digit6',
    class: 'key content number',
    valueShift: '^',
  },
  {
    value: '7',
    code: 'Digit7',
    class: 'key content number',
    valueShift: '&',
  },
  {
    value: '8',
    code: 'Digit8',
    class: 'key content number',
    valueShift: '*',
  },
  {
    value: '9',
    code: 'Digit9',
    class: 'key content number',
    valueShift: '(',
  },
  {
    value: '0',
    code: 'Digit0',
    class: 'key content number',
    valueShift: ')',
  },
  {
    value: '-',
    code: 'Minus',
    class: 'key content symbol',
    valueShift: '_',
  },
  {
    value: '=',
    code: 'Equal',
    class: 'key content symbol',
    valueShift: '+',
  },
  {
    value: 'Backspace',
    code: 'Backspace',
    class: 'key backspace',
  },

  { value: 'Tab', code: 'Tab', class: 'key tab' },
  {
    value: 'q',
    code: 'KeyQ',
    class: 'key content alpha',
    valueUppercase: 'Q',
    valueRus: 'й',
    valueRusUppercase: 'Й',
  },
  {
    value: 'w',
    code: 'KeyW',
    class: 'key content alpha',
    valueUppercase: 'W',
    valueRus: 'ц',
    valueRusUppercase: 'Ц',
  },
  {
    value: 'e',
    code: 'KeyE',
    class: 'key content alpha',
    valueUppercase: 'E',
    valueRus: 'у',
    valueRusUppercase: 'У',
  },
  {
    value: 'r',
    code: 'KeyR',
    class: 'key content alpha',
    valueUppercase: 'R',
    valueRus: 'к',
    valueRusUppercase: 'К',
  },
  {
    value: 't',
    code: 'KeyT',
    class: 'key content alpha',
    valueUppercase: 'T',
    valueRus: 'е',
    valueRusUppercase: 'Е',
  },
  {
    value: 'y',
    code: 'KeyY',
    class: 'key content alpha',
    valueUppercase: 'Y',
    valueRus: 'н',
    valueRusUppercase: 'Н',
  },
  {
    value: 'u',
    code: 'KeyU',
    class: 'key content alpha',
    valueUppercase: 'U',
    valueRus: 'г',
    valueRusUppercase: 'Г',
  },
  {
    value: 'i',
    code: 'KeyI',
    class: 'key content alpha',
    valueUppercase: 'I',
    valueRus: 'ш',
    valueRusUppercase: 'Ш',
  },
  {
    value: 'o',
    code: 'KeyO',
    class: 'key content alpha',
    valueUppercase: 'O',
    valueRus: 'щ',
    valueRusUppercase: 'Щ',
  },
  {
    value: 'p',
    code: 'KeyP',
    class: 'key content alpha',
    valueUppercase: 'P',
    valueRus: 'з',
    valueRusUppercase: 'З',
  },
  {
    value: '[',
    code: 'BracketLeft',
    class: 'key content symbol',
    valueRus: 'х',
    valueRusUppercase: 'Х',
  },
  {
    value: ']',
    code: 'BracketRight',
    class: 'key content symbol',
    valueRus: 'ъ',
    valueRusUppercase: 'Ъ',
  },
  {
    value: '\\',
    code: 'Backslash',
    class: 'key content symbol',
    valueShift: '/',
  },
  { value: 'Del', code: 'Delete', class: 'key delete' },

  {
    value: 'CapsLock',
    code: 'CapsLock',
    class: 'key capslock',
  },
  {
    value: 'a',
    code: 'KeyA',
    class: 'key content alpha',
    valueUppercase: 'A',
    valueRus: 'ф',
    valueRusUppercase: 'Ф',
  },
  {
    value: 's',
    code: 'KeyS',
    class: 'key content alpha',
    valueUppercase: 'S',
    valueRus: 'ы',
    valueRusUppercase: 'Ы',
  },
  {
    value: 'd',
    code: 'KeyD',
    class: 'key content alpha',
    valueUppercase: 'D',
    valueRus: 'в',
    valueRusUppercase: 'В',
  },
  {
    value: 'f',
    code: 'KeyF',
    class: 'key content alpha',
    valueUppercase: 'F',
    valueRus: 'а',
    valueRusUppercase: 'А',
  },
  {
    value: 'g',
    code: 'KeyG',
    class: 'key content alpha',
    valueUppercase: 'G',
    valueRus: 'п',
    valueRusUppercase: 'П',
  },
  {
    value: 'h',
    code: 'KeyH',
    class: 'key content alpha',
    valueUppercase: 'H',
    valueRus: 'р',
    valueRusUppercase: 'Р',
  },
  {
    value: 'j',
    code: 'KeyJ',
    class: 'key content alpha',
    valueUppercase: 'J',
    valueRus: 'о',
    valueRusUppercase: 'О',
  },
  {
    value: 'k',
    code: 'KeyK',
    class: 'key content alpha',
    valueUppercase: 'K',
    valueRus: 'л',
    valueRusUppercase: 'Л',
  },
  {
    value: 'l',
    code: 'KeyL',
    class: 'key content alpha',
    valueUppercase: 'L',
    valueRus: 'д',
    valueRusUppercase: 'Д',
  },
  {
    value: ';',
    code: 'Semicolon',
    class: 'key content symbol',
    valueRus: 'ж',
    valueRusUppercase: 'Ж',
  },
  {
    value: "'",
    code: 'Quote',
    class: 'key content symbol',
    valueRus: 'э',
    valueRusUppercase: 'Э',
  },
  { value: 'Enter', code: 'Enter', class: 'key enter' },

  { value: 'Shift', code: 'ShiftLeft', class: 'key shift_left shift' },
  {
    value: '\\',
    code: 'Backslash',
    class: 'key content symbol',
    valueRus: ',',
  },
  {
    value: 'z',
    code: 'KeyZ',
    class: 'key content alpha',
    valueUppercase: 'Z',
    valueRus: 'я',
    valueRusUppercase: 'Я',
  },
  {
    value: 'x',
    code: 'KeyX',
    class: 'key content alpha',
    valueUppercase: 'X',
    valueRus: 'ч',
    valueRusUppercase: 'Ч',
  },
  {
    value: 'c',
    code: 'KeyC',
    class: 'key content alpha',
    valueUppercase: 'C',
    valueRus: 'с',
    valueRusUppercase: 'С',
  },
  {
    value: 'v',
    code: 'KeyV',
    class: 'key content alpha',
    valueUppercase: 'V',
    valueRus: 'м',
    valueRusUppercase: 'М',
  },
  {
    value: 'b',
    code: 'KeyB',
    class: 'key content alpha',
    valueUppercase: 'B',
    valueRus: 'и',
    valueRusUppercase: 'И',
  },
  {
    value: 'n',
    code: 'KeyN',
    class: 'key content alpha',
    valueUppercase: 'N',
    valueRus: 'т',
    valueRusUppercase: 'Т',
  },
  {
    value: 'm',
    code: 'KeyM',
    class: 'key content alpha',
    valueUppercase: 'M',
    valueRus: 'ь',
    valueRusUppercase: 'Ь',
  },
  {
    value: ',',
    code: 'Comma',
    class: 'key content symbol',
    valueRus: 'б',
    valueRusUppercase: 'Б',
  },
  {
    value: '.',
    code: 'Period',
    class: 'key content symbol',
    valueRus: 'ю',
    valueRusUppercase: 'Ю',
  },
  {
    value: '/',
    code: 'Slash',
    class: 'key content symbol',
    valueRus: '.',
  },
  { value: '↑', code: 'ArrowUp', class: 'key arrow_top' },
  {
    value: 'Shift',
    code: 'ShiftRight',
    class: 'key shift_right shift',
  },

  { value: 'Ctrl', code: 'ControlLeft', class: 'key ctrl' },
  { value: 'Win', code: 'MetaLeft', class: 'key win' },
  { value: 'Alt', code: 'AltLeft', class: 'key alt' },
  { value: '', code: 'Space', class: 'key space' },
  { value: 'Alt', code: 'AltRight', class: 'key alt' },
  { value: 'Ctrl', code: 'ControlRight', class: 'key ctrl' },
  { value: '←', code: 'ArrowLeft', class: 'key arrow_left' },
  { value: '↓', code: 'ArrowDown', class: 'key arrow_bottom' },
  { value: '→', code: 'ArrowRight', class: 'key arrow_right' },
];

const keyboard = document.querySelector('.keyboard');
let alphabet = [];

function buildKeyboard(type) {
  let keyboardDone = '';

  keyboardKeys.forEach((key) => {
    let val = '';
    if (
      Object.prototype.hasOwnProperty.call(key, 'valueRus')
      && type === 'eng'
    ) {
      val = key.value;
    } else if (
      Object.prototype.hasOwnProperty.call(key, 'valueRus')
      && type !== 'eng'
    ) {
      val = key.valueRus;
    } else {
      val = key.value;
    }
    keyboardDone += `<button id='${key.code}' class='${key.class}'>${val}</button>`;
  });
  keyboard.innerHTML = keyboardDone;
  alphabet = document.querySelectorAll('.alpha');
}

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'eng');
  buildKeyboard('eng');
} else {
  buildKeyboard(localStorage.getItem('lang'));
}

const keyboardElement = document.querySelector('.keyboard');
const textarea = document.querySelector('.text-input');

let isCaps = false;
function caps(btn) {
  const capslockBtn = document.querySelector('.capslock');
  if (isCaps === false) {
    for (let i = 0; i < alphabet.length; i += 1) {
      const alphaValue = alphabet[i].textContent;
      alphabet[i].textContent = alphaValue.toUpperCase();
    }
    isCaps = true;
    if (btn === 'capslock') capslockBtn.classList.add('active');
  } else {
    for (let i = 0; i < alphabet.length; i += 1) {
      const alphaValue = alphabet[i].textContent;
      alphabet[i].textContent = alphaValue.toLowerCase();
    }
    isCaps = false;
    if (btn === 'capslock') capslockBtn.classList.remove('active');
  }
}

let isLang = '';

function lang(btn) {
  if (isLang === '') {
    isLang = btn;
  } else if (btn !== isLang) {
    if (localStorage.getItem('lang') === 'eng') {
      localStorage.setItem('lang', 'rus');
      buildKeyboard('rus');
    } else if (localStorage.getItem('lang') === 'rus') {
      localStorage.setItem('lang', 'eng');
      buildKeyboard('eng');
    }
    isLang = '';
  }
}

function keyboardClick(e) {
  const cursorPosition = textarea.selectionStart;
  const isEnd = textarea.selectionStart === textarea.value.length;

  if (e.target.classList.contains('key')) {
    if (e.target.classList.contains('content')) {
      const getContent = e.target.childNodes[0].nodeValue;
      if (isEnd) {
        textarea.value += getContent;
      } else {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
          + getContent
          + textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('backspace')) {
      if (isEnd) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1);
      } else if (textarea.selectionStart !== 0) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
          + textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosition - 1;
        textarea.selectionEnd = cursorPosition - 1;
      }
    }
    if (e.target.classList.contains('delete')) {
      if (!isEnd) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
          + textarea.value.slice(textarea.selectionStart + 1);
        textarea.selectionStart = cursorPosition;
        textarea.selectionEnd = cursorPosition;
      }
    }
    if (e.target.classList.contains('enter')) {
      if (isEnd) {
        textarea.value += '\r\n';
      } else if (textarea.selectionStart !== 0) {
        const slicedElement = textarea.value.slice(textarea.selectionStart);
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}\r\n${slicedElement}`;
        textarea.selectionStart -= slicedElement.length;
        textarea.selectionEnd -= slicedElement.length;
      }
    }
    if (e.target.classList.contains('space')) {
      if (isEnd) {
        textarea.value += ' ';
      } else if (textarea.selectionStart !== 0) {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )} ${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('tab')) {
      if (isEnd) {
        textarea.value += '  ';
      } else if (textarea.selectionStart !== 0) {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}  ${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 2;
        textarea.selectionEnd = cursorPosition + 2;
      }
    }
    if (e.target.classList.contains('arrow_top')) {
      if (isEnd) {
        textarea.value += '↑';
      } else {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}↑${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('arrow_bottom')) {
      if (isEnd) {
        textarea.value += '↓';
      } else {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}↓${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('arrow_left')) {
      if (isEnd) {
        textarea.value += '←';
      } else {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}←${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('arrow_right')) {
      if (isEnd) {
        textarea.value += '→';
      } else {
        textarea.value = `${textarea.value.slice(
          0,
          textarea.selectionStart,
        )}→${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosition + 1;
        textarea.selectionEnd = cursorPosition + 1;
      }
    }
    if (e.target.classList.contains('shift')) {
      caps('shift');
    }
    if (e.target.classList.contains('capslock')) {
      caps('capslock');
    }

    if (e.target.classList.contains('alt')) {
      lang('alt');
    }
    if (e.target.classList.contains('ctrl')) {
      lang('ctrl');
    }
  }
}

keyboardElement.addEventListener('click', keyboardClick);

document.addEventListener(
  'keydown',
  (event) => {
    event.preventDefault();
    const { code } = event;
    const keyElement = document.getElementById(code);
    keyElement.click();
    if (code !== 'CapsLock') keyElement.classList.add('active');
  },
  false,
);
document.addEventListener(
  'keyup',
  (event) => {
    const { code } = event;
    const keyElement = document.getElementById(code);
    if (code !== 'CapsLock') keyElement.classList.remove('active');
    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
      caps();
    }
    if (
      code === 'AltRight'
      || code === 'AltLeft'
      || code === 'ControlRight'
      || code === 'ControlLeft'
    ) {
      isLang = '';
    }
  },
  false,
);
