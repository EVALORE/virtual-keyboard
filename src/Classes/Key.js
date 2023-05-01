class Key {
  constructor(keyValues) {
    const button = document.createElement('button');
    this.code = keyValues.code;

    if ('value' in keyValues) {
      this.value = keyValues.value;
      this.currentValue = this.value;
      this.type = 'special';
    } else {
      this.lang = keyValues;
      this.values = this.lang.en;
      [this.currentValue] = this.values;
      this.type = 'regular';
    }

    this.key = button;
    this.key.textContent = this.currentValue;
    this.action = null;
  }
}

export default Key;
