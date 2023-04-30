function Textarea() {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.cols = 70;
  textarea.rows = 10;

  return textarea;
}

export default Textarea;
