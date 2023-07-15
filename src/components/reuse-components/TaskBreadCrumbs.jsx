import style from '../../styles/BreadСrumbs.module.css';
import { NavLink, useParams } from 'react-router-dom';

export const TaskBreadCrumbs = ({}) => {
  const { id: taskId } = useParams();

  return taskId ? (
    <li>
      <NavLink className={style.crumb}>Задача №{taskId}</NavLink>
    </li>
  ) : (
    ''
  );
};
