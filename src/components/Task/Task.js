import React from 'react';
import { setNoteText, setSelectedOption, setTaskText } from '../../utils/utils';

const Task = ({ task }) => {
  const taskText = setTaskText(task.task);
  const noteText = setNoteText(task.task).slice(2);
  const currentList = setSelectedOption(task.list);

  return (
    <li className={`task task__type_${currentList}`}>
      <span className='task__date'>{task.date}</span>
      <p className='task__task'>{taskText}</p>
      <p className='task__note'>{noteText}</p>
    </li>)
};

export default Task;