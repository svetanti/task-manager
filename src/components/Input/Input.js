import React, { useState } from 'react';

const Input = ({ selectedOption }) => {
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const delimiter = value.indexOf('//');
  const task = delimiter !== -1 ? value.slice(0, delimiter) : value;
  const note = delimiter !== -1 ? value.slice(delimiter) : '';

  return (
    <label className='input'>
      <div className={`input__list-marker input__list-marker_type_${selectedOption}`}></div>
      <div className='input__note'>
        <div className='input__task'>{task ? task : 'Write a new task'}</div>
        {note === '//' ? '// Wtite a note' : note}</div>
      <input
        className='input__field'
        value={value}
        onChange={handleChange}
        autoFocus={true}
        placeholder='Write a new task'></input>
    </label>
  )
};

export default Input;