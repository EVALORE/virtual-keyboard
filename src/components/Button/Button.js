import Key from '../../Classes/Key';

function Button(key) {
  const button = new Key(key);
  console.log(button);
  button.key.className = 'key';
  return button.key;
}

export default Button;
