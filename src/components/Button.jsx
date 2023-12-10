function Button({ className, text, onClick }) {
  if (className === 'add') {
    text = <i className='fa-solid fa-plus'></i>;
  }
  if (className === 'edit') {
    text = <i className='fa-regular fa-pen-to-square'></i>;
  }
  if (className === 'delete') {
    text = <i className='fa-solid fa-trash-can'></i>;
  }

  if (className === 'save') {
    text = <i className='fa-solid fa-floppy-disk'></i>;
  }
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
