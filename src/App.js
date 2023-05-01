import './style.scss';
import Textarea from './components/Textarea/Textarea';
import Keyboard from './components/Keyboard/Keyboard';
import keys from './data/keys';

function createApp() {
  const App = document.createElement('div');
  const text1 = document.createElement('p');
  text1.textContent = 'Keyboard is created on Windows system.';
  const text2 = document.createElement('p');
  text2.textContent = 'Combination to change language: Ctrl + Alt.';
  App.classList.add('container');

  const textarea = Textarea();
  const keyboard = Keyboard(keys, textarea);

  App.appendChild(textarea);
  App.appendChild(keyboard);
  App.appendChild(text1);
  App.appendChild(text2);
  return App;
}

export default createApp;
