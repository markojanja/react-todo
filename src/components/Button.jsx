function Button({ className, text, onClick }) {
  let type = text;
  if (className === 'add') {
    type = <i className='fa-solid fa-plus'></i>;
  }
  if (className === 'edit') {
    type = <i className='fa-regular fa-pen-to-square'></i>;
  }
  if (className === 'delete') {
    type = <i className='fa-solid fa-trash-can'></i>;
  }

  if (className === 'save') {
    type = <i className='fa-solid fa-floppy-disk'></i>;
  }
  return (
    <button className={className} onClick={onClick}>
      {type}
    </button>
  );
}
export default Button;
