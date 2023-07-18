import style from '../../styles/TaskActive.module.css';
import { renderRequestTask } from '../../modules/render-request-task';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { BreadCrumbs } from '../reuse-components/';
import CreateSelectedTask from '../global-components/CreateSelectedTask';
import PopupEditForm from '../global-components/PopupEditForm';
import { ContextTaskList } from '../../context/context';

export const TaskPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [editFlag, setEditFlag] = useState(false);

  const { taskList, dispatchTaskList } = useContext(ContextTaskList);

  const { id } = useParams();

  useEffect(() => {
    renderRequestTask(id, dispatchTaskList, setIsLoading);
  }, []);

  return (
    <>
      <div className={style.form}>
        <BreadCrumbs />
        <p className={style.title}> {taskList[0]?.title}</p>
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
