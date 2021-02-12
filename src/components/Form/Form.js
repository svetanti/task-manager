import React, { useState } from 'react';
import Date from '../Date/Date';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [editMode, setEditMode] = useState(true);

  const handleSelectChange = (evt) => {
    handleMarkChange(evt);
  };

  const handleMarkChange = (evt) => setSelectedOption(evt.target.value.split(' ').join('-').toLowerCase());

  const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false);

  return (
    <>
      { editMode
        ? (<form className='form form__block'/*  onBlur={disableEditMode} */ >
          <Input editMode={editMode} selectedOption={selectedOption} />
          <Date handleDateChange={() => console.log('Кря')} />
          <Select selectedOption={selectedOption} handleChange={handleSelectChange} />
        </form>)
        : (<div className='form__block form__block_tip' onClick={enableEditMode} >
          Write a new task
        </div>)
      }
    </>
  )
};

export default Form;