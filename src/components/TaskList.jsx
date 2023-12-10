import Card from './Card';

const TaskList = ({ taskList, handleCompleted, handleEditTask, handleDeleteTask }) => {
  return (
    <>
      {taskList.map((task) => (
        <Card key={task.id} task={task} onChange={handleCompleted} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      ))}
    </>
  );
};

export default TaskList;
