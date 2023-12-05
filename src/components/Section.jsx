import Card from './Card';

function Section({ taskList, handleCompleted, handleEditTask, handleDeleteTask }) {
  const total = taskList.length;

  const completed = taskList.filter((t) => {
    return t.completed;
  });

  return (
    <section className='todos-container'>
      <h2>Todo list</h2>
      {total === 0 ? (
        <p>There are {total} tasks currently</p>
      ) : (
        <p>
          tasks completed: {completed.length}/{total}
        </p>
      )}

      {taskList.map((obj) => (
        <Card key={obj.id} task={obj} onChange={handleCompleted} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      ))}
    </section>
  );
}
export default Section;
