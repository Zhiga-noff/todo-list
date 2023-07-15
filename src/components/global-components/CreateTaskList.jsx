import style from '../styles/App.module.css';
import { useEffect, useState } from 'react';
import { renderTaskList } from '../../modules/render-task-list';
import { Link } from 'react-router-dom';

export const CreateTaskList = ({ refreshFlag, taskList, setTaskList }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    renderTaskList(setTaskList, setIsLoading);
  }, [refreshFlag]);

  return isLoading ? (
    <div className={style.loader}></div>
  ) : (
    taskList.map(({ id, title }) => (
      <li className={style.task} key={id}>
        <Link to={`/task/${id}`}>
          <p>{title}</p>
          <div className={style.icons} />
        </Link>
      </li>
    ))
  );
};
