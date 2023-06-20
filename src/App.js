import style from './App.module.css';
import { useEffect, useRef, useState } from 'react';
import { FormFieldTask } from './modules/Form-field-task';
import { ButtonCreate } from './modules/ButtonCreate';
import { TaskName } from './modules/TaskName';

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';
export const TODOS_URL = 'http://localhost:3005/todos';

async function createNewTask(setTasks, setIsLoading) {
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();
    setTasks(result);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
}

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [buttonFlagRefresh, setButtonFlagRefresh] = useState(false);
  const [taskId, setTaskId] = useState('');
  const [isEditTask, setIsEditTask] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    createNewTask(setTasks, setIsLoading);
    setButtonFlagRefresh(false);
  }, [refreshFlag]);

  return (
    <div className={style.app}>
      <FormFieldTask
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
      />
      <ul className={style.taskList}>
        {isLoading ? (
          <div className={style.loader}></div>
        ) : (
          <TaskName
            tasks={tasks}
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
