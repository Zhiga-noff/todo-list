import style from './App.module.css';
import { useEffect, useRef, useState } from 'react';
import { FormFieldTask } from './components/Form-field-task';
import { TaskName } from './components/TaskName';
import { createNewTask } from './components/modules/create-tasks';

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';
export const TODOS_URL = 'http://localhost:3005/todos';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [buttonFlagRefresh, setButtonFlagRefresh] = useState(false);
  const [taskId, setTaskId] = useState('');
  const [isEditTask, setIsEditTask] = useState(false);
  const [value, setValue] = useState('');
  const [clickFilter, setClickFilter] = useState(false);
  const [isSearchTask, setIsSearchTask] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    if (!clickFilter) {
      createNewTask(setTasks, setIsLoading);
    } else {
      setIsLoading(false);
    }
    setButtonFlagRefresh(false);
  }, [refreshFlag]);

  return (
    <div className={style.app}>
      <FormFieldTask
        tasks={tasks}
        setTasks={setTasks}
        refreshFlag={refreshFlag}
        setRefreshFlag={setRefreshFlag}
        buttonFlagRefresh={buttonFlagRefresh}
        isEditTask={isEditTask}
        setIsEditTask={setIsEditTask}
        value={value}
        setValue={setValue}
        setButtonFlagRefresh={setButtonFlagRefresh}
        taskId={taskId}
        setTaskId={setTaskId}
        inputRef={inputRef}
        clickFilter={clickFilter}
        setClickFilter={setClickFilter}
        isSearchTask={isSearchTask}
        setIsSearchTask={setIsSearchTask}
      />
      <ul className={style.taskList}>
        {isLoading ? (
          <div className={style.loader}></div>
        ) : (
          <TaskName
            tasks={tasks}
            setTasks={setTasks}
            refreshFlag={refreshFlag}
            setRefreshFlag={setRefreshFlag}
            setIsEditTask={setIsEditTask}
            setValue={setValue}
            setTaskId={setTaskId}
            inputRef={inputRef}
          />
        )}
      </ul>
    </div>
  );
};
