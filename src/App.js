import style from './components/styles/App.module.css';
import { useRef, useState } from 'react';
import { FormFieldTask } from './components/Form-field-task';
import { TaskName } from './components/TaskName';
import { Routes, Route } from 'react-router-dom';
import { CreateActiveTask } from './components/CreateActiveTask';

export const TODOS_URL = 'http://localhost:3005/todos\n';

export const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [infoAboutTask, setInfoAboutTask] = useState({
    id: '',
    title: '',
    flagForButton: 'add',
    tasksList: [],
    inputFieldRef: useRef(null),
    noRefreshFlag: false,
  });

  const refreshAllRequests = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className={style.app}>
      <FormFieldTask
        refreshAllRequests={refreshAllRequests}
        infoAboutTask={infoAboutTask}
        setInfoAboutTask={setInfoAboutTask}
      />
      <ul className={style.taskList}>
        <Routes>
          <Route
            path={'/'}
            element={
              <TaskName
                refreshFlag={refreshFlag}
                refreshAllRequests={refreshAllRequests}
                infoAboutTask={infoAboutTask}
                setInfoAboutTask={setInfoAboutTask}
              />
            }
          />
          <Route path={`/task`}>
            <Route
              path={':id'}
              element={
                <CreateActiveTask
                  infoAboutTask={infoAboutTask}
                  setInfoAboutTask={setInfoAboutTask}
                />
              }
            />
          </Route>
          <Route path={'*'} />
        </Routes>
      </ul>
    </div>
  );
};
