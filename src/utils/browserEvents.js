function browserEvents(KeyboardButtonsLink) {
  window.addEventListener('keydown', (first) => {
    first.preventDefault();

    if (first.key === 'Shift' && first.repeat) return;
    KeyboardButtonsLink.forEach((button) => {
      if ((first.code === button.code || first.key === button.currentValue) && first.key !== 'Alt') {
        button.action();
        button.key.classList.add('active');
      }
    });
    KeyboardButtonsLink.forEach((button) => {
      if (first.code === button.code || first.key === button.currentValue) {
        button.key.classList.add('active');
      }
    });

    if (first.ctrlKey) {
      if (first.repeat) return;
      if (first.key === 'Alt') {
        KeyboardButtonsLink.forEach((button) => {
          if (button.currentValue === 'Alt') {
            button.action();
            button.key.classList.add('active');
          }
        });
      }
    }
  });

  window.addEventListener('keyup', (first) => {
    KeyboardButtonsLink.forEach((button) => {
      button.key.classList.remove('active');
    });

    if (first.key !== 'Shift') return;
    KeyboardButtonsLink.forEach((button) => {
      if (button.currentValue === 'Shift') {
        button.action();
        button.key.classList.remove('active');
      }
    });
  });

  window.addEventListener('load', () => {
    if (localStorage.getItem('lang') === 'ru') {
      KeyboardButtonsLink.forEach((button) => {
        if (button.currentValue === 'Alt') {
          button.action();
          button.key.classList.remove('active');
        }
      });
    }
  });
}

export default browserEvents;
