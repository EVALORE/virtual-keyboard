function switchKeysLanguage(links, lang, isShift) {
  links.forEach((link) => {
    if (link.type === 'regular') {
      const s = link;
      if (lang === 'en') {
        s.values = s.lang.ru;
      } else {
        s.values = s.lang.en;
      }
      if (!isShift) {
        [s.currentValue] = link.values;
      } else {
        [, s.currentValue] = link.values;
      }
      s.key.textContent = s.currentValue;
    }
  });
}

export default switchKeysLanguage;
