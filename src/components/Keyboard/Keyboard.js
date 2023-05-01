import './Keyboard.scss';
import Button from '../Button/Button';
import browserEvents from '../../utils/browserEvents';

function Keyboard(keys, textarea) {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const KeyboardButtonsLink = [];

  keys.forEach((key) => {
    const button = Button(key, textarea, KeyboardButtonsLink);
    keyboard.appendChild(button.key);
    KeyboardButtonsLink.push(button);
  });

  browserEvents(KeyboardButtonsLink);

  return keyboard;
}
export default Keyboard;
