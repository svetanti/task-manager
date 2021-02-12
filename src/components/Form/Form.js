import React, { useState } from 'react';
import Date from '../Date/Date';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Form = () => {
  const [editMode, setEditMode] = useState(true);

  /* const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false); */

  return (
    <>
      { editMode
        ? (<form className='form form__block' /* onBlur={disableEditMode} */>
          <Input editMode={editMode} />
          <Date handleDateChange={() => console.log('Кря')} />
          <Select />
        </form>)
        : (<div className='form__block form__block_tip' /* onClick={enableEditMode} */>
          Write a new task
        </div>)
      }
    </>
  )
};

export default Form;