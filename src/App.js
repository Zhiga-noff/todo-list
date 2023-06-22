import style from './App.module.css';
import { useState } from 'react';
import { FormFieldTask } from './components/Form-field-task';
import { TaskName } from './components/TaskName';

export const TODOS_URL = 'http://localhost:3005/todos\n';

export const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className={style.app}>
      <FormFieldTask refreshAllRequests={refreshAllRequests} />
      <ul className={style.taskList}>
        <TaskName refreshFlag={refreshFlag} refreshAllRequests={refreshAllRequests} />
      </ul>
    </div>
  );
};
