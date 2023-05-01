import './Button.scss';
import Key from '../../Classes/Key';
import addEventToKey from '../../utils/addEventToKey';

function Button(keyValues, textarea, links) {
  const button = new Key(keyValues);
  button.key.className = 'key';

  button.action = addEventToKey(textarea, button, links);

  if (button.currentValue === 'Shift') {
    button.key.addEventListener('mousedown', button.action);
    button.key.addEventListener('mouseup', button.action);
  } else {
    button.key.addEventListener('click', () => {
      button.action();
      // button.key.classList.remove('active');
    });
  }

  return button;
}

export default Button;
