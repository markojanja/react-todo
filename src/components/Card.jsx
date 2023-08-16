import Button from './Button';

function Card({ task, onChange, onEdit, onDelete }) {
  return (
    <div className='todo-card'>
      <input type='checkbox' onChange={() => onChange(task)} checked={task.completed} />
      <p style={task.completed ? { textDecoration: 'line-through' } : null}>{task.name}</p>
      <Button className='edit' text='Edit' onClick={() => onEdit(task)} />
      <Button className='delete' text='Delete' onClick={() => onDelete(task)} />
    </div>
  );
}

export default Card;
