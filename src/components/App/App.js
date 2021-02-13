import React from 'react';
import Form from '../../containers/TaskContainer';
import List from '../../containers/ListContainer';

const App = () => {
  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
