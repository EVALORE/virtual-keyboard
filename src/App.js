import './style.scss';
import createTextarea from './components/Textarea/Textarea';

function createApp() {
  const App = document.createElement('div');
  App.classList.add('container');
  const textarea = createTextarea();

  App.appendChild(textarea);

  return App;
}

export default createApp;
