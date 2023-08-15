import Button from './Button';

function Form({ onSubmit, onChange, onClick, task, toggle }) {
  const { name } = task;
  return (
    <div className='form-container'>
      <form className='form' action='' onSubmit={onSubmit}>
        <input type='text' placeholder='Enter todo' onChange={onChange} value={name} />
        {!toggle ? <Button className='add' text='Add todo' /> : <Button className='save' text='Save' onClick={onClick} />}
      </form>
    </div>
  );
}

export default Form;
