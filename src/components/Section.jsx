import TaskList from './TaskList';

function Section({ taskList, handleCompleted, handleEditTask, handleDeleteTask }) {
  const total = taskList.length;

  const completed = taskList.filter((t) => {
    return t.completed;
  });

  return (
    <section className='todos-container'>
      <h2>Todo list</h2>
      {total === 0 ? (
        <p>You don't have any tasks yet!!!</p>
      ) : (
        <p>
          tasks completed: {completed.length}/{total}
        </p>
      )}
      <TaskList taskList={taskList} handleCompleted={handleCompleted} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
    </section>
  );
}
export default Section;
