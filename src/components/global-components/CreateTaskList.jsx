import style from '../../styles/App.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelect, refreshSelect, taskListSelect } from '../../store/selectors';
import { renderTaskListActions } from '../../store/actions';

export const CreateTaskList = () => {
  const taskList = useSelector(taskListSelect);
  const isLoading = useSelector(isLoadingSelect);
  const refreshFlag = useSelector(refreshSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ON_LOADING' });
    dispatch(renderTaskListActions);
  }, [refreshFlag]);

  return isLoading ? (
    <div className={style.loader} />
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
