import style from './styles/BreadСrumbs.module.css';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import back from '../back.svg';
import { useEffect, useState } from 'react';
import { TaskBreadCrumbs } from './TaskBreadCrumbs';

export const BreadСrumbs = ({ infoAboutTask, setInfoAboutTask }) => {
  const navigate = useNavigate();

  return (
    <ul className={style.breadCrumbs}>
      <li className={style.crumb} onClick={() => navigate(-1)}>
        <Link>
          <img src={back} alt="" />
        </Link>
      </li>
      <li onClick={() => setInfoAboutTask((pre) => ({ ...pre, id: '' }))}>
        <NavLink to={'/'} className={style.crumb}>
          Главная
        </NavLink>
      </li>
      <TaskBreadCrumbs infoAboutTask={infoAboutTask} />
    </ul>
  );
};
