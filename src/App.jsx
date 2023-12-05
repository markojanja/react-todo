import { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Form from './components/Form';

function App() {
  const [task, setTask] = useState({ name: '' });
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [toggle, setToggle] = useState(false);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  //handling form submit
  function handleTaskInput(e) {
    setTask({ ...task, id: uuidv4(), name: e.target.value, completed: false });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (task.name !== '') {
      setTaskList([...taskList, task]);
      setTask({ name: '' });
      setToggle(false);
    }
  }

  // save and edit tasks
  function handleCompleted(obj) {
    const editedList = taskList.map((task) => {
      if (task.id === obj.id) {
        return { ...task, completed: !obj.completed };
      }
      return task;
    });
    setTaskList(editedList);
  }

  function handleEditTask(obj) {
    const clonedTask = { ...obj };
    setTask(clonedTask);
    setEditTask(clonedTask);
    setToggle(true);
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
  function handleDeleteTask(targetTask) {
    const updatedTaskList = taskList.filter((task) => task.id !== targetTask.id);
    setTaskList(updatedTaskList);
  }

  return (
    <div className='app'>
      <Navbar />
      <Header task={task} toggle={toggle} handleFormSubmit={handleFormSubmit} handleTaskInput={handleTaskInput} handleSave={handleSave} />
      <Section taskList={taskList} handleCompleted={handleCompleted} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
      <Footer />
    </div>
  );
}

export default App;
