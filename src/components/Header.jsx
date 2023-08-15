import Form from './Form';

function Header({ onFormSubmit, onFormChange, onSave, task, toggle }) {
  return (
    <header className='header'>
      <Form onSubmit={onFormSubmit} onChange={onFormChange} onClick={onSave} task={task} toggle={toggle} />
    </header>
  );
}

export default Header;
