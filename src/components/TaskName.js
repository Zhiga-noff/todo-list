import style from './styles/App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useEffect, useState } from 'react';
import { createNewTask } from './modules/create-new-task';
import { Link } from 'react-router-dom';

export const TaskName = ({
  refreshFlag,
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
}) => {
  const { tasksList } = infoAboutTask;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    createNewTask(setInfoAboutTask, setIsLoading);
  }, [refreshFlag]);

  return isLoading ? (
    <div className={style.loader}></div>
  ) : (
    tasksList.map(({ id, title }) => (
      <li className={style.task} key={id}>
        <Link to={`/task/${id}`}>
          <p>{title}</p>
          <div className={style.icons} />
        </Link>
      </li>
    ))
  );
};
