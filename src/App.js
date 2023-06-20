import style from './App.module.css';
import { useEffect, useState } from 'react';
import { FormFieldTask } from './modules/Form-field-task';
import { ButtonCreate } from './modules/ButtonCreate';
import { TaskName } from './modules/TaskName';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';

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

  useEffect(() => {
    setIsLoading(true);
    createNewTask(setTasks, setIsLoading);
  }, []);

  return (
    <div className={style.app}>
      <FormFieldTask />
      <ul className={style.taskList}>
        {isLoading ? <div className={style.loader}></div> : <TaskName tasks={tasks} />}
      </ul>
    </div>
  );
};
