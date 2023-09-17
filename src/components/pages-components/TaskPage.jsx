import style from '../../styles/TaskActive.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../reuse-components/';
import CreateSelectedTask from '../global-components/CreateSelectedTask';
import PopupEditForm from '../global-components/PopupEditForm';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelect, taskListSelect } from '../../store/selectors';
import { renderRequestTaskActions } from '../../store/actions';

export const TaskPage = () => {
  const isLoading = useSelector(isLoadingSelect);
  const taskList = useSelector(taskListSelect);

  const dispatch = useDispatch();

  const [editFlag, setEditFlag] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'ON_LOADING' });
    dispatch(renderRequestTaskActions(id));
    // renderRequestTask(id, setTaskList, setIsLoading);
  }, [editFlag]);

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
        <div className={style.loader} />
      ) : (
        <CreateSelectedTask setEditFlag={setEditFlag} />
      )}
      {editFlag && <PopupEditForm setEditFlag={setEditFlag} />}
    </>
  );
};
