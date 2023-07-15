import style from '../styles/BreadСrumbs.module.css';
import { Link, NavLink, useMatch, useNavigate, useParams } from 'react-router-dom';
import back from '../../img/back.svg';
import { useEffect } from 'react';

export const BreadCrumbs = () => {
  const navigate = useNavigate();

  const urlMatches = useMatch('/:type/:id');
  // console.log(urlMatches.params.id);

  return (
    <ul className={style.breadCrumbs}>
      <li className={style.crumb} onClick={() => navigate(-1)}>
        <Link>
          <img src={back} alt="" />
        </Link>
      </li>
      <li>
        <NavLink to={'/'} className={style.crumb}>
          Главная
        </NavLink>
      </li>
      {urlMatches?.params?.id ? (
        <li>
          <NavLink className={style.crumb}>Задача №{urlMatches.params.id}</NavLink>
        </li>
      ) : (
        ''
      )}
    </ul>
  );
};
