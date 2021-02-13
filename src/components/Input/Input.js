import React from 'react';
import { setNoteText, setTaskText } from '../../utils/utils';

const Input = ({ selectedOption, value, handleChange }) => {
  const taskText = setTaskText(value);
  const noteText = setNoteText(value);

  return (
    <label className='input'>
      <div className={`input__list-marker input__list-marker_type_${selectedOption}`}></div>
      <div className='input__note'>
        <div className='input__task'>{taskText ? taskText : 'Write a new task'}</div>
        {noteText === '//' ? '// Write a note' : noteText}</div>
      <input
        className='input__field'
        name='task'
        value={value}
        onChange={handleChange}
        autoFocus={true}
        placeholder='Write a new task'
        required></input>
    </label>
  )
};

export default Input;