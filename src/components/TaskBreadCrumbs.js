import style from './styles/BreadСrumbs.module.css';
import { NavLink } from 'react-router-dom';

export const TaskBreadCrumbs = ({ infoAboutTask }) => {
  const { id: taskId } = infoAboutTask;

  return taskId ? (
    <li>
      <NavLink className={style.crumb}>Задача №{taskId}</NavLink>
    </li>
  ) : (
    ''
  );
};
