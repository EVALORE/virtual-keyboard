function insertValue(str, substr, pos) {
  const array = str.split('');
  array.splice(pos, 0, substr);
  return array.join('');
}

export default insertValue;
