import Button from './Button';

function Form({ onSubmit, onChange, onClick, task, toggle }) {
  const { name } = task;
  return (
    <div className='form-container'>
      <form className='form' action='' onSubmit={onSubmit}>
        <input type='text' placeholder='add todo' onChange={onChange} value={name} />
        {!toggle ? <Button text='Add todo' /> : <Button text='Save' onClick={onClick} />}
      </form>
    </div>
  );
}

export default Form;
