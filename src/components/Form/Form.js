import React, { useRef, useState } from 'react';
import useOutsideClick from '../../utils/useOutsideClick';
import { setDate, setSelectedOption } from '../../utils/utils';
import Date from '../Date/Date';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Form = (props) => {
  const currentDate = setDate();
  const formRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [taskData, setTaskData] = useState({
    task: '',
    date: currentDate,
    list: 'no-list'
  });
  const selectedOption = setSelectedOption(taskData.list);

  useOutsideClick(formRef, () => {
    handleSubmit();
  });

  const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => {
    setEditMode(false)
  };

  const handleSubmit = () => {
    taskData.task !== '' && props.addTask(taskData);
    disableEditMode();
    setTaskData({
      task: '',
      date: currentDate,
      list: 'no-list'
    });
  }
  const handleChange = (evt) => {
    setTaskData({ ...taskData, [evt.target.name]: evt.target.value })
  };

  return (
    <>
      { editMode
        ? (<form className='form form__block' onSubmit={handleSubmit} ref={formRef}>
          <Input
            editMode={editMode}
            selectedOption={selectedOption}
            value={taskData.task}
            handleChange={handleChange} />
          <Date handleDateChange={handleChange} />
          <Select selectedOption={selectedOption} handleChange={handleChange} />
        </form>)
        : (<div className='form__block form__block_tip' onMouseUp={enableEditMode} >
          Write a new task
        </div>)
      }
    </>
  )
};

export default Form;