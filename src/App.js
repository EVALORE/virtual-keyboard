import './style.scss';
import Textarea from './components/Textarea/Textarea';
import Keyboard from './components/Keyboard/Keyboard';
import keys from './data/keys';

function createApp() {
  const App = document.createElement('div');
  App.classList.add('container');
  const textarea = Textarea();
  const keyboard = Keyboard(keys);

  App.appendChild(textarea, keyboard);
  return App;
}

export default createApp;
