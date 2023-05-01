import './Textarea.scss';

function Textarea() {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.cols = 91;
  textarea.rows = 10;

  return textarea;
}

export default Textarea;
