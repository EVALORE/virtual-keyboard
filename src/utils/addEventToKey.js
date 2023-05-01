import insertValue from './insertValue';
import switchKeysLanguage from './switchKeysLanguage';
import switchKeysRegister from './switchKeysRegister';

function addEventToKey(textarea, key, keyLinks) {
  const button = key;
  const field = textarea;
  const links = keyLinks;

  let isShift = false;
  let lang = 'en';

  switch (button.code) {
    case 'CapsLock':
    case 'ShiftLeft':
    case 'ShiftRight':
      button.action = () => {
        switchKeysRegister(links, isShift);
        isShift = !isShift;
      };
      break;
    case 'AltLeft':
    case 'AltRight':
      button.action = () => {
        switchKeysLanguage(links, lang, isShift);
        lang = lang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', lang);
      };
      break;
    case 'Tab':
      button.action = () => {
        const index = field.selectionStart;
        field.value = insertValue(field.value, '    ', index);
        field.selectionEnd = index + 4;
      };
      break;
    case 'Space':
      button.action = () => {
        const index = field.selectionStart;
        field.value = insertValue(field.value, ' ', index);
        field.selectionEnd = index + 1;
      };
      break;
    case 'Backspace':
      button.action = () => {
        const index = field.selectionStart - 1;
        const val = field.value.split('');
        val.splice(index, 1);
        field.value = val.join('');
        field.selectionEnd = index;
      };
      break;
    case 'ControlLeft':
    case 'ControlRight':
    case 'MetaLeft':
      button.action = () => {};
      break;
    case 'Enter':
      button.action = () => {
        const index = field.selectionStart;
        field.value = insertValue(field.value, '\n', index);
        field.selectionEnd = index + 1;
      };
      break;
    case 'Delete':
      button.action = () => {
        const index = field.selectionStart;
        const val = field.value.split('');
        val.splice(index, 1);
        field.value = val.join('');
        field.selectionEnd = index;
      };
      break;
    default:
      button.action = () => {
        const index = field.selectionStart;
        field.value = insertValue(field.value, button.currentValue, index);
        field.selectionEnd = index + 1;
      };
      break;
  }

  return button.action;
}

export default addEventToKey;
