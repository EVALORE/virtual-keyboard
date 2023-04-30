class Key {
  constructor(keyValues) {
    const button = document.createElement('button');
    this.code = keyValues.code;

    if ('value' in keyValues) {
      this.value = keyValues.value;
      this.currentValue = this.value;
    } else {
      this.values = keyValues;
      [this.currentValue] = this.values.en;
    }

    this.key = button;
    this.key.textContent = this.currentValue;
  }
}

export default Key;
