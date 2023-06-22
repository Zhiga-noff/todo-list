import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useEffect, useState } from 'react';
import { createNewTask } from './modules/create-new-task';

export const TaskName = ({ refreshFlag, refreshAllRequests }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    createNewTask(setTasks, setIsLoading);
  }, [refreshFlag]);

  return isLoading ? (
    <div className={style.loader}></div>
  ) : (
    tasks.map(({ id, title }) => (
      <li className={style.task} key={id}>
        <p>{title}</p>
        <div className={style.icons}>
          <ButtonCreate
            flag={false}
            itemId={id}
            refreshAllRequests={refreshAllRequests}
          />
        </div>
      </li>
    ))
  );
};
