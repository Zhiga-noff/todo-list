import style from '../styles/TaskActive.module.css';
import { renderRequestTask } from '../../modules/render-request-task';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../reuse-components/';
import CreateSelectedTask from '../global-components/CreateSelectedTask';
import PopupEditForm from '../global-components/PopupEditForm';

export const TaskPage = () => {
  const [taskActive, setTaskActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editFlag, setEditFlag] = useState(false);

  const { id } = useParams();

  console.log(taskActive);
  console.log(editFlag);

  useEffect(() => {
    renderRequestTask(id, setTaskActive, setIsLoading);
  }, [editFlag]);

  return (
    <>
      <div className={style.form}>
        <BreadCrumbs />
        <p className={style.title}> {taskActive?.title}</p>
      </div>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <CreateSelectedTask taskActive={taskActive} setEditFlag={setEditFlag} />
      )}
      {editFlag && <PopupEditForm taskActive={taskActive} setEditFlag={setEditFlag} />}
    </>
  );
};
