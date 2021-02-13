import { v4 as uuidv4 } from 'uuid';

const ADD_TASK = 'task/ADD_TASK';

const initailState = {
  tasks: [],
};

const taskReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: uuidv4(),
        ...action.payload
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    default:
      return state;
  }
};

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export default taskReducer;
