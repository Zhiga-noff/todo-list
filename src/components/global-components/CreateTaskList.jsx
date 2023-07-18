import style from '../../styles/App.module.css';
import { useContext, useEffect, useState } from 'react';
import { renderTaskList } from '../../modules/render-task-list';
import { Link } from 'react-router-dom';
import { ContextTaskList } from '../../context/ContextTaskList';
import { ContextIsLoading } from '../../context/ContextIsLoading';

export const CreateTaskList = ({ refreshFlag }) => {
  const { taskList, dispatchTaskList } = useContext(ContextTaskList);
  const { isLoading, dispatchIsLoading } = useContext(ContextIsLoading);

  useEffect(() => {
    dispatchIsLoading({ type: 'SET_IS_LOADING', payload: true });
    renderTaskList(dispatchTaskList, dispatchIsLoading);
  }, [refreshFlag]);

  console.log(taskList);

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
