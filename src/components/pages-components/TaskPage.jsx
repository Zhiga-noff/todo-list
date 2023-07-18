import style from '../../styles/TaskActive.module.css';
import { renderRequestTask } from '../../modules/render-request-task';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { BreadCrumbs } from '../reuse-components/';
import CreateSelectedTask from '../global-components/CreateSelectedTask';
import PopupEditForm from '../global-components/PopupEditForm';
import { ContextTaskList } from '../../context/ContextTaskList';
import { ContextIsLoading } from '../../context';

export const TaskPage = () => {
  const { isLoading, dispatchIsLoading } = useContext(ContextIsLoading);
  const { taskList, dispatchTaskList } = useContext(ContextTaskList);
  const [editFlag, setEditFlag] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatchIsLoading({ type: 'SET_IS_LOADING', payload: true });
    renderRequestTask(id, dispatchTaskList, dispatchIsLoading);
  }, []);

  return (
    <>
      <div className={style.form}>
        <BreadCrumbs />
        {isLoading ? (
          <p className={style.title}>Ожидаем ответа</p>
        ) : (
          <p className={style.title}>{taskList[0]?.title}</p>
        )}
      </div>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <CreateSelectedTask setEditFlag={setEditFlag} />
      )}
      {editFlag && <PopupEditForm setEditFlag={setEditFlag} />}
    </>
  );
};
