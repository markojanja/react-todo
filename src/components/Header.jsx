import Form from './Form';

function Header({ task, toggle, handleFormSubmit, handleTaskInput, handleSave }) {
  return (
    <header className='header'>
      <Form onSubmit={handleFormSubmit} onChange={handleTaskInput} onClick={handleSave} task={task} toggle={toggle} />
    </header>
  );
}

export default Header;
