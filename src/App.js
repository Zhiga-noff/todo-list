import style from './App.module.css';
import { useRef, useState } from 'react';
import { FormFieldTask } from './components/Form-field-task';
import { TaskName } from './components/TaskName';

export const App = () => {
  const [infoAboutTask, setInfoAboutTask] = useState({
    id: '',
    title: '',
    flagForButton: 'add',
    tasksList: [],
    inputFieldRef: useRef(null),
    noRefreshFlag: false,
  });

  return (
    <div className={style.app}>
      <FormFieldTask infoAboutTask={infoAboutTask} setInfoAboutTask={setInfoAboutTask} />
      <ul className={style.taskList}>
        <TaskName infoAboutTask={infoAboutTask} setInfoAboutTask={setInfoAboutTask} />
      </ul>
    </div>
  );
};
