import React from 'react';

const Date = ({ handleDateChange }) => {
  return (
    <label className='date'>
      <input type='date' className='date__field' onChange={handleDateChange}></input>
    </label>)
};

export default Date;