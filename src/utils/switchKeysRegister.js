function switchKeysRegister(links, isShift) {
  links.forEach((link) => {
    if (link.type === 'regular') {
      const s = link;
      if (isShift) {
        [s.currentValue] = link.values;
      } else {
        [, s.currentValue] = link.values;
      }
      s.key.textContent = link.currentValue;
    }
  });
}

export default switchKeysRegister;
