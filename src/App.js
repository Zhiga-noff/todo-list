import style from './App.module.css';
import { useEffect, useState } from 'react';
import { FormFieldTask } from './components/Form-field-task';
import { ButtonCreate } from './components/ButtonCreate';
import { TaskName } from './components/TaskName';
import { createNewTask } from './components/modules/create-new-task';

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';
export const TODOS_URL = 'http://localhost:3005/todos\n';

export const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [buttonFlagRefresh, setButtonFlagRefresh] = useState(false);

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className={style.app}>
      <FormFieldTask
        refreshFlag={refreshFlag}
        setRefreshFlag={setRefreshFlag}
        buttonFlagRefresh={buttonFlagRefresh}
      />
      <ul className={style.taskList}>
        <TaskName refreshFlag={refreshFlag} refreshAllRequests={refreshAllRequests} />
      </ul>
    </div>
  );
};
