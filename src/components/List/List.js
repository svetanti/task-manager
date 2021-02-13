import React from 'react';
import Task from '../Task/Task';

const List = ({ tasks }) => {
  return (
    <ul className={`list ${tasks.length && 'list__type_not-empty'}`}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task} />
      ))}
    </ul>
  )
};

export default List;