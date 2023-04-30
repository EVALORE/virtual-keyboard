import Button from '../Button/Button';

function Keyboard(keys) {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  keys.forEach((key) => {
    keyboard.appendChild(Button(key));
  });

  return keyboard;
}

export default Keyboard;
