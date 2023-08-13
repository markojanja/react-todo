import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [task, setTask] = useState({ name: '' });
  const [taskList, setTaskList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [editTask, setEditTask] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (task.name !== '') {
      setTaskList([...taskList, task]);
      setTask({ name: '' });
      setToggle(false);
    }
  }
  function handleCompleted(obj) {
    const editedList = taskList.map((task) => {
      if (task.id === obj.id) {
        return { ...task, completed: !obj.completed };
      }
      return task;
    });
    setTaskList(editedList);
  }

  function handleSave() {
    if (task.name !== '') {
      const updatedTaskList = taskList.map((existingTask) => {
        if (existingTask.id === editTask.id) {
          console.log('found task');
          return { ...existingTask, name: task.name, completed: false };
        }
        return existingTask;
      });

      setTaskList(updatedTaskList);
      setEditTask(null);
      setTask({ name: '' });
      setToggle(false);
    }
  }

  function handleEditTask(obj) {
    const clonedTask = { ...obj }; // Clone the found task
    setTask(clonedTask);
    setEditTask(clonedTask);
    setToggle(true);
  }

  function handleTaskInput(e) {
    setTask({ ...task, id: Math.random() * 1000 + 1, name: e.target.value, completed: false });
  }
  function handleDeleteTask(targetTask) {
    const updatedTaskList = taskList.filter((task) => task.name !== targetTask.name);
    setTaskList(updatedTaskList);
  }

  return (
    <div className='app'>
      <Navbar />
      <header className='header'>
        <div className='form-container'>
          <form className='form' action='' onSubmit={handleFormSubmit}>
            <input type='text' placeholder='add todo' onChange={handleTaskInput} value={task.name} />
            {!toggle && <button type='submit'>Add todo</button>}
          </form>
          {toggle && (
            <button type='button' onClick={handleSave}>
              Save
            </button>
          )}
        </div>
      </header>
      <section className='todos-container'>
        {taskList.map((obj, index) => (
          <div key={index} className='todo-card'>
            <input type='checkbox' onChange={() => handleCompleted(obj)} checked={obj.completed} />
            <p style={obj.completed ? { textDecoration: 'line-through' } : null}>{obj.name}</p>
            <button onClick={() => handleEditTask(obj)}>edit</button>
            <button onClick={() => handleDeleteTask(obj)}>delete</button>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
