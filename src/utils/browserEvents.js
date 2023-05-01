function browserEvents(KeyboardButtonsLink) {
  window.addEventListener('keydown', (first) => {
    first.preventDefault();

    if (first.key === 'Shift' && first.repeat) return;
    KeyboardButtonsLink.forEach((button) => {
      if ((first.code === button.code || first.key === button.currentValue) && first.key !== 'Alt') {
        button.action();
      }
    });

    if (first.ctrlKey) {
      if (first.repeat) return;
      if (first.key === 'Alt') {
        KeyboardButtonsLink.forEach((button) => {
          if (button.currentValue === 'Alt') {
            button.action();
          }
        });
      }
    }
  });

  window.addEventListener('keyup', (first) => {
    if (first.key !== 'Shift') return;
    KeyboardButtonsLink.forEach((button) => {
      if (button.currentValue === 'Shift') {
        button.action();
      }
    });
  });

  window.addEventListener('load', () => {
    if (localStorage.getItem('lang') === 'ru') {
      KeyboardButtonsLink.forEach((button) => {
        if (button.currentValue === 'Alt') {
          button.action();
        }
      });
    }
  });
}

export default browserEvents;
